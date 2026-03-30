"use client";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface ReportActionsProps {
  reportTitle: string;
  shareId?: string;
}

export default function ReportActions({ reportTitle, shareId }: ReportActionsProps) {
  const [loading, setLoading] = useState<"pdf" | "share" | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  useEffect(() => {
    if (shareId && typeof window !== "undefined") {
      setShareUrl(`${window.location.origin}/report/${shareId}`);
    }
  }, [shareId]);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3000);
  };

  const handlePdf = async () => {
    const target = document.getElementById("report-content");
    if (!target) return;

    try {
      setLoading("pdf");
      const canvas = await html2canvas(target, {
        scale: 2,
        backgroundColor: "#020617",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;

      let y = 0;
      let remainingHeight = contentHeight;
      pdf.setFillColor(2, 6, 23);
      pdf.rect(0, 0, pageWidth, pageHeight, "F");
      pdf.addImage(imgData, "PNG", margin, y + margin, contentWidth, contentHeight);
      remainingHeight -= pageHeight - margin * 2;

      while (remainingHeight > 0) {
        y -= pageHeight - margin * 2;
        pdf.addPage();
        pdf.setFillColor(2, 6, 23);
        pdf.rect(0, 0, pageWidth, pageHeight, "F");
        pdf.addImage(imgData, "PNG", margin, y + margin, contentWidth, contentHeight);
        remainingHeight -= pageHeight - margin * 2;
      }

      pdf.save(`${reportTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`);
      showToast("PDF downloaded.");
    } catch (error) {
      console.error(error);
      showToast("PDF export failed.");
    } finally {
      setLoading(null);
    }
  };

  const handleShare = async () => {
    try {
      setLoading("share");
      const response = await fetch("/api/report/share", { method: "POST" });
      if (!response.ok) throw new Error("Failed to share report");
      const data = await response.json();
      const url = `${window.location.origin}/report/${data.id}`;
      await navigator.clipboard.writeText(url);
      showToast("Share link copied to clipboard.");
      window.history.replaceState({}, "", `/report?shareId=${data.id}`);
    } catch (error) {
      console.error(error);
      showToast("Share link failed.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-dark-800 border border-dark-700 text-white px-5 py-3 rounded-lg shadow-xl text-sm flex items-center gap-2 animate-fade-in">
          <span>{toast}</span>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button onClick={handlePdf} disabled={loading !== null} className="btn-secondary text-sm py-2 px-4 disabled:opacity-60">
          {loading === "pdf" ? "Generating PDF..." : "Download PDF"}
        </button>
        <button onClick={handleShare} disabled={loading !== null} className="btn-primary text-sm py-2 px-4 disabled:opacity-60">
          {loading === "share" ? "Creating link..." : "Share Report"}
        </button>
      </div>
      {shareUrl && <p className="mt-2 text-right text-xs text-dark-500">Share URL: {shareUrl}</p>}
    </>
  );
}
