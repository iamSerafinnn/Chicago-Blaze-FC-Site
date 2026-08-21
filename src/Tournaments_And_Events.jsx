import { useNavigate } from "react-router-dom";

// Starting template — edit the options below with real names and prices.
const OPTIONS = [
  { title: "Option 1", price: "$0 per event" },
  { title: "Option 2", price: "$0 per event" },
];

export default function Tournaments_And_Events() {
  const navigate = useNavigate();

  return (
    <main className="section-page tournament-page">
      <button className="back-button" onClick={() => navigate("/services")}>
        &larr; Back to services
      </button>

      <h1 className="section-title">Tournaments &amp; Events</h1>

      <div className="tournament-options">
        {OPTIONS.map((option) => (
          <div key={option.title} className="tournament-option">
            <h2 className="tournament-option-title">{option.title}</h2>
            <p className="tournament-option-price">{option.price}</p>

            <button
              className="tournament-option-button"
              onClick={() => {
                // TODO: hook up to signup / checkout flow
              }}
            >
              Book {option.title}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
