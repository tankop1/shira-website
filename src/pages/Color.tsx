import ScrollableGallery from "../components/ScrollableGallery";
import "./Color.css";
import Still1 from "../assets/placeholder_stills/HolyGrave_1_1.4.1.jpg";
import Still2 from "../assets/placeholder_stills/HolyGrave_2_1.10.1.jpg";
import SliderImage from "../components/SliderImage";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import EmbeddedVideo from "../components/EmbeddedVideo";

import GazpachoStill1 from "../assets/color_stills/Gazpacho/Gazpacho_2_1.2.1.jpg";
import GazpachoStill2 from "../assets/color_stills/Gazpacho/Gazpacho_6_1.5.2.jpg";
import GazpachoStill3 from "../assets/color_stills/Gazpacho/Gazpacho_7_1.8.1.jpg";
import GazpachoStill4 from "../assets/color_stills/Gazpacho/Gazpacho_20_1.21.1.jpg";
import GazpachoStill5 from "../assets/color_stills/Gazpacho/Gazpacho_22_1.28.2.jpg";
import GazpachoStill6 from "../assets/color_stills/Gazpacho/Gazpacho_28_1.33.3.jpg";

import MonkeysStill1 from "../assets/color_stills/Monkeys/Monkeys_21_1.83.1.jpg";
import MonkeysStill2 from "../assets/color_stills/Monkeys/Monkeys_22_1.85.1.jpg";
import MonkeysStill3 from "../assets/color_stills/Monkeys/Monkeys_24_1.87.1.jpg";
import MonkeysStill4 from "../assets/color_stills/Monkeys/Monkeys_26_1.90.1.jpg";
import MonkeysStill5 from "../assets/color_stills/Monkeys/Monkeys_27_1.98.1.jpg";
import MonkeysStill6 from "../assets/color_stills/Monkeys/Monkeys_56_1.233.1.jpg";

import ScratchStill1 from "../assets/color_stills/Scratch/Scratch_Still2_1.63.1.jpg";
import ScratchStill2 from "../assets/color_stills/Scratch/Scratch_Still3_1.77.1.jpg";
import ScratchStill3 from "../assets/color_stills/Scratch/Scratch_Still5_1.81.1.jpg";
import ScratchStill4 from "../assets/color_stills/Scratch/Scratch_Still9_1.192.1.jpg";
import ScratchStill5 from "../assets/color_stills/Scratch/Scratch_Still11_3.1.2.jpg";
import ScratchStill6 from "../assets/color_stills/Scratch/Scratch_Still12_3.1.3.jpg";

import BeforeStill1 from "../assets/before_after_stills/Before_1.68.1.png";
import AfterStill1 from "../assets/before_after_stills/After_1.68.2.png";
import BeforeStill2 from "../assets/before_after_stills/Anat_Before_4_1.103.2.jpg";
import AfterStill2 from "../assets/before_after_stills/Anat_After_4_1.103.1.jpg";
import BeforeStill3 from "../assets/before_after_stills/Love_Before_3_1.91.2.jpg";
import AfterStill3 from "../assets/before_after_stills/Love_After_3_1.91.1.jpg";
import BeforeStill4 from "../assets/before_after_stills/Noga_5_Before_1.58.2.jpg";
import AfterStill4 from "../assets/before_after_stills/Noga_5_After_1.58.1.jpg";

function Color() {
  return (
    <main id="color">
      <h1>Color (Selected Work)</h1>

      <ScrollableGallery
        title="Gazpacho - Maya Gadash"
        style={{ marginTop: "var(--padding-medium)" }}
      >
        <img src={GazpachoStill1} alt="Gallery Image" />
        <img src={GazpachoStill2} alt="Gallery Image" />
        <img src={GazpachoStill3} alt="Gallery Image" />
        <img src={GazpachoStill4} alt="Gallery Image" />
        <img src={GazpachoStill5} alt="Gallery Image" />
        <img src={GazpachoStill6} alt="Gallery Image" />
      </ScrollableGallery>

      <ScrollableGallery
        title="Monkeys - Carmel Loukas"
        style={{ marginTop: "var(--padding-medium)" }}
      >
        <img src={MonkeysStill1} alt="Gallery Image" />
        <img src={MonkeysStill2} alt="Gallery Image" />
        <img src={MonkeysStill3} alt="Gallery Image" />
        <img src={MonkeysStill4} alt="Gallery Image" />
        <img src={MonkeysStill5} alt="Gallery Image" />
        <img src={MonkeysStill6} alt="Gallery Image" />
      </ScrollableGallery>

      <ScrollableGallery
        title="Scratch That - Yaniv Lavi"
        style={{ marginTop: "var(--padding-medium)" }}
      >
        <img src={ScratchStill1} alt="Gallery Image" />
        <img src={ScratchStill2} alt="Gallery Image" />
        <img src={ScratchStill3} alt="Gallery Image" />
        <img src={ScratchStill4} alt="Gallery Image" />
        <img src={ScratchStill5} alt="Gallery Image" />
        <img src={ScratchStill6} alt="Gallery Image" />
      </ScrollableGallery>

      <div id="color-sliders">
        <SliderImage
          title="Assist - Anat Bartour"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={BeforeStill1}
          afterImg={AfterStill1}
        />

        <SliderImage
          title="Anat - Yuval Barnea"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={BeforeStill2}
          afterImg={AfterStill2}
        />

        <SliderImage
          title="Love Letter To A Garden - Yahil Maoz"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={BeforeStill3}
          afterImg={AfterStill3}
        />

        <SliderImage
          title="Noga's Eyes - Noa Chen"
          style={{ marginTop: "var(--padding-medium)" }}
          beforeImg={BeforeStill4}
          afterImg={AfterStill4}
        />
      </div>

      <div id="color-videos">
        <EmbeddedVideo
          title="What Am I Doing With My Life - Adam Claude"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QgO_q717120?list=RDQgO_q717120"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>

        <EmbeddedVideo
          title="The Song I Sang for You - Neta Abecassis"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8aCJiCEHXto?list=RD8aCJiCEHXto"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>

        <EmbeddedVideo
          title="Kulam Al Hagal - Echo"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OC2LXcw15ig?list=RDOC2LXcw15ig"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </EmbeddedVideo>

        <EmbeddedVideo
          title="What Are You Dreaming? - Dudu Tassa"
          style={{ marginTop: "var(--padding-medium)" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zuKn-yL1ebw?list=RDzuKn-yL1ebw"
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
