import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Same order/length as each tier's `included` array below.
const FEATURES = [
  "Official training jersey",
  "Field, Rrferee, & coaching fees covered",
  "Priority event registration & Email/SMS early access (First Consideration, Not Guranteed Roster Spot)",
  "Eligible for club social events",
  "Coach & referee development roadmap",
  "Growth Blueprint 360 (GB360) program",
  "Player development reviews (GB360)",
  "Tactical tutoring, position-specific (GB360)",
  "Recruitment guidance & profile support (GB360)",
  "Month player meetings (GB360)",
];
const STATS = [
  " Competitive Matches / Month",
  " Structured Team Training / Month",
  " Private 1-1 Sessions / Month",
  " Group Development Sessions / Month\n. (6 Players Max)\n. (Pairing You With Players of Similar Age and Skill Level)\n. (Bring Your Own Group At Your Request in Advance)",
  " Coach Approval"
]

// Starting template — edit the two tiers below with real names,
// prices, and perks, then wire onClick to your signup flow.
const TIERS = [
  {
    title: "Standard",
    price: "$125 / month",
    perks: ["Regular"],
    moto: ["Embrace The Blaze"],
    included: [true, true, true, true, true, false, false, false, false, false],
    stats: ["3-4", "3-4", "0", "0", "Does Not Require"],
    discount: "25% off entry",
  },
  {
    title: "Premium",
    price: "$250 / month",
    perks: ["Most Popular"],
    moto: ["Become The Blaze"],
    included: [true, true, true, true, true, false, false, false, false, false],
    stats: ["3-4", "3-4", "2", "2", "Does Not Require"],
    discount: "1 free monthly tournament entry + 25% off future Blaze events",
  },
  {
    title: "Elite",
    price: "$315 / month",
    perks: ["Popular"],
    moto: ["Controlled Blaze"],
    included: [true, true, true, true, true, true, true, true, true, true],
    stats: ["3-4", "3-4", "4", "4", "Requires"],
    discount: "1 free monthly tournament entry + 25% off future Blaze events",
  },
];


export default function Membership_Tiers() {
  const navigate = useNavigate();
  const [openTiers, setOpenTiers] = useState(() => new Set());

  const toggleTier = (title) => {
    setOpenTiers((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <main className="section-page membership-tiers-page">

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back to home
      </button>

      {/* Title and Sub-Title */}
      <h1 className="section-title">Our Membership Tiers</h1>
      <h1 className="section-title-subtext">Full feature breakdown by tier.</h1>

      {/* Membership Card */}
      <div className="membership-tiers">

        {/* Membership Tiers */}
        {TIERS.map((tier) => (
          <div key={tier.title} className="membership-tier">

            {/* Title */}
            <h2 className="membership-tier-title">{tier.title}</h2>

            {/* Price */}
            <p className="membership-tier-price">{tier.price}</p>

            {/* Perks */}
            <ul className="membership-tier-perks">
              {tier.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>

            {/* Moto */}
            {tier.moto.length > 0 && (
              <ul className="membership-tier-moto">
                {tier.moto.map((moto) => (
                  <li key={moto}>{moto}</li>
                ))}
              </ul>
            )}

            {/* Select Button */}
            <button
              className="membership-tier-button"
              onClick={() => {
                // TODO: hook up to signup / checkout flow
              }}
            >
              Select {tier.title}
            </button>

            {/* Included Button */}
            <button
              className="membership-tier-included"
              onClick={() => toggleTier(tier.title)}
            >
              {openTiers.has(tier.title) ? "Hide Details" : "What's Included"}
            </button>

            {/* Included Toggle Open */}
            {openTiers.has(tier.title) && (
              <>
                {/* Stats */}
                <ul className="membership-tier-stats">
                  {STATS.map((stat, i) => (
                    <li key={stat} className="membership-tier-stat">
                      <span>
                        <span className="membership-tier-stat-value">{tier.stats[i]}</span> 
                        {stat}
                      </span>
                    </li> 
                  ))}
                </ul>

                {/* Tournament and Event Pricing Discount */}
                <p className="membership-tier-discount">
                  <span className="membership-tier-discount-label">
                    Tournament &amp; Event Pricing
                  </span>
                  <span className="membership-tier-discount-value">
                    {tier.discount}
                  </span>
                </p>

                {/* Checklist of Features */}
                <ul className="membership-tier-checklist">
                  {FEATURES.map((feature, i) => (
                    <li
                      key={feature}
                      className={
                        tier.included[i]
                          ? "membership-checklist-yes"
                          : "membership-checklist-no"
                      }
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
