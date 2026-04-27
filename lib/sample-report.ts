import sampleReport from "@/data/reports/a8266d94.json";
import type { AnalysisResult } from "@/lib/types";

export const SAMPLE_REPORT_ID = sampleReport.id;
export const sampleAnalysis = sampleReport.analysis as AnalysisResult;
export const sampleReportCreatedAt = sampleReport.createdAt;
