"use client";
import { useEffect, useRef, useState } from "react";

export default function SpeechBubble({ text }: { text: string }) {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: 120, height: 60 });

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.font = "16px Arial";

    const metrics = ctx.measureText(text);
    const width = Math.min(metrics.width + 40, 220);

    const lines = Math.ceil(metrics.width / 200);
    const height = 40 + lines * 20;

    setSize({ width, height });

  }, [text]);

  return (
    <>
      <svg
        width={size.width}
        height={size.height + 20}
        className="absolute -top-20"
      >

        <rect
          x="0"
          y="0"
          rx="20"
          ry="20"
          width={size.width}
          height={size.height}
          fill="white"
          stroke="black"
          strokeWidth="3"
        />

        {/* tail */}
        <polygon
          points={`${size.width / 2},${size.height} ${size.width / 2 + 10},${size.height + 20} ${size.width / 2 + 20},${size.height}`}
          fill="white"
          stroke="black"
        />

        <foreignObject
          x="10"
          y="10"
          width={size.width - 20}
          height={size.height - 20}
        >
          <div className="text-center text-sm font-bold break-words">
            {text}
          </div>
        </foreignObject>

      </svg>

      <canvas ref={canvasRef} width={1} height={1} />
    </>
  );
}