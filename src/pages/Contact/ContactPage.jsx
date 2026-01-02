import { useState, useRef } from "react";
import "./ContactPage.css";

import gmail from "../../assets/Contact/gmail.png";
import insta from "../../assets/Contact/instagram.png";
import X from "../../assets/Contact/X.png";
import linkedin from "../../assets/Contact/linkedin.png";
import user from "../../assets/Contact/user.png";
import phone from "../../assets/Contact/phone.png";
import mail from "../../assets/Contact/mail.png";

export default function ContactPage() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", message: "" });
    setShowPopup(false);
    formRef.current?.reset();
  };

  const subject = encodeURIComponent("Message from Tech Vayuna Website");
  const body = encodeURIComponent(
    `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}`
  );

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=techvayuna2k19@gmail.com&su=${subject}&body=${body}`;
  const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=techvayuna2k19@gmail.com&subject=${subject}&body=${body}`;
  const mailtoLink = `mailto:techvayuna2k19@gmail.com?subject=${subject}&body=${body}`;

  return (
    <div className="page-bg">
      <div className="site-wrap">
        <main className="contact-area">

          {/* SOCIAL BAR */}
          <aside className="social-bar">
            <div className="social-title">
              <span className="emoji">🤝</span>
              <span className="title-text">Be Part of the Buzz</span>
            </div>

            <div className="social-list">
              <a href="https://www.instagram.com/tech_vayuna/" target="_blank" className="social-item">
                <img src={insta} alt="Instagram" />
                <span>@tech_vayuna</span>
              </a>

              <a href="https://www.linkedin.com/company/techvayuna/" target="_blank" className="social-item">
                <img src={linkedin} alt="LinkedIn" />
                <span>Tech Vayuna</span>
              </a>

              <a href="https://x.com/tech_vayuna" target="_blank" className="social-item">
                <img src={X} alt="X" />
                <span>@tech_vayuna</span>
              </a>
            </div>
          </aside>

          {/* FORM */}
          <section className="form-wrap">
            <h2 className="form-title">Tell us what you are up to..</h2>

            <form
              ref={formRef}
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setShowPopup(true);
              }}
            >
              <label className="field">
                <img src={user} className="field-icon" />
                <input name="name" placeholder="Your name" onChange={handleChange} required />
              </label>

              <label className="field">
                <img src={phone} className="field-icon" />
                <input name="phone" placeholder="Your phone number" onChange={handleChange} />
              </label>

              <label className="field">
                <img src={mail} className="field-icon" />
                <input name="email" placeholder="Your email address" onChange={handleChange} required />
              </label>

              <textarea
                name="message"
                className="message"
                placeholder="Your message.."
                onChange={handleChange}
                required
              />

              <button className="submit">Let's Talk</button>
            </form>
          </section>
        </main>
      </div>

      {/* GLASS MAIL POPUP */}
      {showPopup && (
        <div className="mail-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="mail-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Send your message via</h3>

            <div className="mail-glass-options">
              <a href={gmailLink} target="_blank" onClick={resetForm}>Gmail</a>
              <a href={outlookLink} target="_blank" onClick={resetForm}>Outlook</a>
              <a href={mailtoLink} onClick={resetForm}>Default Mail</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
