"use client";
import { PreviewProps } from "../types/cat";
import { useEffect, useRef, useState } from "react";
export default function Preview({ config, speechText, fontColor, textY }: PreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<{ [key: string]: HTMLImageElement }>({});

  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [mouthPos, setMouthPos] = useState({ x: 0, y: 0 });

  // Use a Ref for dragging to solve the "null" closure issue in window events
  const [dragging, setDragging] = useState<"eyes" | "mouth" | null>(null);
  const draggingRef = useRef<"eyes" | "mouth" | null>(null);
  function drawSpeechBubble(
    ctx: CanvasRenderingContext2D,
    text: string
  ) {
    const maxWidth = 300
    const lineHeight = 45
  
   
  
    const words = text.split(" ")
    let line = ""
    const lines: string[] = []
  
    words.forEach((word) => {
      const test = line + word + " "
      const w = ctx.measureText(test).width
  
      if (w > maxWidth && line !== "") {
        lines.push(line)
        line = word + " "
      } else {
        line = test
      }
    })
  
    lines.push(line)
    if (!canvasRef.current) return
    const canvasWidth = canvasRef.current.width
    const canvasHeight = canvasRef.current.height
    // text
ctx.textAlign = "center"
ctx.textBaseline = "middle"
 ctx.font = "700 32px GameBubble"
ctx.fillStyle = fontColor

const textHeight = lines.length * lineHeight
const startY = canvasHeight / 2 - textHeight / 2

lines.forEach((l, i) => {
  ctx.fillText(
    l.trim(),
    canvasWidth / 2,
    startY + i * lineHeight +150 + textY
  )
})
  }
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
    const draw = async () => {
      // รอ font โหลดก่อน
      document.fonts.load("32px GameBubble")
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !images.head) return;

    ctx.clearRect(0, 0, 400, 400);
    ctx.drawImage(images.head, 40, 0, 260, 300);
    if (images.eyes) ctx.drawImage(images.eyes, 42, -20, 260, 300);
    if (images.mouth) ctx.drawImage(images.mouth, 42, -20, 260, 300);
    if (images.whiskers) ctx.drawImage(images.whiskers, 45, -0, 260, 300);
      // draw speech bubble
  if (speechText) {
    drawSpeechBubble(ctx, speechText);
  }
}
    draw();
  }, [images, eyePos, mouthPos, speechText,fontColor,textY]);

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        style={{ touchAction: "none" }} // Prevents mobile scrolling
        width={360}
        height={400}
        className="border rounded-lg shadow-md bg-white"
      />
    </div>
  );
}
