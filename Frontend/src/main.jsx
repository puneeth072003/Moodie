import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import "./Navbar/navbar.css";
import "./Support bar/support.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./login/login.jsx";
import Signup from "./login/signup.jsx";
import ToolsPage from "./Pages/tools.jsx";
import CaseStudy from "./Pages/caseStudy.jsx";
import AboutPage from "./Pages/about.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/case" element={<CaseStudy />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </div>
);
