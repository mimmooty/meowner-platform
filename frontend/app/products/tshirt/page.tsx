"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function TshirtPage() {
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
      try {
        const response = await fetch(
          "https://meowner-gateway.up.railway.app/get-product/TSHIRT",
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
    <div className="bg-white">
      <div className="flex flex-wrap justify-center gap-10 p-4">
        {Data.map((item) => (
          <div key={item.name} className="p-4 bg-white hover:shadow-sm w-70">
            <Link href="/">
              <Image src={item.imagePath} alt="maja" width={500} height={10} />
            </Link>
            <p className="font-mono font-bold text-xs p-2">{item.name}</p>
            <p className="font-mono text-xs p-2">{item.collection}</p>
            <p className="font-mono text-xs p-2">{item.description}</p>
            <p className="text-end text-black-500">{item.price} THB</p>
          </div>
        ))}
      </div>
    </div>
  );
}
