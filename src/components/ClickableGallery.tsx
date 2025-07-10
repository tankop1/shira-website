import React, { Children, useState, useRef, useEffect } from "react";
import "./ClickableGallery.css";
import ArrowButton from "./ArrowButton";

type ClickableGalleryProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function ClickableGallery({ children, style }: ClickableGalleryProps) {
  const items = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const container = contentRef.current;
    const item = itemRefs.current[currentIndex];
    if (container && item) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollLeft =
        item.offsetLeft -
        container.offsetLeft -
        (containerRect.width / 2 - itemRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <div className="clickable-gallery" style={style}>
      <div className="clickable-gallery-buttons">
        <ArrowButton left onClick={goLeft} />
        <ArrowButton onClick={goRight} />
      </div>
      <div className="clickable-gallery-content" ref={contentRef}>
        {items.map((child, idx) => (
          <div
            className={`clickable-gallery-item${
              idx === currentIndex ? " selected" : ""
            }`}
            key={idx}
            ref={(el) => {
              itemRefs.current[idx] = el;
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClickableGallery;
