"use client";

import { signIn } from "next-auth/react";
import { Chrome, ArrowRight } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[360px] text-center space-y-8">
        {/* ปุ่ม Google Login */}
        <button className="w-full flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-700 py-4 px-6 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 font-semibold text-lg shadow-sm">
          ดำเนินการต่อด้วย Google
        </button>
      </div>
    </div>
  );
}
