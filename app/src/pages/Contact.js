import  { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from "./Footer";

function ContactUs()
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  emailjs
      .send(
        "service_b5qztwp",
        "template_lgad4vp",
      formData,
        "vYmRfQgTEhm-mKJ8T")
      .then(() => {
        alert("Message sent successfully! ✔");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email Error:", error);
        alert("❌ Something went wrong. Try again.");
      });
  };

  return (
    <>
      <div className="contact-desc">
       <p className="contact-desc-large">
        Connect with us -
        Your Global Logistics Partner
       </p>
        <p className="contact-desc-small">
        Ready to Elevate Your Supply Chain? We're Here to Help!
        </p>
      </div>
    <div className="contact-container">
      <h2 className="form-title">Contact Us</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
}

export default ContactUs;

