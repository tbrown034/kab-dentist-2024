"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  PhoneIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import billingData from "@/lib/data/google-ads-billing.json";

const BillingDashboard = () => {
  const router = useRouter();
  const [selectedDateRange, setSelectedDateRange] = useState("all");

  // Colors for charts
  const COLORS = ["#0d9488", "#14b8a6", "#5eead4", "#99f6e4", "#2dd4bf"];

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format percentage
  const formatPercent = (value: number) => `${value.toFixed(1)}%`;

  // KPI Cards Component
  const KPICard = ({
    title,
    value,
    change,
    icon: Icon,
    prefix = "",
    suffix = "",
  }: {
    title: string;
    value: string | number;
    change?: number;
    icon: any;
    prefix?: string;
    suffix?: string;
  }) => {
    const isPositive = change ? change >= 0 : true;
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
            <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          </div>
          {change !== undefined && (
            <div
              className={`flex items-center gap-1 text-sm font-semibold ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPositive ? (
                <ArrowUpIcon className="w-4 h-4" />
              ) : (
                <ArrowDownIcon className="w-4 h-4" />
              )}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {prefix}
          {value}
          {suffix}
        </p>
      </div>
    );
  };

  // Calculate total credits
  const totalCredits = billingData.monthly_data.reduce(
    (sum, month) => sum + (month.credits || 0),
    0
  );
  const netSpend = billingData.summary.totals.all_time_spend + totalCredits;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Marketing Analytics Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Monthly advertising spend tracking for Google Ads & Local
                Services
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                <HomeIcon className="w-4 h-4" />
                Home
              </Link>
              <button
                onClick={() =>
                  signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        router.push("/");
                      },
                    },
                  })
                }
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Important Context Box */}
        <div className="bg-gray-100 dark:bg-gray-700 border-l-4 border-teal-600 p-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-2">
            📌 Understanding This Dashboard
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            This dashboard tracks <strong>advertising expenses only</strong> -
            how much we pay Google for clicks (website visitors) and leads
            (phone calls). Actual patient conversions and ROI are tracked
            separately in Google Analytics.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            title="Total Ad Spend"
            value={formatCurrency(billingData.summary.totals.all_time_spend)}
            icon={CurrencyDollarIcon}
          />
          <KPICard
            title="Net Spend (after credits)"
            value={formatCurrency(Math.round(netSpend))}
            icon={CurrencyDollarIcon}
          />
          <KPICard
            title="Total Website Visits"
            value={billingData.summary.totals.total_clicks.toLocaleString()}
            icon={ChartBarIcon}
          />
          <KPICard
            title="Total Phone Leads"
            value={billingData.summary.totals.total_leads}
            icon={PhoneIcon}
          />
        </div>

        {/* Monthly Trend Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              📈 Monthly Marketing Spend Trend
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Net spending after credits applied (what you actually paid for
              advertising)
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={billingData.monthly_data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month_name"
                tick={{ fontSize: 12 }}
                tickFormatter={(value, index) => {
                  const month = billingData.monthly_data[index];
                  return `${value.substring(0, 3)} ${month.year}`;
                }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
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
                dataKey="google_ads.spend"
                stackId="1"
                stroke="#0d9488"
                fill="#14b8a6"
                name="Google Ads"
              />
              <Area
                type="monotone"
                dataKey="lsa.spend"
                stackId="1"
                stroke="#f59e0b"
                fill="#fbbf24"
                name="Local Services"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Split Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Platform Distribution */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🎯 Platform Investment
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Total spend distribution
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    {
                      name: "Google Ads",
                      value: billingData.summary.totals.google_ads_spend,
                    },
                    {
                      name: "Local Services",
                      value: billingData.summary.totals.lsa_spend,
                    },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) =>
                    `${name}: ${(percent * 100).toFixed(1)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#0d9488" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip formatter={(value: any) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Averages */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📊 Key Metrics
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg Monthly Spend
                </span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {formatCurrency(billingData.summary.averages.monthly_spend)}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg Cost Per Click
                </span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {formatCurrency(
                    billingData.summary.averages.cost_per_click
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Avg Cost Per Lead
                </span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {formatCurrency(billingData.summary.averages.cost_per_lead)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Data Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            📋 Monthly Spending History
          </h2>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Month
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Total
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Google Ads
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  LSA
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Clicks
                </th>
                <th className="text-right py-3 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Leads
                </th>
              </tr>
            </thead>
            <tbody>
              {billingData.monthly_data.map((month, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="py-3 px-2 text-sm text-gray-900 dark:text-white">
                    {month.month_name} {month.year}
                  </td>
                  <td className="py-3 px-2 text-sm text-right font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(month.total_spend)}
                  </td>
                  <td className="py-3 px-2 text-sm text-right text-gray-600 dark:text-gray-400">
                    {formatCurrency(month.google_ads.spend)}
                  </td>
                  <td className="py-3 px-2 text-sm text-right text-gray-600 dark:text-gray-400">
                    {formatCurrency(month.lsa.spend)}
                  </td>
                  <td className="py-3 px-2 text-sm text-right text-gray-600 dark:text-gray-400">
                    {month.google_ads.clicks.toLocaleString()}
                  </td>
                  <td className="py-3 px-2 text-sm text-right text-gray-600 dark:text-gray-400">
                    {month.lsa.leads || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Dashboard data from Google Ads billing pipeline • Last updated:{" "}
          {new Date(billingData.summary.generated_date).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default BillingDashboard;
