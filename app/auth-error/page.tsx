"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ExclamationTriangleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DisplayNumber from "@/components/DisplayNumber";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "An unexpected error occurred";

  // Format error message to be more user-friendly
  const formatError = (error: string) => {
    return error
      .replace(/_/g, " ")
      .replace(/\./g, "")
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Logo/Branding Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Dr. Keith A. Brown DDS
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Authentication Error
            </h2>
          </div>

          {/* Error Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-red-200 dark:border-red-800">
            <div className="mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">
                  ACCESS DENIED
                </h3>
                <p className="text-sm text-red-600 dark:text-red-300 font-medium">
                  {formatError(error)}
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This administrative portal is restricted to authorized personnel only. Your email address is not authorized for access.
              </p>
            </div>

            <Link
              href="/login"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-teal-500 dark:hover:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/20 transition-all shadow-sm hover:shadow-md"
            >
              Return to Login
            </Link>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                <ExclamationTriangleIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600 dark:text-red-400" />
                <p>
                  If you believe you should have access, please contact Dr. Keith A. Brown at{" "}
                  <DisplayNumber className="text-teal-600 dark:text-teal-400 hover:underline font-medium" />
                  {" "}or{" "}
                  <a href="mailto:admin@keithbrowndds.com" className="text-teal-600 dark:text-teal-400 hover:underline font-medium">
                    admin@keithbrowndds.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Help Text */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Questions?{" "}
            <DisplayNumber
              prefixText="Call "
              className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  );
}
