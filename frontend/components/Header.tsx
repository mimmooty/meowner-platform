"use client"; // ใช้ Client Component เฉพาะที่จำเป็น

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isFull, setIsFull] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-30 flex justify-between bg-zinc-100 p-2 text-black">
        {/* Desktop Menu */}
        <ul className="flex-1 hidden md:flex items-end md:ml-5 ml-2 gap-4">
          <Link
            href="/"
            className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)] py-2"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)] py-2"
          >
            Product
          </Link>

          <li className="relative group py-2  font-mono font-bold text-[clamp(1rem,3vw,1.2rem)]">
            <Link
              href="/collections"
              className="relative group py-2 font-mono font-bold text-[clamp(1rem,3vw,1.2rem)]"
            >
              Collections
            </Link>

            {/* Sub Menu (Dropdown) */}
            <ul className="absolute hidden group-hover:block flex flex-col items-center mt-2 w-[40vw] bg-white border border-gray-300 shadow-lg z-10">
              <div className="text-center mt-10">Collections Cat Club</div>
              <div className="flex-1 flex flex-wrap justify-center items-end gap-10 m-10">
                <Image
                  src="/movie.png"
                  alt="maja"
                  width={600}
                  height={600}
                  className="w-[10vw] h-auto"
                />

                <Image
                  src="/bike.png"
                  alt="maja"
                  width={600}
                  height={1000}
                  className="w-[10vw] h-auto"
                />

                <Image
                  src="/running.png"
                  alt="maja"
                  width={600}
                  height={1000}
                  className="w-[10vw] h-auto"
                />
              </div>
              <div className="text-center mt-10">Collections 3D Cat</div>
              <div className="flex-1 flex flex-wrap justify-center items-end gap-10 m-10">
                <Image
                  src="/maja.png"
                  alt="maja"
                  width={600}
                  height={600}
                  className="w-[5vw] h-auto"
                />
              </div>
            </ul>
          </li>
          <li className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)] py-2">
            About
          </li>
        </ul>

        {/* Hamburger Menu (โผล่เฉพาะตอนมือถือ) */}
        <button
          className="md:hidden flex-1 ml-2 z-30"
          onClick={() => setIsFull(!isFull)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex-1 flex flex-col items-center">
          <div>
            <Link href="/" onClick={() => setIsFull(false)}>
              <Image src="/3 cat.svg" alt="maja" width={200} height={10} />
            </Link>
          </div>
          <div>
            <p className="hidden md:block font-mono font-bold text-[clamp(1rem,3vw,2rem)]">
              the.last.three.cat
            </p>
          </div>
        </div>
        <ul className="flex-1 flex justify-end items-end md:mr-5 mr-2">
          <li className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)] py-2">
            Signup
          </li>
        </ul>
      </header>
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-zinc-100 text-black w-full
          transition-all duration-500 ease-in-out ${isFull ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between p-4">
          <Link href="/" onClick={() => setIsFull(false)}>
            <Image src="/3 cat.svg" alt="maja" width={120} height={10} />
          </Link>
          <button onClick={() => setIsFull(!isFull)}>
            {isFull ? <X /> : <div />}
          </button>
        </div>
        <ul className="flex flex-col ml-4 gap-4">
          <Link
            href="/"
            onClick={() => setIsFull(false)}
            className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)]"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsFull(false)}
            className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)]"
          >
            Product
          </Link>

          <li className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)]">
            Collection
          </li>
          <li className="font-mono font-bold text-[clamp(1rem,3vw,1.2rem)]">
            About
          </li>
        </ul>
      </aside>
    </>
  );
}
