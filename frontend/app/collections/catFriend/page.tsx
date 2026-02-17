"use client";
import { useEffect, useState } from "react";
import Preview from "@/components/Preview";
import Controls from "@/components/Controls";
import ProductCard from "@/components/ProductCard";

export default function CatFriend() {
  // เก็บสถานะการเลือกชิ้นส่วน
  const [config, setConfig] = useState({
    head: "white1",
    eyes: "e4",
    mouth: "m3",
    whiskers: "w1",
  });

  interface product {
    name: string;
    description: string;
    price: number; // Use number for display
    imagePath: string; // Matches your Kotlin ProductResponse
    collection: string;
  }
  const [Data, setData] = useState<product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      try {
        const response = await fetch(
          `${baseUrl}/get-product-by-collection/Cat Friend Collection`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-mono">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <p className="text-center text-black font-sans mb-8">
          Create your own cat and let's be friends!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ฝั่งซ้าย: Preview */}
          <Preview config={config} setConfig={setConfig} />

          {/* ฝั่งขวา: Controls */}
          <Controls config={config} setConfig={setConfig} />
        </div>
      </div>
      <p className="font-mono font-border text-center text-2xl p-6">PRODUCTS</p>
      <div className="flex flex-wrap justify-center gap-10 p-4">
      {Data.map((item) => (
            <ProductCard key={item.name} product={item} />
        ))}
        </div>
    </main>
  );
}
