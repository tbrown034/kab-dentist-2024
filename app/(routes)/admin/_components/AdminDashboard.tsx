"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  Area,
  AreaChart
} from "recharts";
import {
  PhoneIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import metricsData from "@/lib/data/dashboard-metrics.json";

const AdminDashboard = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("30d");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  // Colors for charts
  const COLORS = ["#0d9488", "#14b8a6", "#5eead4", "#99f6e4", "#2dd4bf"];

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format percentage
  const formatPercent = (value: number) => `${value.toFixed(1)}%`;

  // KPI Cards Component
  const KPICard = ({ title, value, change, icon: Icon, prefix = "", suffix = "" }: {
    title: string;
    value: string | number;
    change: number;
    icon: any;
    prefix?: string;
    suffix?: string;
  }) => {
    const isPositive = change >= 0;
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
            <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          </div>
          <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
            {Math.abs(change)}%
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {prefix}{value}{suffix}
        </p>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Practice Analytics Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time insights from Google Ads, Local Services, CallRail, and Analytics
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
                onClick={() => signOut()}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Date Range Selector */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["7d", "30d", "90d", "YTD"].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedDateRange(range)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDateRange === range
                  ? "bg-teal-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {range === "YTD" ? "Year to Date" : `Last ${range}`}
            </button>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            title="Total Spend"
            value={formatCurrency(metricsData.googleAds.totalSpend + metricsData.localServices.totalSpend)}
            change={12.5}
            icon={CurrencyDollarIcon}
          />
          <KPICard
            title="Total Leads"
            value={metricsData.googleAds.conversions + metricsData.localServices.leads}
            change={18.3}
            icon={UserGroupIcon}
          />
          <KPICard
            title="Avg Cost/Lead"
            value={formatCurrency(
              (metricsData.googleAds.totalSpend + metricsData.localServices.totalSpend) /
              (metricsData.googleAds.conversions + metricsData.localServices.leads)
            )}
            change={-5.2}
            icon={ChartBarIcon}
          />
          <KPICard
            title="Total Calls"
            value={metricsData.callRail.totalCalls}
            change={22.7}
            icon={PhoneIcon}
          />
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Cost Over Time Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Marketing Spend Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={metricsData.costOverTime.slice(-30)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(date) => new Date(date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                />
                <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
                <Tooltip
                  formatter={(value) => formatCurrency(value as number)}
                  labelFormatter={(date) => new Date(date as string).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' })}
                />
                <Legend />
                <Area type="monotone" dataKey="googleAds" stackId="1" stroke="#0d9488" fill="#14b8a6" name="Google Ads" />
                <Area type="monotone" dataKey="localServices" stackId="1" stroke="#14b8a6" fill="#5eead4" name="Local Services" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Calls by Hour Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Call Volume by Hour
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metricsData.callRail.callsByHour}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(hour) => `${hour}:00`}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  labelFormatter={(hour) => `${hour}:00 - ${hour}:59`}
                />
                <Bar dataKey="calls" fill="#0d9488" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Metrics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Traffic Sources Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Traffic Sources
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={metricsData.googleAnalytics.traffic}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ source, percentage }: any) => `${source}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="users"
                >
                  {metricsData.googleAnalytics.traffic.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Campaign Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Campaign Performance
            </h3>
            <div className="space-y-4">
              {metricsData.googleAds.campaigns.map((campaign, index) => (
                <div key={index} className="border-l-4 border-teal-600 pl-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {campaign.name}
                  </p>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {campaign.clicks} clicks • {campaign.conversions} conv
                    </span>
                    <span className="text-xs font-semibold text-teal-600">
                      {formatCurrency(campaign.spend)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Pages
            </h3>
            <div className="space-y-3">
              {metricsData.googleAnalytics.topPages.slice(0, 5).map((page, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {page.page === "/" ? "Home" : page.page.replace("/", "").charAt(0).toUpperCase() + page.page.slice(2)}
                    </p>
                    <p className="text-xs text-gray-500">Avg: {page.avgTime}</p>
                  </div>
                  <span className="text-sm font-semibold text-teal-600">
                    {page.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">CTR</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatPercent(metricsData.googleAds.ctr)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Avg CPC</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(metricsData.googleAds.avgCpc)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Answer Rate</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {formatPercent((metricsData.callRail.answeredCalls / metricsData.callRail.totalCalls) * 100)}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">ROI</p>
            <p className="text-xl font-bold text-green-600">
              {metricsData.kpis.roi}x
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Dashboard data simulated from Google Looker Studio inputs • Last updated: {new Date(metricsData.lastUpdated).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
