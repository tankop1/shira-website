import "./SliderImage.css";
import React, { useRef, useState } from "react";

type SliderImageProps = {
  beforeImg: string;
  afterImg: string;
  title?: string;
  style?: React.CSSProperties;
};

function SliderImage({ beforeImg, afterImg, title, style }: SliderImageProps) {
  const [sliderPos, setSliderPos] = useState(50); // percent
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to get slider position from event
  const getSliderPos = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return sliderPos;
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = (e as MouseEvent).clientX;
    if (e.type.startsWith("touch")) {
      clientX = (e as TouchEvent).touches[0].clientX;
    }
    let newPos = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(0, Math.min(100, newPos));
  };

  // Drag handlers
  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    document.body.style.userSelect = "none";
    const moveHandler = (event: MouseEvent | TouchEvent) => {
      setSliderPos(getSliderPos(event));
    };
    const upHandler = () => {
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", upHandler);
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("touchend", upHandler);
    // Set position immediately on click/touch
    if (e.type === "mousedown" || e.type === "touchstart") {
      if ("clientX" in e) setSliderPos(getSliderPos(e.nativeEvent));
      else if ("touches" in e && e.touches.length > 0)
        setSliderPos(getSliderPos(e.nativeEvent));
    }
  };

  return (
    <div style={style} className="slider-image">
      <h3>{title}</h3>

      <div className="slider-image-content" ref={containerRef}>
        <img src={beforeImg} alt="Before" className="slider-image-before" />
        <img
          src={afterImg}
          alt="After"
          className="slider-image-after"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        />
        <div
          className="slider-handle"
          style={{ left: `calc(${sliderPos}% - 12px)` }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <div className="slider-handle-bar" />
        </div>
      </div>
    </div>
  );
}

export default SliderImage;
