"use client";
import { useState } from "react";
import Preview from "@/components/Preview";
import Controls from "@/components/Controls";

export default function CatBuilder() {
  // เก็บสถานะการเลือกชิ้นส่วน
  const [config, setConfig] = useState({
    head: "head1",
    eyes: "eyes1",
    mouth: "mouth1",
  });

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-mono">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <p className="text-center text-black font-sans mb-8">
          Create your own cat for printing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ฝั่งซ้าย: Preview */}
          <Preview config={config} setConfig={setConfig} />

          {/* ฝั่งขวา: Controls */}
          <Controls config={config} setConfig={setConfig} />
        </div>
      </div>
    </main>
  );
}
