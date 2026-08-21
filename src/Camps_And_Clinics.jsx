import { useNavigate } from "react-router-dom";

// Starting template — edit the options below with real names and prices.
const OPTIONS = [
  { title: "Option 1", price: "$0 per camp" },
  { title: "Option 2", price: "$0 per camp" },
];

export default function Camps_And_Clinics() {
  const navigate = useNavigate();

  return (
    <main className="section-page camps-page">
      <button className="back-button" onClick={() => navigate("/services")}>
        &larr; Back to services
      </button>

      <h1 className="section-title">Camps &amp; Clinics</h1>

      <div className="camps-options">
        {OPTIONS.map((option) => (
          <div key={option.title} className="camps-option">
            <h2 className="camps-option-title">{option.title}</h2>
            <p className="camps-option-price">{option.price}</p>

            <button
              className="camps-option-button"
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
