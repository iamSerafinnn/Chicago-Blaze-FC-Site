import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FEATURES = [
  "Official training jersey",
  "Field, referee, & coaching fees covered",
  "Priority event registration & Email/SMS early access (First Consideration, Not Guaranteed Roster Spot)",
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
  " Coach Approval",
];

const TIERS = [
  {
    title: "Standard",
    price: "$125 / month",
    prices_plans: {"6 Months Package": "$600 Paid In Full", "1 Year Package": "$1500 Paid In Full"},
    prices_plans_benefits: {"6 Months Package": "SAVE $150 vs. $750 month-to-month", "1 Year Package": "SAVE $450 vs. $1500 month-to-month"},
    perks: ["Regular"],
    moto: ["Embrace The Blaze"],
    included: [true, true, true, true, true, false, false, false, false, false],
    stats: ["3-4", "3-4", "0", "0", "Does Not Require"],
    discount: "25% off entry",
  },
  {
    title: "Premium",
    plans: ["1 Month", "6 Months Package", "1 Year Package"],
    price: "$250 / month",
    prices_plans: {"6 Months Package": "$1250 Paid In Full", "1 Year Package": "$2200 Paid In Full"},
    prices_plans_benefits: {"6 Months Package": "SAVE $250 vs. $1500 month-to-month", "1 Year Package": "SAVE $700 vs. $2900 month-to-month"},
    perks: ["Most Popular"],
    moto: ["Become The Blaze"],
    included: [true, true, true, true, true, false, false, false, false, false],
    stats: ["3-4", "3-4", "2", "2", "Does Not Require"],
    discount: "1 free monthly tournament entry + 25% off future Blaze events",
  },
  {
    title: "Elite",
    // plans: ["6 Months Package", "1 Year Package"],
    price: "$315 / month",
    prices_plans: {"6 Months Package": "$1600 Paid In Full", "1 Year Package": "$2750 Paid In Full"},
    prices_plans_benefits: {"6 Months Package": "SAVE $290 vs. $1890 month-to-month", "1 Year Package": "SAVE $1030 vs. $3780 month-to-month"},
    perks: ["Popular"],
    moto: ["Controlled Blaze"],
    included: [true, true, true, true, true, true, true, true, true, true],
    stats: ["3-4", "3-4", "4", "4", "Requires"],
    discount: "1 free monthly tournament entry + 25% off future Blaze events",
  },
];


export default function Membership() {
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
      <h1 className="section-title">Our Memberships Tiers and Deals</h1>
      <h1 className="section-title-subtext">Full feature breakdown by tier.</h1>
      <h1 className="section-title-subtext">Choose your journey. Commit to the Blaze.</h1>

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

            {/* Plan Titles */}
            <hr className="membership-tier-divider" />
            <h2 className="membership-tier-title membership-tier-title-plans">Package Plans</h2>
            <hr className="membership-tier-divider" />

            {/* Plan Prices */}
            <div className="membership-tier-prices">

              {/* Package Deal Plans */}
              {Object.entries(tier.prices_plans).map(([plan, price]) => (
                <div key={plan} className="membership-tier-price-option">

                  {/* Plan */}
                  <p className="membership-tier-price-plan">{plan}</p>

                  {/* Price */}
                  <p className="membership-tier-price">{price}</p>

                  {/* Plan Benefits */}
                  {tier.prices_plans_benefits?.[plan] && (
                    <p className="membership-tier-price-benefit">
                      {tier.prices_plans_benefits[plan]}
                    </p>
                  )}
                </div>
              ))}

            </div>

            <hr className="membership-tier-divider" />

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


            {/* Select Button 1 Month */}
            <button
              className="membership-tier-button"
              onClick={() => {
                // TODO: hook up to signup / checkout flow
              }}
            >
              Select {tier.title} 1 Month
            </button>

            {/* Select Button 6 Months */}
            <button
              className="membership-tier-button"
              onClick={() => {
                // TODO: hook up to signup / checkout flow
              }}
            >
              Select {tier.title} 6 Months
            </button>

            {/* Select Button 1 Year */}
            <button
              className="membership-tier-button"
              onClick={() => {
                // TODO: hook up to signup / checkout flow
              }}
            >
              Select {tier.title} 1 Year
            </button>

          </div>
        ))}
      </div>
    </main>
  );
}