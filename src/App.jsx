import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import EcoActPage from "../pages/ecoActPage";
import DonationPage from "../pages/donationPage";
import FormDonationPage from "../pages/formDonationPage";
import DetailVolunteerPage from "../pages/detailVolunteerPage";
import FormVolunteerPage from "../pages/formVolunteerPage";
import HistoryPage from "../pages/historyPage";
import NotFound from "../pages/notFound";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ecoact" element={<EcoActPage />} />
        <Route path="/ecoact/detail" element={<DetailVolunteerPage />} />
        <Route path="/ecoact/form" element={<FormVolunteerPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/donate/form" element={<FormDonationPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
