import { useNavigate } from "react-router-dom";

// Fill in the real email and Instagram handle/link below.
const EMAIL = "contact@chicagoblazefc.com";
const INSTAGRAM_HANDLE = "@chicagoblazefc";
const INSTAGRAM_URL = "https://instagram.com/chicagoblazefc";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <main className="section-page contact-page">
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back to home
      </button>

      <h1 className="section-title">Contact</h1>

      <div className="contact-links">
        <a className="contact-link" href={`mailto:${EMAIL}`}>
          <span className="contact-link-label">Email</span>
          <span className="contact-link-value">{EMAIL}</span>
        </a>

        <a
          className="contact-link"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-link-label">Instagram</span>
          <span className="contact-link-value">{INSTAGRAM_HANDLE}</span>
        </a>
      </div>
    </main>
  );
}
