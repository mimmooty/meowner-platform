"use client"; // ใช้ Client Component เฉพาะที่จำเป็น

import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isFull, setIsFull] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-30 flex justify-between bg-zinc-100 p-2 text-black">
        {/* Desktop Menu */}
        <ul className="flex-1 hidden md:flex items-end md:ml-5 ml-2 gap-4">
          <Link href="/" className="font-mono font-bold text-sm py-2 pb-4">
            Home
          </Link>
          <li className="relative group py-2 font-mono font-bold text-sm">
            <button
              className="relative py-2"
              onClick={() => {
                setIsOpen(false); // ปิดเมนู About
                setIsProductOpen(true); // เปิดเมนู Product
              }}
            >
              Product
            </button>
            {/* Submenu */}
            {isProductOpen && (
              <div className="absolute left-0 w-60 bg-white/80 text-black shadow-lg rounded-md">
                <Link
                  href="/products/All"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsProductOpen(false)}
                >
                  ALL
                </Link>
                <Link
                  href="/products/tshirt"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsProductOpen(false)}
                >
                  T-Shirt
                </Link>
                <Link
                  href="/products/accessories"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsProductOpen(false)}
                >
                  Accessories
                </Link>
              </div>
            )}
          </li>
          <li className="relative group py-2 font-mono font-bold text-sm">
            <button
              className="relative py-2"
              onClick={() => {
                setIsProductOpen(false);
                setIsOpen(true);
              }}
            >
              Collection
            </button>
            {/* Submenu */}
            {isOpen && (
              <div className="absolute left-0 w-60 bg-white/80 text-black shadow-lg rounded-md">
                <Link
                  href="/collections/All"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  ALL
                </Link>
                <Link
                  href="/collections/catOriginal"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Cat Original
                </Link>
                <Link
                  href="/collections/catClub"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Cat Club
                </Link>
                <Link
                  href="/collections/catFriend"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Cat friend
                </Link>
              </div>
            )}
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
        {/* header img */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-[100px]">
            <Link href="/" onClick={() => setIsFull(false)}>
              <Image src="/3 cat.svg" alt="maja" width={200} height={10} />
            </Link>
          </div>
          <div>
            <p className="hidden md:block font-mono font-bold text-lg">
              the.last.three.cat
            </p>
          </div>
        </div>
        {/* cart */}
        <ul className="flex-1 flex justify-end md:items-end items-center md:mr-5 mr-2 md:pb-4">
          <ShoppingBasket />
        </ul>
      </header>
      {/* mobile menu */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-zinc-100 text-black w-full
          transition-all duration-500 ease-in-out ${isFull ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between p-4">
          <Link href="/" onClick={() => setIsFull(false)}>
            <Image src="/3 cat.svg" alt="maja" width={120} height={10} />
          </Link>
          <button onClick={() => setIsFull(!isFull)} className="pr-5">
            {isFull ? <X /> : <div />}
          </button>
        </div>
        <ul className="flex flex-col ml-4 gap-3">
          <Link
            href="/"
            onClick={() => setIsFull(false)}
            className="font-mono font-bold text-2xl"
          >
            Home
          </Link>
          <Link
            href="/products/All"
            onClick={() => setIsFull(false)}
            className="font-mono font-bold text-2xl"
          >
            Product
          </Link>
          {/* sub menu mobile*/}
          <Link
            href="/products/All"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            ALL
          </Link>
          <Link
            href="/products/tshirt"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            T-shirt
          </Link>
          <Link
            href="/products/accessories"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            Accessories
          </Link>
          <Link
            href="/collections"
            onClick={() => setIsFull(false)}
            className="font-mono font-bold text-2xl"
          >
            Collections
          </Link>
          {/* sub menu mobile*/}
          <Link
            href="/collections/All"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            ALL
          </Link>
          <Link
            href="/collections/catOriginal"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            Cat Original
          </Link>
          <Link
            href="/collections/catClub"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            Cat Club
          </Link>
          <Link
            href="/collections/catFriend"
            onClick={() => setIsFull(false)}
            className="font-mono text-xl pl-10"
          >
            Cat friend
          </Link>
          <Link
            href="/about"
            onClick={() => setIsFull(false)}
            className="font-mono font-bold text-2xl"
          >
            About Us
          </Link>
        </ul>
      </aside>
    </>
  );
}
