import { useNavigate } from "react-router-dom";

const SECTIONS = [
  { label: "Memberships", path: "/memberships"},
  { label: "Individual Services", path: "/services"},
  { label: "Growth Blueprint 360", path: "/growthblueprint"},
  { label: "Contact Us", path: "/contact"},
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="home-field" aria-hidden="true" />

      <div className="home-content">

        <img
          className="home-avatar"
          src="logo.JPG"
          alt="Club crest"
        />

        <h1 className="home-title">Chicago Blaze FC</h1>

        <div className="home-meta">
          <span>IGNIS PERPETUUS</span>
          <span className="home-meta-dot" />
          <span>Chicago, IL</span>
        </div>

        <nav className="home-buttons">
          {SECTIONS.map((section) => (
            <button
              key={section.path}
              className="home-button"
              onClick={() => navigate(section.path)}
            >
              <span className="home-button-icon" aria-hidden="true">
                {section.icon}
              </span>
              {section.label}
            </button>
          ))}
        </nav>

        <p className="home-footer">&copy; {new Date().getFullYear()} Chicago Blaze FC</p>
      </div>
    </main>
  );
}
