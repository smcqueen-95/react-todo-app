import React from "react";
import { MdBrightness2 } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Todo App</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        <MdBrightness2 size="2.3rem" />
      </button>
    </div>
  );
};

export default Header;