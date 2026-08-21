import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import Membership from "./Membership";
import Membership_Tiers from "./Membership_Tiers";
import Membership_PackageDeals from "./Membership_PackageDeals";

import Services from "./Services";
import Training_And_Coaching from "./Training_And_Coaching";
import Tournaments_And_Events from "./Tournaments_And_Events";
import Camps_And_Clinics from "./Camps_And_Clinics";

import Contact from "./Contact";


import SectionPage from "./SectionPage";
import "./App.css";

// Swap SectionPage for real files (e.g. Fixtures.jsx, Roster.jsx) as you build them:
// import Fixtures from "./Fixtures";  →  <Route path="/fixtures" element={<Fixtures />} />

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Memberships */}
        <Route path="/memberships" element={<Membership />} />

        {/* Individual Services */}
        <Route path="/services" element={<Services />} />

        {/* Training & Coaching */}
        <Route path="/training_and_coaching" element={<Training_And_Coaching />} />

        {/* Tournaments & Events */}
        <Route path="/tournaments_and_events" element={<Tournaments_And_Events />} />

        {/* Camps & Clinics */}
        <Route path="/camps_and_clinics" element={<Camps_And_Clinics />} />

        {/* Growth Blue Print */}
        <Route path="/growthblueprint" element={<SectionPage title="Player" />} />

        {/* Contact Us */}
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}
