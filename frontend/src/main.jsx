import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeData from "./context/theme/ThemeData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeData>
      <App />
    </ThemeData>
  </React.StrictMode>
);
