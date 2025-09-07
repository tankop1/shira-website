import Button from "../components/Button";
import ClickableGallery from "../components/ClickableGallery";
import "./Films.css";
import Poster1 from "../assets/Shira Beach Photo.jpg";
import { Link } from "react-router-dom";

import HalfPastSevenPoster from "../assets/film_posters/half past seven poster.png";
import IDreamAtNightPoster from "../assets/film_posters/I Dream at Night Poster with Laurels.jpg";
import SafeSpacePoster from "../assets/film_posters/SafeSpace.png";
import SixPiecesPoster from "../assets/film_posters/SixPieces_Poster_WithFestival.png";
import TheDayAfterPoster from "../assets/film_posters/TheDayAfter_Poster_Laurels_Updated.png";

function Films() {
  return (
    <main id="films">
      <h1>Original Films</h1>

      <ClickableGallery style={{ marginTop: "var(--padding-large)" }}>
        <div className="film-card">
          <img src={HalfPastSevenPoster} />
          <h2>Half Past Seven</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={IDreamAtNightPoster} />
          <h2>I Dream At Night</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={SafeSpacePoster} />
          <h2>Safe Space</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={SixPiecesPoster} />
          <h2>Six Pieces</h2>
          <h4>Genre - Runtime</h4>
          <p>Quick log line or description of the movie</p>
        </div>
        <div className="film-card">
          <img src={TheDayAfterPoster} />
          <h2>The Day After</h2>
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
