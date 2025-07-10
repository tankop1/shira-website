import ScrollableGallery from "../components/ScrollableGallery";
import "./Color.css";
import Still1 from "../assets/placeholder_stills/HolyGrave_1_1.4.1.jpg";
import Still2 from "../assets/placeholder_stills/HolyGrave_2_1.10.1.jpg";
import SliderImage from "../components/SliderImage";
import Button from "../components/Button";

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

      <div className="card">
        <h3>Like Shira's color work? Interested in working with her?</h3>

        <div className="card-buttons">
          <Button secondary>Contact Me</Button>
          <Button>See My Films</Button>
        </div>
      </div>
    </main>
  );
}

export default Color;
