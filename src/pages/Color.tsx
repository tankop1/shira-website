import ScrollableGallery from "../components/ScrollableGallery";
import "./Color.css";
import Still1 from "../assets/placeholder_stills/HolyGrave_1_1.4.1.jpg";
import Still2 from "../assets/placeholder_stills/HolyGrave_2_1.10.1.jpg";
import SliderImage from "../components/SliderImage";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import EmbeddedVideo from "../components/EmbeddedVideo";

function Color() {
  return (
    <main id="color">
      <h1>Color</h1>

      <ScrollableGallery
        title="DD/MM/YYYY - Movie Title"
        style={{ marginTop: "var(--padding-medium)" }}
      >
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
      </ScrollableGallery>

      <ScrollableGallery
        title="DD/MM/YYYY - Movie Title"
        style={{ marginTop: "var(--padding-medium)" }}
      >
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
      </ScrollableGallery>

      <ScrollableGallery
        title="DD/MM/YYYY - Movie Title"
        style={{ marginTop: "var(--padding-medium)" }}
      >
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
        <img src={Still1} alt="Gallery Image" />
      </ScrollableGallery>

      <div id="color-sliders">
        <SliderImage
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={Still1}
          afterImg={Still2}
        />

        <SliderImage
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={Still1}
          afterImg={Still2}
        />

        <SliderImage
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={Still1}
          afterImg={Still2}
        />

        <SliderImage
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={Still1}
          afterImg={Still2}
        />

        <SliderImage
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={Still1}
          afterImg={Still2}
        />

        <SliderImage
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={Still1}
          afterImg={Still2}
        />
      </div>

      <div id="color-videos">
        <EmbeddedVideo
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zuKn-yL1ebw?si=g1YM-FKEjCPgh39B"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>

        <EmbeddedVideo
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zuKn-yL1ebw?si=g1YM-FKEjCPgh39B"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>

        <EmbeddedVideo
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zuKn-yL1ebw?si=g1YM-FKEjCPgh39B"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>

        <EmbeddedVideo
          title="DD/MM/YYYY - Movie Title"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zuKn-yL1ebw?si=g1YM-FKEjCPgh39B"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>
      </div>

      <div className="card">
        <h3>Like Shira's color work? Interested in working with her?</h3>

        <div className="card-buttons">
          <Link to="/contact">
            <Button secondary>Contact Me</Button>
          </Link>
          <Link to="/films">
            <Button>See My Films</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Color;
