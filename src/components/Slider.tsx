"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import SafeImg from "./SafeImg";

// Image slider for the About page.
// With 1 image: no arrows or dots. With 2+ images: arrows, dots and auto-slide appear.
export default function Slider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const multi = images.length > 1;

  const go = (n: number) => setIndex((n + images.length) % images.length);

  useEffect(() => {
    if (!multi || !auto) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [multi, auto, images.length]);

  return (
    <div className={`slider${multi ? " multi" : ""}`}>
      <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src) => (
          <div className="slide" key={src}>
            <span>{site.initials}</span>
            <SafeImg src={src} alt={site.name} />
          </div>
        ))}
      </div>

      {multi && (
        <>
          <button className="slider-btn prev" aria-label="Previous" onClick={() => { setAuto(false); go(index - 1); }}>‹</button>
          <button className="slider-btn next" aria-label="Next" onClick={() => { setAuto(false); go(index + 1); }}>›</button>
          <div className="dots">
            {images.map((src, n) => (
              <i key={src} className={n === index ? "on" : ""} onClick={() => { setAuto(false); go(n); }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
