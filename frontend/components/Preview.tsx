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
      loadImg(`/assets/cat/whiskers/${config.whiskers}.svg`),
    ]).then(([h, e, m, w]) =>
      setImages({ head: h, eyes: e, mouth: m, whiskers: w }),
    );
  }, [config]);

  // 3. Draw loop
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !images.head) return;

    ctx.clearRect(0, 0, 320, 320);
    ctx.drawImage(images.head, 30, 30, 260, 300);
    if (images.eyes) ctx.drawImage(images.eyes, 42, 10, 260, 300);
    if (images.mouth) ctx.drawImage(images.mouth, 42, 10, 260, 300);
    if (images.whiskers) ctx.drawImage(images.whiskers, 45, 28, 260, 300);
  }, [images, eyePos, mouthPos]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        style={{ touchAction: "none" }} // Prevents mobile scrolling
        width={320}
        height={320}
        className="border rounded-lg shadow-md bg-white"
      />
    </div>
  );
}
