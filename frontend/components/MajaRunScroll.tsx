"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function MajaRunScroll() {
  const containerRef = useRef(null);
  const catRef = useRef(null);
  const catRightRef = useRef(null);
  useGSAP(
    () => {
      // แอนิเมชันเลื่อนแมวจากซ้ายไปขวา
      gsap.to(catRef.current, {
        x: "50vw", // เลื่อนไปทางขวา 80% ของความกว้างหน้าจอ
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // เริ่มเมื่อส่วนหัวของ Container ถึงกลางจอ
          end: "bottom center", // จบเมื่อส่วนท้ายของ Container ถึงกลางจอ
          scrub: 10, // ผูกการเคลื่อนไหวตามความเร็วการ Scroll (1 คือให้มีความนุ่มนวล)
        },
      });

      gsap.fromTo(
        catRightRef.current,
        { x: "100vw" }, // from vars
        {
          x: "10vw", // to vars
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="md:h-[30vh] h-[40vh] relative">
      {/* รูปแมวของคุณ */}
      <img
        ref={catRef}
        src="/cat-walking.gif"
        alt="Walking Cat"
        className=" w-60  absolute md:left-[30VW] left-[-10vw]"
      />
      {/* <img
          ref={catRightRef}
          src="/cat-walking.gif"
          alt="Walking Cat"
          className="hidden md:block w-60  absolute left-0 top-80 scale-x-[-1]"
        /> */}
    </div>
  );
}
