"use client";
import { ComponentProps } from "../types/cat";
import { useEffect, useRef, useState } from "react";

export default function Preview({ config }: ComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<{ [key: string]: HTMLImageElement }>({});
 
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [mouthPos, setMouthPos] = useState({ x: 0, y: 0 });
  
  // Use a Ref for dragging to solve the "null" closure issue in window events
  const [dragging, setDragging] = useState<"eyes" | "mouth" | null>(null);
  const draggingRef = useRef<"eyes" | "mouth" | null>(null);

  // Sync ref with state
  useEffect(() => {
    draggingRef.current = dragging;
  }, [dragging]);

  // 1. Load images (Your existing logic)
  useEffect(() => {
    const loadImg = (path: string) => {
      return new Promise<HTMLImageElement>((res) => {
        const img = new Image();
        img.src = path;
        img.onload = () => res(img);
      });
    };

    Promise.all([
      loadImg(`/assets/cat/head/${config.head}.svg`),
      loadImg(`/assets/cat/eyes/${config.eyes}.svg`),
      loadImg(`/assets/cat/mouth/${config.mouth}.svg`),
    ]).then(([h, e, m]) => setImages({ head: h, eyes: e, mouth: m }));
  }, [config]);

  // 2. Global Mouse Logic (Fixed "null" issue)
  useEffect(() => {
    const handleGlobalMove = (e: MouseEvent) => {
      if (!draggingRef.current || !canvasRef.current) return;

      const rect = canvasRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - 160; 
      const newY = e.clientY - rect.top - 160;

      if (draggingRef.current === "eyes") setEyePos({ x: newX, y: newY });
      if (draggingRef.current === "mouth") setMouthPos({ x: newX, y: newY });
    };

    const handleGlobalUp = () => setDragging(null);

    // Add listeners to window so movement is smooth
    window.addEventListener("mousemove", handleGlobalMove);
    window.addEventListener("mouseup", handleGlobalUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
    };
  }, []);

  // 3. Draw loop
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !images.head) return;

    ctx.clearRect(0, 0, 320, 320);
    ctx.drawImage(images.head, 0, 0, 300, 320);
    if (images.eyes) ctx.drawImage(images.eyes, eyePos.x, eyePos.y, 300, 320);
    if (images.mouth) ctx.drawImage(images.mouth, mouthPos.x, mouthPos.y, 300, 320);
  }, [images, eyePos, mouthPos]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas 
        ref={canvasRef} 
        width={320} 
        height={320} 
        className="border rounded-lg shadow-md bg-white"
      />

      <div className="flex gap-2">
        <button 
          onClick={(e) => { e.preventDefault(); setDragging("eyes"); }}
          className={`px-4 py-2 rounded ${dragging === 'eyes' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Move Eyes
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); setDragging("mouth"); }}
          className={`px-4 py-2 rounded ${dragging === 'mouth' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Move Mouth
        </button>
      </div>
    </div>
  );
}