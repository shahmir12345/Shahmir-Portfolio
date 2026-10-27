"use client";

import { useEffect, useRef, useState } from "react";

// A certificate card. Click the image to open it full size.
export default function CertCard({
  title,
  image,
  note,
}: {
  title: string;
  image: string;
  note?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="cert">
      <div className="cert-img" onClick={() => !failed && setOpen(true)}>
        {failed ? (
          <span>Add certificate image:<br />public{image}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img ref={ref} src={image} alt={title} onError={() => setFailed(true)} />
        )}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{note ?? "Click to view full size"}</p>
      </div>

      {open && (
        <div className="lb" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
}
