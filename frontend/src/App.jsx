import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import RoleMatches from "./pages/RoleMatches";
import SkillGap from "./pages/SkillGap";
import CareerRoadmap from "./pages/CareerRoadmap";
import CareerAssistant from "./pages/CareerAssistant";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/roles" element={<RoleMatches />} />
            <Route path="/skill-gap" element={<SkillGap />} />
            <Route path="/career-roadmap" element={<CareerRoadmap />} />
            <Route
              path="/career-assistant"
              element={<CareerAssistant />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;