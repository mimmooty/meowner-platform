import { useState } from "react";
import { ComponentProps } from "../types/cat";
const parts = {
  head: ["black1", "gray1", "orange1", "white1", "vicianmas1"],
  eyes: ["e1", "e2", "e3", "e4"],
  mouth: ["m1", "m2", "m3"],
  whiskers: ["w1", "w2", "w3", "none"],
};

export default function Controls({ config, setConfig }: ComponentProps) {
  const [activeTab, setActiveTab] = useState<keyof typeof parts>("head");
  type PartCategory = keyof typeof parts;
  return (
    <div className="flex flex-col md:border-l pl-8">
      {/* Tabs Menu */}
      <div className="flex gap-4 border-b mb-4 text-sm font-medium text-gray-500">
        {(Object.keys(parts) as PartCategory[]).map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-2 capitalize ${activeTab === tab ? "text-red-500 border-b-2 border-red-500" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-4 gap-4">
        {parts[activeTab].map((item) => (
          <button
            key={item}
            onClick={() => setConfig({ ...config, [activeTab]: item })}
            className={`aspect-square bg-gray-50 border rounded-md hover:border-red-300 transition-all p-2 ${
              config[activeTab] === item
                ? "border-red-500 ring-1 ring-red-500"
                : ""
            }`}
          >
            <img src={`/assets/cat/${activeTab}/${item}.svg`} alt={item} />
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-auto pt-8 flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded text-xs uppercase font-bold">
          Random
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded text-xs uppercase font-bold">
          Reset
        </button>
        <button
          className="ml-auto px-6 py-2 bg-black text-white rounded text-xs uppercase font-bold hover:bg-green-600"
          onClick={() => alert("เตรียมส่งไฟล์ไปพิมพ์ลายเสื้อ!")}
        >
          Print on T-Shirt
        </button>
      </div>
    </div>
  );
}
