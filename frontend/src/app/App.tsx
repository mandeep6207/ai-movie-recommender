import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import UserPreferences from "./components/UserPreferences";
import RecommendationDashboard from "./components/RecommendationDashboard";
import MovieDetail from "./components/MovieDetail";
import RecommendResult from "./components/RecommendResults";
import About from "./components/About";
import Feedback from "./components/Feedback";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing / Intro Page */}
        <Route path="/" element={<LandingPage />} />

        {/* User Preferences – AI Model Input */}
        <Route path="/preferences" element={<UserPreferences />} />

        {/* AI Recommendation Dashboard – Model Output */}
        <Route path="/dashboard" element={<RecommendationDashboard />} />

        {/* Movie Detail Page
            :id = movie title (used for backend recommendation fetch)
        */}
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/recommend/:movie" element={<RecommendResult />} />
        {/* Fallback Route – Professional Handling */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </Router>
  );
}
