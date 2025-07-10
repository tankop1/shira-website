import "./Home.css";
import ColorReel from "../assets/Color Reel.mp4";

function Home() {
  return (
    <main id="home">
      <video autoPlay muted loop playsInline>
        <source src={ColorReel} type="video/mp4" />
        The video is not supported by your browser
      </video>
    </main>
  );
}

export default Home;
