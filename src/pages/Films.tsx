import Button from "../components/Button";
import ClickableGallery from "../components/ClickableGallery";
import "./Films.css";
import Poster1 from "../assets/Shira Beach Photo.jpg";

function Films() {
  return (
    <main id="films">
      <h1>Original Films</h1>

      <ClickableGallery style={{ marginTop: "var(--padding-large)" }}>
        <img src={Poster1} />
        <img src={Poster1} />
        <img src={Poster1} />
        <img src={Poster1} />
        <img src={Poster1} />
        <img src={Poster1} />
      </ClickableGallery>

      <h5 id="disclaimer">
        <i>
          * These viewing links are not publicly available. For access, please
          contact Shira personally.{" "}
        </i>
      </h5>

      <div className="card">
        <h3>Like Shira's original films? Interested in working with her?</h3>

        <div className="card-buttons">
          <Button secondary>Contact Me</Button>
          <Button>See My Color Work</Button>
        </div>
      </div>
    </main>
  );
}

export default Films;
