import React from "react";

//Create Footer component that generates the copyright at bottom
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

//export Footer component to App.js
export default Footer;
