import React, { Children, useState, useRef, useEffect } from "react";
import "./ClickableGallery.css";
import ArrowButton from "./ArrowButton";

type ClickableGalleryProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function ClickableGallery({ children, style }: ClickableGalleryProps) {
  const items = Children.toArray(children);
  // Add clones: [last, ...items, first]
  const extendedItems = [items[items.length - 1], ...items, items[0]];
  const [currentIndex, setCurrentIndex] = useState(1); // Start at first real item
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemsCount = items.length;

  const goLeft = () => {
    if (currentIndex != 0) setCurrentIndex((prev) => prev - 1);
  };

  const goRight = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle infinite jump
  useEffect(() => {
    if (currentIndex === 0) {
      // Jump to last real item
      setTimeout(() => {
        setCurrentIndex(itemsCount);
        const container = contentRef.current;
        const item = itemRefs.current[itemsCount];
        if (container && item) {
          const containerRect = container.getBoundingClientRect();
          const itemRect = item.getBoundingClientRect();
          const scrollLeft =
            item.offsetLeft -
            container.offsetLeft -
            (containerRect.width / 2 - itemRect.width / 2);
          container.scrollTo({ left: scrollLeft, behavior: "auto" });
        }
      }, 300); // Wait for smooth scroll to finish
    } else if (currentIndex === itemsCount + 1) {
      // Jump to first real item
      setTimeout(() => {
        setCurrentIndex(1);
        const container = contentRef.current;
        const item = itemRefs.current[1];
        if (container && item) {
          const containerRect = container.getBoundingClientRect();
          const itemRect = item.getBoundingClientRect();
          const scrollLeft =
            item.offsetLeft -
            container.offsetLeft -
            (containerRect.width / 2 - itemRect.width / 2);
          container.scrollTo({ left: scrollLeft, behavior: "auto" });
        }
      }, 300);
    } else {
      // Normal scroll
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
    }
  }, [currentIndex, itemsCount]);

  // Initial scroll to first real item
  useEffect(() => {
    const container = contentRef.current;
    const item = itemRefs.current[1];
    if (container && item) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const scrollLeft =
        item.offsetLeft -
        container.offsetLeft -
        (containerRect.width / 2 - itemRect.width / 2);
      container.scrollTo({ left: scrollLeft, behavior: "auto" });
    }
  }, [itemsCount]);

  return (
    <div className="clickable-gallery" style={style}>
      <div className="clickable-gallery-buttons">
        <ArrowButton left onClick={goLeft} />
        <ArrowButton onClick={goRight} />
      </div>
      <div className="clickable-gallery-content" ref={contentRef}>
        {extendedItems.map((child, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <div
              className={`clickable-gallery-item${
                isSelected ? " selected" : ""
              }`}
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              style={{ opacity: isSelected ? 1 : 0.5, pointerEvents: "auto" }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClickableGallery;
