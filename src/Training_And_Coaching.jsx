import { useNavigate } from "react-router-dom";

const OPTIONS = [
  { title: "Practice Drop-In", price: "$25 per session" },
  { title: "League Game Drop-In", price: "$25 per session" },
  { title: "Small-Group Development Session", price: "$165 per session" },
  { title: "Private 1-On-1 Training", price: "$100 per session" },
];

export default function Training_And_Coaching() {
  const navigate = useNavigate();

  return (
    <main className="section-page training-page">
      <button className="back-button" onClick={() => navigate("/services")}>
        &larr; Back to services
      </button>

      <h1 className="section-title">Training &amp; Coaching</h1>

      <div className="training-options">
        {OPTIONS.map((option) => (
          <div key={option.title} className="training-option">
            <h2 className="training-option-title">{option.title}</h2>
            <p className="training-option-price">{option.price}</p>

            <button
              className="training-option-button"
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
