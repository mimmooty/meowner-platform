"use client";

import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-white text-black">
      <div className="flex md:flex-row flex-col justify-between items-center bg-[#33423D]">
        <div className="relative w-full md:h-[30vw] h-[60vw]">
          <Image
            src="/assets/mock/mock-b1.svg"
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
