import React, { useContext } from "react";
import Theme from "./Theme";
import ThemeContext from "../context/theme/ThemeContext";

const Navbar = () => {
  const context = useContext(ThemeContext);
  const { toggleTheme, theme } = context;
  return (
    <div>
      Navbar
      {/* <Theme /> */}
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Navbar;
