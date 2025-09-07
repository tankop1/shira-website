import "./About.css";
import ShiraImage from "../assets/Shira Beach Photo.jpg";
import Button from "../components/Button";
import ShiraCV from "../assets/ShiraChait_Resume_UpdatedProfes_Sept2025.pdf";
import { Link } from "react-router-dom";

function About() {
  return (
    <main id="about">
      <div id="about-top">
        <img src={ShiraImage} alt="Shira" />

        <div id="about-top-text">
          <h1>About Shira</h1>
          <h4>
            Shira Chait is a director, colorist, and filmmaker, currently based
            in <b>Austin, Texas</b>. Born and raised in New York, Shira
            completed her B.A. in Film Studies & American Studies at Tel Aviv
            University summa cum laude in 2022, and is now completing her{" "}
            <b>
              M.F.A. in film production at the University of Texas at Austin.
            </b>
            <br />
            <br />
            When not working on her own projects, Shira is a{" "}
            <b>freelance colorist and online editor</b>, and considers her color
            work integral to her filmmaking journey.
            <br />
            <br />
            Shira's works often focus on the liminality of national and personal
            identity, and especially on the{" "}
            <b>experience of those in the seams between cultures</b>. She takes
            great inspiration from everyday life, and the nuances that fill our
            personal stories.
          </h4>

          <div className="card">
            <h3>Interested in working with Shira?</h3>
            <div className="card-buttons">
              <Link to="/contact">
                <Button secondary>Contact Me</Button>
              </Link>
              <Link to="/color">
                <Button>See My Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="about-bottom" className="card">
        <a
          href={ShiraCV}
          download="ShiraChait_Resume_UpdatedProfes_Sept2025.pdf"
          style={{
            position: "absolute",
            top: "var(--padding-medium)",
            right: "var(--padding-medium)",
            textDecoration: "none",
          }}
        >
          <Button>Download Full CV</Button>
        </a>
        <p>
          <h5>Short Films:</h5>
          <br />
          <i>Director</i>
          <br />• “I Dream at Night” – UT Austin RTF Short Film (2024)
          <br />• “The Day After” – UT Austin RTF Short Documentary Film (2024)
          <br />• “Safe Space” – Independent Short Film (2023)
          <br />• “My Life in Six Pieces” – Independent Short Film (2022), Best
          Direction Wick Monet Film Festival 2024
          <br />
          <br />
          <i>Colorist</i>
          <br />• “Sketches” – Independent Short Film 
          <br />• “The Traveller's Prayer” – Independent Short Film 
          <br />
          <br />
          <br />
          <h5>Documentaries:</h5>
          <br />
          <i>Colorist</i>
          <br />
          • “Healer: The Dr. Joycelyn Elders Story” – Digital Feature
          Documentary, Official Selection Black History Film Festival 2024,
          Winner Indiefare International Film Festival 2024, Best Educational
          Film Cannes World Film Festival 2024, Honorable Mention AIMAFF 2024,
          Award Winner MPIFF 2024
          <br />• “Ripples” – Digital Short Documentary – TLVFest winner,
          Israeli short film competition; Solidarity Film Festival winner,
          student film competition
          <br />
          <br />
          <i>Restoration</i>
          <br />• “Wedding in Jerusalem” – 16 mm Short Documentary
          <br />
          <br />
          <i>Online Editor</i>
          <br />• “Vaxxed Nation” – Documentary Television Film 
          <br />• “The Therapy” – Documentary Film
          <br />• “The Fourth Window” – Documentary Film
          <br />
          <br />
          <br />
          <h5>Television Shows:</h5>
          <br />
          <i>Colorist</i>
          <br />• “The Unimportant” – Documentary, 10 Episodes
          <br />• “Malon Hotel” – Children's TV Show, 5 Episodes
          <br />• “This Boy is Me” – Children’s Documentary, 2 Episodes
          <br />• “Milano High” – Teen TV Drama, 1 Episode
          <br />
          <br />
          <i>Online Editor</i>
          <br />• “Why is This Good?” – Documentary and Live Action children’s
          show, 20 Episodes 
          <br />• “The Unimportant” – Documentary, 23 Episodes •<br />
          “Dear Diary” – Documentary, 12 Episodes
          <br />
          <br />
          <br />
          <h5>Music Videos:</h5>
          <br />
          <i>Colorist</i>
          <br />• “What Am I Doing With My Life” – Digital Music Video // Adam
          Claude 
          <br />• “The Song I Sang for You” – Digital Music Video // Neta
          Abecassis
          <br />• “What Are You Dreaming?” – Digital Music Video // Dudu Tassa
          <br />• “Kulam Al Hagal” – Digital Music Video // Echo
          <br />
          <br />
          <br />
          <h5>Student Films:</h5>
          <br />
          <i>Producer</i>
          <br />
          • “Squall Mouth” – UT Austin RTF Thesis Film (In Post-Production)
          <br />• “The Sky is Falling” – Tel Aviv University, Jerusalem
          International Film Festival Official Competition 2022, Winner -
          Toronto Lift Off Film Festival 2023, Jerusalem Jewish Film Festival
          Official Selection 2023, San Francisco Jewish Film Festival Official
          Selection 2023, JFBB Jüdisches Filmfestival Berlin Brandenburg 2023
          <br />• “First Steps” – Tel Aviv University
          <br />
          <br />
          <i>Colorist</i>
          <br />• “Digital Diary” – Jerusalem Sam Spiegel Film School, Jerusalem
          International Film Festival Official Competition 2023, Tbilisi
          International Student Film Festival 2023, Official Selection Poitiers
          Film Festival 2023, Official Selection Berkshire International Film
          Festival 2024, Short Shorts Film Festival Tokyo 2024
          <br />• “Love Letter to a Garden” – Jerusalem Sam Spiegel Film
          School, Jerusalem International Film Festival Official Competition
          2023, Official Selection TLVFest
          <br />• “Tzahala” – Jerusalem Sam Spiegel Film School Documentary,
          Best Student Film DocAviv Official Competition 2023, Israeli
          Documentary Film Awards 2023
          <br />• “See You 'Round the Block” – Tel Aviv University, Best Film
          Israeli Film Critics' Society - Tel Aviv International Student Film
          Festival 2023, Official Selection BAFICI Film Festival 2024, Official
          Selection TLVFest 2023, Rio
          <br />
          <br />
          <i>LGTBQ Film Festival 2024</i>
          <br />• “Scratch That” – Jerusalem Sam Spiegel Film School, Tel Aviv
          International Student Film Festival 2023, Official Selection TLVFest
          2023
          <br />• “Nothing is Always” – Bezalel Academy of Arts and Design
          Documentary, Best Student Film DocAviv Official Competition 2022
          <br />• “Journey” – Tel Aviv University, Moscow Film Festival 2022,
          Arte Mare Film Festival 2022
          <br />• “Show Me Everyone” – Tel Aviv University,
          Tokyo International Short Film Festival Official Competition 2023 Best
          Director, New Wave Short Film Festival Munich Official Competition
          2023 Best LGBT Film
          <br />• “Echo” – Tel Aviv University, VAEFF Official Competition 2022
          Honorable Mention, Berlin Indie Film Festival 2022, Tucson Film &
          Music Festival 2022, Experimental, Dance & Music Festival Toronto 2022
          Best Film
          <br />• “Personal Reader” – Tel Aviv University, TLVFest Official
          Competition 2022, Lethal Lesbian Film Festival 2022
          <br />• “Field Trip” – Jerusalem Sam Spiegel Film School, Haifa
          International Film Festival Official Competition 2022
          <br />
          <br />
          <i>Restoration</i>
          <br />• “Homeland” – 35 mm short film, Jerusalem Sam Spiegel Film
          School
        </p>
      </div>
    </main>
  );
}

export default About;
