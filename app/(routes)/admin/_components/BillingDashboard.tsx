"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingDownIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import billingData from "@/lib/data/google-ads-billing.json";

type DateRange = "3m" | "6m" | "12m" | "ytd" | "all";
type ChartView = "all" | "google" | "local";

const BillingDashboard = () => {
  const router = useRouter();
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>("3m");
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [chartView, setChartView] = useState<ChartView>("all");

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format currency with decimals
  const formatCurrencyPrecise = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Filter data based on date range
  const filteredData = useMemo(() => {
    const now = new Date();
    let startYear = billingData.monthly_data[0].year;
    let startMonth = billingData.monthly_data[0].month;

    switch (selectedDateRange) {
      case "3m":
        const threeMonthsAgo = new Date(now);
        threeMonthsAgo.setMonth(now.getMonth() - 3);
        startYear = threeMonthsAgo.getFullYear();
        startMonth = threeMonthsAgo.getMonth() + 1;
        break;
      case "6m":
        const sixMonthsAgo = new Date(now);
        sixMonthsAgo.setMonth(now.getMonth() - 6);
        startYear = sixMonthsAgo.getFullYear();
        startMonth = sixMonthsAgo.getMonth() + 1;
        break;
      case "12m":
        const twelveMonthsAgo = new Date(now);
        twelveMonthsAgo.setMonth(now.getMonth() - 12);
        startYear = twelveMonthsAgo.getFullYear();
        startMonth = twelveMonthsAgo.getMonth() + 1;
        break;
      case "ytd":
        startYear = now.getFullYear();
        startMonth = 1;
        break;
      case "all":
      default:
        break;
    }

    return billingData.monthly_data.filter((month) => {
      const monthDate = month.year * 100 + month.month;
      const startDate = startYear * 100 + startMonth;
      return monthDate >= startDate;
    });
  }, [selectedDateRange]);

  // All-time totals (never changes)
  const allTimeTotals = useMemo(() => {
    const totalSpend = billingData.monthly_data.reduce((sum, m) => sum + m.total_spend, 0);
    const totalCredits = billingData.monthly_data.reduce((sum, m) => sum + (m.credits || 0), 0);

    return {
      totalSpend,
      totalCredits,
      netSpend: totalSpend + totalCredits,
      avgMonthly: totalSpend / billingData.monthly_data.length,
    };
  }, []);

  // Cumulative data for all-time graph
  const cumulativeData = useMemo(() => {
    let runningTotal = 0;
    let runningGoogleAds = 0;
    let runningLSA = 0;

    return billingData.monthly_data.map(month => {
      runningTotal += month.total_spend;
      runningGoogleAds += month.google_ads.spend;
      runningLSA += month.lsa.spend;

      return {
        ...month,
        cumulative_total: runningTotal,
        cumulative_google: runningGoogleAds,
        cumulative_lsa: runningLSA,
      };
    });
  }, []);

  // Recalculate totals for filtered data
  const filteredTotals = useMemo(() => {
    const totalSpend = filteredData.reduce((sum, m) => sum + m.total_spend, 0);
    const googleAdsSpend = filteredData.reduce((sum, m) => sum + m.google_ads.spend, 0);
    const lsaSpend = filteredData.reduce((sum, m) => sum + m.lsa.spend, 0);
    const totalClicks = filteredData.reduce((sum, m) => sum + m.google_ads.clicks, 0);
    const totalLeads = filteredData.reduce((sum, m) => sum + m.lsa.leads, 0);
    const totalCredits = filteredData.reduce((sum, m) => sum + (m.credits || 0), 0);

    return {
      totalSpend,
      googleAdsSpend,
      lsaSpend,
      totalClicks,
      totalLeads,
      totalCredits,
      netSpend: totalSpend + totalCredits,
      avgMonthly: totalSpend / (filteredData.length || 1),
      avgCostPerClick: totalClicks > 0 ? googleAdsSpend / totalClicks : 0,
      avgCostPerLead: totalLeads > 0 ? lsaSpend / totalLeads : 0,
    };
  }, [filteredData]);

  // Alerts
  const alerts = useMemo(() => {
    const alertsList = [];
    const lastMonth = filteredData[filteredData.length - 1];
    if (lastMonth && lastMonth.total_spend < 100) {
      alertsList.push({
        type: "warning",
        message: `${lastMonth.month_name} ${lastMonth.year} appears incomplete (only ${formatCurrency(lastMonth.total_spend)} spent)`,
      });
    }
    return alertsList;
  }, [filteredData]);

  // Export functions
  const exportToCSV = (type: "summary" | "detailed") => {
    const date = new Date().toISOString().split("T")[0];

    if (type === "summary") {
      const headers = ["Month", "Year", "Total Spend", "Google Ads", "Local Services", "Clicks", "Leads"];
      const rows = filteredData.map((month) => [
        month.month_name,
        month.year,
        month.total_spend.toFixed(2),
        month.google_ads.spend.toFixed(2),
        month.lsa.spend.toFixed(2),
        month.google_ads.clicks,
        month.lsa.leads || 0,
      ]);
      const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
      downloadFile(csv, `billing-summary-${date}.csv`, "text/csv");
    } else {
      const headers = ["Month", "Year", "Ad Charges", "Credits/Refunds", "Net Charges"];
      const rows = filteredData.map((month) => [
        month.month_name,
        month.year,
        (month.google_ads.spend + month.lsa.spend).toFixed(2),
        month.credits ? month.credits.toFixed(2) : "0.00",
        month.total_spend.toFixed(2),
      ]);
      const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
      downloadFile(csv, `billing-detailed-${date}.csv`, "text/csv");
    }
    setShowExportMenu(false);
  };

  const exportReport = () => {
    const date = new Date().toISOString().split("T")[0];
    const rangeLabel =
      selectedDateRange === "all" ? "All Time" : selectedDateRange === "ytd" ? "Year to Date" : `Last ${selectedDateRange.replace("m", " Months")}`;

    const report = `KEITH BROWN DDS - MARKETING BILLING REPORT
Generated: ${new Date().toLocaleDateString()}
Period: ${rangeLabel}

Total Marketing Spend: ${formatCurrency(filteredTotals.totalSpend)}
  - Google Ads: ${formatCurrency(filteredTotals.googleAdsSpend)}
  - Local Services: ${formatCurrency(filteredTotals.lsaSpend)}

Credits Applied: ${formatCurrency(Math.abs(filteredTotals.totalCredits))}
Net Spend: ${formatCurrency(filteredTotals.netSpend)}

Performance:
  - Website Visits: ${filteredTotals.totalClicks.toLocaleString()}
  - Phone Leads: ${filteredTotals.totalLeads}
  - Avg Cost Per Click: ${formatCurrency(filteredTotals.avgCostPerClick)}
  - Avg Cost Per Lead: ${formatCurrency(filteredTotals.avgCostPerLead)}
`;
    downloadFile(report.trim(), `billing-report-${date}.txt`, "text/plain");
    setShowExportMenu(false);
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const dateRangeOptions: { value: DateRange; label: string }[] = [
    { value: "3m", label: "Last 3 Months" },
    { value: "6m", label: "Last 6 Months" },
    { value: "12m", label: "Last 12 Months" },
    { value: "ytd", label: "Year to Date" },
    { value: "all", label: "All Time" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Marketing Analytics Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Google Ads & Local Services billing data
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowExportMenu(!showExportMenu)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Export
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                {showExportMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-10">
                    <button
                      onClick={() => exportToCSV("summary")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                    >
                      Summary CSV
                    </button>
                    <button
                      onClick={() => exportToCSV("detailed")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Detailed CSV
                    </button>
                    <button
                      onClick={exportReport}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                    >
                      Text Report
                    </button>
                  </div>
                )}
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>
              <button
                onClick={() =>
                  signOut({
                    fetchOptions: {
                      onSuccess: () => router.push("/"),
                    },
                  })
                }
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 dark:bg-teal-600 rounded-lg hover:bg-teal-700 dark:hover:bg-teal-700 transition-colors"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Alerts - Moved to top */}
        {alerts.length > 0 && (
          <div className="mb-6">
            {alerts.map((alert, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 dark:border-amber-600 rounded-lg shadow-sm"
              >
                <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-amber-900 dark:text-amber-200">{alert.message}</p>
              </div>
            ))}
          </div>
        )}

        {/* All-Time Totals - Source of Truth */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">All-Time Totals</h2>
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full">
              Since Inception
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Gross Spend */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-teal-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <CurrencyDollarIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Gross Spend</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(allTimeTotals.totalSpend)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Before credits</div>
            </div>

            {/* Credits */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-teal-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ArrowTrendingDownIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Credits</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(allTimeTotals.totalCredits)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Refunds + promos</div>
            </div>

            {/* Net Spend */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-teal-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <CurrencyDollarIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Net Spend</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(allTimeTotals.netSpend)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Actual cost</div>
            </div>

            {/* Monthly Average */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-teal-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ChartBarIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Avg/Month</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(allTimeTotals.avgMonthly)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Per month</div>
            </div>
          </div>
        </div>

        {/* Cumulative Spending Graph */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Cumulative Spending Growth</h2>
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full">
              All Time
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Timeline (Month/Year)</span>
                <span className="font-semibold">Total Invested ($)</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={450}>
              <AreaChart data={cumulativeData}>
                <defs>
                  <linearGradient id="cumulativeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
                <XAxis
                  dataKey="month_name"
                  tick={{ fontSize: 14 }}
                  stroke="#6b7280"
                  className="dark:stroke-gray-400"
                  height={60}
                  tickFormatter={(value, index) => {
                    const month = cumulativeData[index];
                    return `${value.substring(0, 3)} '${String(month.year).slice(2)}`;
                  }}
                />
                <YAxis
                  tick={{ fontSize: 14 }}
                  stroke="#6b7280"
                  className="dark:stroke-gray-400"
                  width={80}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    color: "#111827",
                  }}
                  itemStyle={{ color: "#111827" }}
                  labelStyle={{ color: "#111827", fontWeight: 600 }}
                  formatter={(value: any) => formatCurrency(value)}
                  labelFormatter={(label, payload) => {
                    if (payload && payload[0]) {
                      const data = payload[0].payload;
                      return `${data.month_name} ${data.year}`;
                    }
                    return label;
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="cumulative_total"
                  stroke="#0d9488"
                  strokeWidth={3}
                  fill="url(#cumulativeGradient)"
                  name="Total Cumulative"
                />
                <Area
                  type="monotone"
                  dataKey="cumulative_google"
                  stroke="#14b8a6"
                  strokeWidth={2}
                  fill="transparent"
                  name="Google Ads Cumulative"
                />
                <Area
                  type="monotone"
                  dataKey="cumulative_lsa"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fill="transparent"
                  name="LSA Cumulative"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Separator */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-100 dark:bg-gray-950 text-sm font-semibold text-gray-600 dark:text-gray-400">
              PERIOD ANALYSIS
            </span>
          </div>
        </div>

        {/* Date Range Selector */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mr-1">
              Select Period:
            </span>
            {dateRangeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedDateRange(option.value)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedDateRange === option.value
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Period-Filtered Metrics */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {dateRangeOptions.find(opt => opt.value === selectedDateRange)?.label} Summary
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Gross Spend (Filtered) */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-blue-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <CurrencyDollarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Gross Spend</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(filteredTotals.totalSpend)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Before credits</div>
            </div>

            {/* Credits (Filtered) */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-purple-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <ArrowTrendingDownIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Credits</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(filteredTotals.totalCredits)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Refunds + promos</div>
            </div>

            {/* Net Spend (Filtered) */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-blue-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <CurrencyDollarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Net Spend</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(filteredTotals.netSpend)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Actual cost</div>
            </div>

            {/* Monthly Average (Filtered) */}
            <div className="bg-white dark:bg-gray-800 border-l-4 border-l-purple-500 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <ChartBarIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Avg/Month</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{formatCurrency(filteredTotals.avgMonthly)}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Per month</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Historical Spending Trends</h2>
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full">
              All Months
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setChartView("all")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    chartView === "all"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setChartView("google")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    chartView === "google"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  Google Ads
                </button>
                <button
                  onClick={() => setChartView("local")}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    chartView === "local"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  Local Services
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLocal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
              <XAxis
                dataKey="month_name"
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tickFormatter={(value, index) => {
                  const month = filteredData[index];
                  return `${value.substring(0, 3)} ${String(month.year).slice(2)}`;
                }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
                className="dark:stroke-gray-400"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  color: "#111827",
                }}
                itemStyle={{ color: "#111827" }}
                labelStyle={{ color: "#111827", fontWeight: 600 }}
                formatter={(value: any) => formatCurrency(value)}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    const data = payload[0].payload;
                    return `${data.month_name} ${data.year}`;
                  }
                  return label;
                }}
              />
              <Legend />
              {chartView === "all" && (
                <>
                  <Area
                    type="monotone"
                    dataKey="total_spend"
                    stroke="#0d9488"
                    strokeWidth={3}
                    fill="url(#colorTotal)"
                    name="Total Spend"
                  />
                  <Area
                    type="monotone"
                    dataKey="google_ads.spend"
                    stroke="#14b8a6"
                    strokeWidth={2}
                    fill="transparent"
                    name="Google Ads"
                  />
                  <Area
                    type="monotone"
                    dataKey="lsa.spend"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    fill="transparent"
                    name="Local Services"
                  />
                </>
              )}
              {chartView === "google" && (
                <>
                  <Area
                    type="monotone"
                    dataKey="google_ads.spend"
                    stroke="#14b8a6"
                    strokeWidth={3}
                    fill="url(#colorGoogle)"
                    name="Google Ads"
                  />
                  <Area
                    type="monotone"
                    dataKey="total_spend"
                    stroke="#0d9488"
                    strokeWidth={2}
                    fill="transparent"
                    name="Total Spend"
                  />
                  <Area
                    type="monotone"
                    dataKey="lsa.spend"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    fill="transparent"
                    name="Local Services"
                  />
                </>
              )}
              {chartView === "local" && (
                <>
                  <Area
                    type="monotone"
                    dataKey="lsa.spend"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    fill="url(#colorLocal)"
                    name="Local Services"
                  />
                  <Area
                    type="monotone"
                    dataKey="total_spend"
                    stroke="#0d9488"
                    strokeWidth={2}
                    fill="transparent"
                    name="Total Spend"
                  />
                  <Area
                    type="monotone"
                    dataKey="google_ads.spend"
                    stroke="#14b8a6"
                    strokeWidth={2}
                    fill="transparent"
                    name="Google Ads"
                  />
                </>
              )}
            </AreaChart>
          </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MagnifyingGlassIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Google Ads</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{filteredTotals.totalClicks.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total clicks</div>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{formatCurrencyPrecise(filteredTotals.avgCostPerClick)} / click</div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <PhoneIcon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">Local Services</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{filteredTotals.totalLeads}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total leads</div>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{formatCurrency(filteredTotals.avgCostPerLead)} / lead</div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-4">Platform Split</div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Google Ads', value: filteredTotals.googleAdsSpend },
                    { name: 'Local Services', value: filteredTotals.lsaSpend }
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#14b8a6" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip formatter={(value: any) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Table */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Complete Monthly Breakdown</h2>
            <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full">
              All Time
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-900">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Month</th>
                    <th className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Total</th>
                    <th className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Google Ads</th>
                    <th className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">LSA</th>
                    <th className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Clicks</th>
                    <th className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">Leads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {billingData.monthly_data.map((month, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-6 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {month.month_name} {month.year}
                      </td>
                      <td className="py-3 px-6 text-sm font-semibold text-gray-900 dark:text-white text-right tabular-nums">
                        {formatCurrency(month.total_spend)}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300 text-right tabular-nums">
                        {formatCurrency(month.google_ads.spend)}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300 text-right tabular-nums">
                        {formatCurrency(month.lsa.spend)}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300 text-right tabular-nums">
                        {month.google_ads.clicks.toLocaleString()}
                      </td>
                      <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300 text-right tabular-nums">
                        {month.lsa.leads || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDashboard;
