"use client";
import { useState } from "react";
import SizeGuideTable from "./SizeGuideTable";
const ProductDetailCard = () => {
  // ข้อมูลสินค้าที่รองรับหลายสี
  const variants = {
    blue: {
      name: "Ocean Blue",
      image: "/assets/mock/mock-p1.svg",
      bgClass: "bg-blue-500",
    },
    red: {
      name: "Sunset Red",
      image: "/assets/mock/mock-p1.svg",
      bgClass: "bg-red-500",
    },
    black: {
      name: "Midnight Black",
      image: "/assets/mock/mock-p1.svg",
      bgClass: "bg-black",
    },
  };

  const [selectedColor, setSelectedColor] = useState("blue");
  const currentProduct = variants[selectedColor];

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6">
      {/* 1. ส่วนรูปภาพ: เปลี่ยนตาม State */}
      <div className="w-full md:w-1/2">
        <img
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-full"
        />
      </div>

      {/* 2. ส่วนรายละเอียด: อัปเดตตามสีที่เลือก */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="font-mono font-border text-xl pt-6">
          Cycling Club T-Shirt
        </h2>
        <p className="font-mono text-sm">Cat Club Collection</p>
        <p className="font-mono  text-xs">
          Tusse grinned and told them, "We don't rush, we ride like cats"
        </p>
        <span className="font-mono font-border text-xl">390 THB</span>

        {/* 3. ส่วนตัวเลือกสี (Color Picker) */}
        <div>
          <div className="flex gap-3 p-2">
            {Object.keys(variants).map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 border-2 rounded-full transition-all ${
                  selectedColor === color
                    ? "border-black scale-110"
                    : "border-transparent"
                } ${variants[color].bgClass}`}
                title={variants[color].name}
              />
            ))}
          </div>
          <p className="text-xs font-mono">Color: {currentProduct.name}</p>
        </div>

        <SizeGuideTable />
      </div>
    </div>
  );
};

export default ProductDetailCard;
