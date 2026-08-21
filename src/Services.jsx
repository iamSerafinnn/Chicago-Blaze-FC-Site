import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.JPG";

const SECTIONS = [
  { label: "Training and Coaching", path: "/training_and_coaching"},
  { label: "Tournament and Events", path: "/tournaments_and_events"},
  { label: "Camps and Clinics", path: "/camps_and_clinics"},
  { label: "← Back to home", path: "/"},
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <main className="service">
      <div className="service-field" aria-hidden="true" />

      <div className="service-content">

        {/* Club Logo */}
        <img
          className="service-avatar"
          src={logo}
          alt="Club crest"
        />

        <h1 className="service-title">Individual Services</h1>

        <div className="service-meta">
          <span>Pay as you go pricing</span>
          <span>No membership required</span>
        </div>

        <nav className="service-buttons">
          {SECTIONS.map((section) => (
            <button
              key={section.path}
              className="service-button"
              onClick={() => navigate(section.path)}
            >
              <span className="service-button-icon" aria-hidden="true">
                {section.icon}
              </span>
              {section.label}
            </button>
          ))}
        </nav>

      </div>
    </main>
  );
}