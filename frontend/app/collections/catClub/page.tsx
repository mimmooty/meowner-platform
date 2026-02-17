"use client";
import { useEffect, useState } from "react";
import MajaRunScroll from "@/components/MajaRunScroll";
import ProductCard from "@/components/ProductCard";
export default function Catclub() {
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
              `${baseUrl}/get-product-by-collection/Cat Club Collection`,
            );
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
    return(<><div className="flex justify-center items-center w-full 
        h-[30vh]">
        </div>
        <MajaRunScroll /> <div className="bg-white">
        <p className="font-mono font-border text-center text-2xl">PRODUCTS</p>
      
        <div className="flex flex-wrap justify-center gap-10 p-4">
        {Data.map((item) => (
          <ProductCard key={item.name} product={item} />
        ))}
        </div>
    </div></>);
}