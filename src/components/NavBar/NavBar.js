import React from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";



function Navbar() {
  return (
    <nav className="navbar">
      
      <SearchBar />
    </nav>
  );
}

export default Navbar;