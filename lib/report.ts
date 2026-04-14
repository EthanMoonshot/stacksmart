import crypto from "crypto";
import { AnalysisResult, Recommendation } from "@/lib/types";
import { query } from "@/lib/db";

export interface ReportSnapshot {
  id: string;
  createdAt: string;
  analysis: AnalysisResult;
}

export interface ReportViewModel {
  analysis: AnalysisResult;
  recommendationCount: number;
  monthlyProjection: number;
  annualProjection: number;
  threeYearProjection: number;
  roiPercentage: number;
  prioritizedRecommendations: Recommendation[];
  quickWins: Recommendation[];
  highestSavings: Recommendation[];
}

type SharedReportRow = {
  id: string;
  created_at: Date | string;
  analysis: AnalysisResult;
};

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function capProjectedSavings(projectedSavings: number, monthlySpend: number) {
  if (monthlySpend <= 0) return 0;
  const realisticCeiling = roundCurrency(monthlySpend * 0.7);
  if (projectedSavings > monthlySpend) return realisticCeiling;
  return roundCurrency(Math.min(projectedSavings, realisticCeiling));
}

function mapSharedReport(row: SharedReportRow): ReportSnapshot {
  return {
    id: row.id,
    createdAt: new Date(row.created_at).toISOString(),
    analysis: row.analysis,
  };
}

export function buildReportViewModel(analysis: AnalysisResult): ReportViewModel {
  const prioritizedRecommendations = [...analysis.recommendations].sort((a, b) => b.monthlySavings - a.monthlySavings);
  const quickWins = prioritizedRecommendations
    .filter((item) => item.effortLevel === "Low" || item.priority === "high")
    .slice(0, 4);
  const highestSavings = prioritizedRecommendations.slice(0, 3);
  const monthlyProjection = capProjectedSavings(analysis.potentialMonthlySavings, analysis.monthlySpend);
  const annualProjection = roundCurrency(monthlyProjection * 12);
  const threeYearProjection = roundCurrency(annualProjection * 3);
  const roiPercentage = analysis.monthlySpend > 0 ? roundCurrency((monthlyProjection / analysis.monthlySpend) * 100) : 0;

  return {
    analysis,
    recommendationCount: prioritizedRecommendations.length,
    monthlyProjection,
    annualProjection,
    threeYearProjection,
    roiPercentage,
    prioritizedRecommendations,
    quickWins,
    highestSavings,
  };
}

export async function createSharedReport(analysis: AnalysisResult): Promise<ReportSnapshot> {
  const id = crypto.randomUUID().slice(0, 8);
  const createdAt = new Date().toISOString();

  await query(
    `INSERT INTO shared_reports (id, created_at, analysis)
     VALUES ($1, $2, $3::jsonb)`,
    [id, createdAt, JSON.stringify(analysis)],
  );

  return {
    id,
    createdAt,
    analysis,
  };
}

export async function readSharedReport(id: string): Promise<ReportSnapshot | null> {
  const result = await query<SharedReportRow>(
    `SELECT id, created_at, analysis
     FROM shared_reports
     WHERE id = $1
     LIMIT 1`,
    [id],
  );

  return result.rows[0] ? mapSharedReport(result.rows[0]) : null;
}
