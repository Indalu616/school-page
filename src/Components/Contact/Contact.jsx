import React from "react";
import "./Contact.css";
import phoneicon from "../../edusity_assets/phoneicon.png";
import mailicon from "../../edusity_assets/mailicon.png";
import locationicon from "../../edusity_assets/locationicon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6227a90a-b2e0-4ab9-a0f2-d27d6c8bf3ba");

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

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>
            Send Us a Message <img src="" alt="" />
          </h2>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mailicon} alt="" />
              <p>Contact@GreatStack.dev</p>
            </li>
            <li>
              <img src={phoneicon} alt="" />
              <p>+1 123-456-7890</p>
            </li>
            <li>
              <img src={locationicon} alt="" />
              <p className="location">
                77 Massachusetts Ave, Cambridge MA 02139, United States
              </p>
            </li>
          </ul>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your name</label>
            <input type="text" placeholder=" Enter your name" name="name" />
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              placeholder=" Enter your Phone number"
              name="Phone number"
            />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder=" Enter your email" name="Email" />
            <label htmlFor="message">Leave a message here</label>
            <textarea placeholder="type your message..." name="message" />
            <button className="btn">Submit now</button>
          </form>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
