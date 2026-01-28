"use client";

import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center bg-[#33423D]">
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
        <Image src="/2.jpg" alt="maja" width={1200} height={500} />
      </div>
      <div className="flex justify-center items-end p-20">
        <p className="font-mono font-border text-2xl  italic">
          "ใส่เสื้อ Cat Club แล้วออกไปใช้ชีวิตซะ!"
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Image src="/13.jpg" alt="maja" width={600} height={1000} />
        <Image src="/4.jpg" alt="maja" width={600} height={1000} />
        <Image src="/5.jpg" alt="maja" width={600} height={1000} />
      </div>
    </div>
  );
}
