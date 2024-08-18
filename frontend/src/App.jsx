import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./Layout";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  // const [theme, setTheme] = useState(
  //   () => localStorage.getItem("theme") || "light"
  // );

  // useEffect(() => {
  //   document.body.className = theme;
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
    <div>
      <div className="App">
        <Layout />
      </div>
    </div>
  );
}

export default App;
