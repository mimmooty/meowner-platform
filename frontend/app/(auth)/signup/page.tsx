"use client";

import { signIn } from "next-auth/react";
import { Chrome, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {/* ปุ่ม Google Login */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span>Sign up with Google</span>
      </button>
    </div>
  );
}
