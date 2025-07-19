import Button from "../components/Button";
import ClickableGallery from "../components/ClickableGallery";
import "./Films.css";
import Poster1 from "../assets/Shira Beach Photo.jpg";
import { Link } from "react-router-dom";

function Films() {
  return (
    <main id="films">
      <h1>Original Films</h1>

      <ClickableGallery style={{ marginTop: "var(--padding-large)" }}>
        <div className="film-card">
          <img src={Poster1} />
          <h2>Movie Title</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={Poster1} />
          <h2>Movie Title</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={Poster1} />
          <h2>Movie Title</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={Poster1} />
          <h2>Movie Title</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={Poster1} />
          <h2>Movie Title</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
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
          <Link to="/contact">
            <Button secondary>Contact Me</Button>
          </Link>
          <Link to="/color">
            <Button>See My Color Work</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Films;
