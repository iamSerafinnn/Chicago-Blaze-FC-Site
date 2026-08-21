import { useNavigate } from "react-router-dom";

// Placeholder page — copy this file to make real pages
// (Fixtures.jsx, Roster.jsx, etc.), then update the routes in App.jsx.
export default function SectionPage({ title }) {
  const navigate = useNavigate();

  return (
    <main className="section-page">
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back to home
      </button>
      <h1 className="section-title">{title}</h1>
      <p className="section-body">Content for {title} goes here.</p>
    </main>
  );
}
