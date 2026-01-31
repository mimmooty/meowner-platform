"use client"; // ใช้ Client Component เฉพาะที่จำเป็น
import { Instagram, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black h-40">
      <div className="flex justify-center items-center gap-8 pt-10">
        <Instagram color="#ffffff" />
        <Facebook color="#ffffff" />
      </div>
      <div className="flex flex-col items-center pt-10">
        <hr className="border-t border-gray-300 w-1/2" />
        <p className="text-sm text-white pt-5">
          &copy; 2026 the.last.three.cat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
