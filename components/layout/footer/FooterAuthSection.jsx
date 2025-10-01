"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function FooterAuthSection() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-gray-400">Loading...</span>
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-600 dark:text-gray-300">
          Welcome, {session.user.name?.split(' ')[0] || 'User'}
        </span>
        <span className="text-gray-400">•</span>
        <Link
          href="/admin"
          className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
        >
          Admin
        </Link>
        <span className="text-gray-400">•</span>
        <button
          onClick={() => signOut()}
          className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/login?callbackUrl=/admin"
        className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 transition-colors"
      >
        Log In
      </Link>
    </div>
  );
}
