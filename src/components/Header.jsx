import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

//Create header component that generates the top yellow banner
function Header() {
  return (
    <header>
      <h1><HighlightIcon />Keeper</h1>
    </header>
  );
}

//export Header component to App.js
export default Header;
