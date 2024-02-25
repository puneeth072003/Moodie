import ReactDOM from "react-dom/client";
import { Navbar } from "./Navbar/Navbar.jsx";
import App from "./App/App.jsx";
import "./index.css";
import "./Navbar/navbar.css";
import { Support } from "./Support bar/Support.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <App />
    <Support />
  </div>
);
