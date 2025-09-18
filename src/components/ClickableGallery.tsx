import React, { useState } from "react";
import "./ClickableGallery.css";
import ArrowButton from "./ArrowButton";

type ClickableGalleryProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const ANIMATION_DURATION = 400; // ms

function ClickableGallery({ children, style }: ClickableGalleryProps) {
  const items = React.Children.toArray(children);
  const itemsCount = items.length;
  const [selected, setSelected] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  // Compute indices for left, center, right
  const leftIdx = mod(selected - 1, itemsCount);
  const centerIdx = selected;
  const rightIdx = mod(selected + 1, itemsCount);

  // Animation trigger
  const handleArrow = (dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setSelected((prev) =>
        dir === "left" ? mod(prev - 1, itemsCount) : mod(prev + 1, itemsCount)
      );
      setIsAnimating(false);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  // For rendering, always show [left, center, right] in order
  const galleryItems = [
    { idx: leftIdx, pos: "left" },
    { idx: centerIdx, pos: "center" },
    { idx: rightIdx, pos: "right" },
  ];

  return (
    <div className="clickable-gallery" style={style}>
      <div className="clickable-gallery-buttons">
        <ArrowButton left onClick={() => handleArrow("left")} />
        <ArrowButton onClick={() => handleArrow("right")} />
      </div>
      <div
        className={`clickable-gallery-content custom-gallery-content${
          isAnimating && direction ? ` animating-${direction}` : ""
        }`}
      >
        {galleryItems.map(({ idx, pos }) => (
          <div
            key={idx}
            className={`custom-gallery-item ${pos}${
              pos === "center" ? " selected" : ""
            }`}
            style={{
              opacity: pos === "center" ? 1 : 0.5,
              pointerEvents: pos === "center" ? "auto" : "none",
            }}
          >
            {items[idx]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClickableGallery;
