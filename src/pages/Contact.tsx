import "./Contact.css";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

import Still1 from "../assets/placeholder_stills/HolyGrave_1_1.4.1.jpg";
import FacebookIcon from "../assets/icons/Facebook.png";
import InstagramIcon from "../assets/icons/Instagram.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  console.log(result);

  return (
    <main id="contact">
      <div id="contact-left">
        <h1>Contact</h1>

        <form onSubmit={onSubmit}>
          <TextInput required>Full Name</TextInput>
          <TextInput style={{ marginTop: "var(--padding-medium)" }} required>
            Email
          </TextInput>
          <TextArea style={{ marginTop: "var(--padding-medium)" }} required>
            Message
          </TextArea>

          <div id="contact-form-button">
            <Button style={{ marginTop: "var(--padding-medium)" }}>
              Send Message
            </Button>
          </div>
        </form>

        <div id="contact-left-bottom">
          <div id="contact-socials">
            <a className="contact-social-button">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>

            <a className="contact-social-button">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>

            <a className="contact-social-button">
              <img src={LinkedInIcon} alt="LinkedIn Icon" />
            </a>
          </div>

          <a id="contact-email" href="mailto:shirachait9@gmail.com">
            shirachait9@gmail.com
          </a>
        </div>
      </div>

      <div id="contact-right">
        <img src={Still1} alt="Contact Image" />

        <div id="contact-right-overlay">
          <div id="contact-right-text">
            <h3>Holy Grave (Colorist)</h3>
            <h6>Directed by Name Here</h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
