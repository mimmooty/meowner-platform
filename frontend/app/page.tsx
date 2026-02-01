"use client";

import Image from "next/image";
import MajaRunScroll from "@/components/MajaRunScroll";
export default function Home() {
  return (
    <div className="bg-white text-black">
      <div className="flex md:flex-row flex-col justify-between items-center bg-[#33423D]">
        <div className="flex-1  justify-center text-center p-20">
          <div>
            <p className="font-serif text-white font-border text-5xl ">
              Collection 2026
            </p>
            <p className="font-sans text-gray-400 md:text-2xl text-lg italic">
              "Weekend Vibes with Maja, Tusse, and Leo"
            </p>
          </div>
        </div>
        <div className="relative md:w-[60vw] w-full md:h-[30vw] h-[60vw]">
          <Image
            src="/2.jpg"
            alt="maja"
            fill
            className="object-cover" // เพื่อให้รูปไม่เบี้ยวเมื่อสัดส่วนเปลี่ยน
          />
        </div>
      </div>
      <div className="flex justify-center items-end p-20">
        <p className="font-mono font-border text-2xl  italic">
          "ใส่เสื้อ Cat Club แล้วออกไปใช้ชีวิตซะ!"
        </p>
      </div>
      <MajaRunScroll />
      <div className="flex-1 flex flex-wrap justify-center items-center gap-4 mb-5">
        <Image
          src="/13.jpg"
          alt="maja"
          width={600}
          height={1000}
          className="md:w-[30vw] w-full h-auto"
        />
        <Image
          src="/4.jpg"
          alt="maja"
          width={600}
          height={1000}
          className="md:w-[30vw] w-full h-auto"
        />
        <Image
          src="/5.jpg"
          alt="maja"
          width={600}
          height={1000}
          className="md:w-[30vw] w-full h-auto"
        />
      </div>
    </div>
  );
}
