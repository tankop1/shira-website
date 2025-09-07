import { useState } from "react";
import "./Home.css";
import ColorReel from "../assets/Color Reel (Compressed).mp4";
import ArrowButton from "../components/ArrowButton";
import DigitalDiaryStill from "../assets/home_stills/DigitalDiary_Still12_1.119.1.jpg";
import WakaStill from "../assets/home_stills/Waka_1.400.1.jpg";
import StardustStill from "../assets/home_stills/Stardust_Still_3_1.5.1.png";
import GrinStill from "../assets/home_stills/Grin_1.68.1.jpg";

const galleryItems = [
  {
    type: "video",
    src: ColorReel,
    title: "",
    description: "",
  },
  {
    type: "image",
    src: DigitalDiaryStill,
    title: "Digital Diary",
    description: "Yasmin Scheft",
  },
  {
    type: "image",
    src: GrinStill,
    title: "Grin",
    description: "Directed by Camilo Montoya",
  },
  {
    type: "image",
    src: WakaStill,
    title: "Operation Wakaliga",
    description: "Directed by Nabwanal G.G.",
  },
  {
    type: "image",
    src: StardustStill,
    title: "Stardust",
    description: "Directed by Christian Meola",
  },
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
            <h1>{galleryItems[current].title}</h1>
            <h4>{galleryItems[current].description}</h4>
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
