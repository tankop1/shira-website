import "./Contact.css";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";

import Still1 from "../assets/color_stills/ToGive_Still_1_1.1.1.jpg";
import InstagramIcon from "../assets/icons/Instagram.png";
import LinkedInIcon from "../assets/icons/LinkedIn.png";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8002606a-82c9-48f5-91df-07aaa60867f5");
    //6801792c-ecf2-4d5c-8f43-176ca9f97dd9

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      console.log("Success", data);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      console.log(data.message);
    }
  };

  console.log(result);

  return (
    <main id="contact">
      <div id="contact-left">
        <h1>Contact</h1>

        <form onSubmit={onSubmit}>
          <TextInput name="full-name" required>
            Full Name
          </TextInput>
          <TextInput
            name="email"
            style={{ marginTop: "var(--padding-medium)" }}
            required
          >
            Email
          </TextInput>
          <TextArea
            name="message"
            style={{ marginTop: "var(--padding-medium)" }}
            required
          >
            Message
          </TextArea>

          <div id="contact-form-button">
            <Button style={{ marginTop: "var(--padding-medium)" }} isSubmit>
              Send Message
            </Button>
          </div>
        </form>

        <div id="contact-left-bottom">
          <div id="contact-socials">
            <a
              className="contact-social-button"
              href="https://www.instagram.com/shirathecolorist"
              target="_blank"
            >
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>

            <a
              className="contact-social-button"
              href="https://www.linkedin.com/in/shira-chait-914b61149/"
              target="_blank"
            >
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
            <h3>To Give (Colorist)</h3>
            <h6>Directed by Crayton Gerst</h6>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
