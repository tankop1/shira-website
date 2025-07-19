import { useState } from "react";
import "./Home.css";
import ColorReel from "../assets/Color Reel.mp4";
import ArrowButton from "../components/ArrowButton";
import Still1 from "../assets/placeholder_stills/HolyGrave_1_1.4.1.jpg";

const galleryItems = [
  { type: "video", src: ColorReel },
  { type: "image", src: Still1 },
  { type: "image", src: Still1 },
  { type: "image", src: Still1 },
  { type: "image", src: Still1 },
];

function Home() {
  const [current, setCurrent] = useState(0);
  const itemsCount = galleryItems.length;

  const goTo = (idx: any) => {
    setCurrent((idx + itemsCount) % itemsCount);
    console.log(`Current index: ${current}, Total items: ${itemsCount}`);
  };

  const handlePrev = () => goTo(current - 1);
  const handleNext = () => goTo(current + 1);

  return (
    <main id="home">
      <div
        id="home-gallery"
        style={{
          position: "relative",
          width: "100vw",
          maxWidth: "100vw",
        }}
      >
        <div
          id="home-gallery-items"
          style={{
            width: `${itemsCount * 100}vw`,
            height: "100%",
            display: "flex",
            flexDirection: "row",
            transition: "transform 0.6s cubic-bezier(0.77,0,0.18,1)",
            transform: `translateX(-${current * 100}vw)`,
          }}
        >
          {galleryItems.map((item, i) =>
            item.type === "video" ? (
              <video
                key={i}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100vw", height: "100%", objectFit: "cover" }}
              >
                <source src={item.src} type="video/mp4" />
                The video is not supported by your browser
              </video>
            ) : (
              <img
                key={i}
                src={item.src}
                alt="Still"
                style={{ width: "100vw", height: "100%", objectFit: "cover" }}
              />
            )
          )}
        </div>

        <div id="home-gallery-overlay">
          <div id="home-gallery-text">
            <h1>Color Reel</h1>
            <h4>Created by Shira Chait</h4>
          </div>

          <div id="home-gallery-buttons">
            <ArrowButton left onClick={handlePrev} />
            <ArrowButton onClick={handleNext} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
