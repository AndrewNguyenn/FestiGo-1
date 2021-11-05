import React from "react";

// creates a nav bar that has a user profile button, watch list button, and logout button.
const NavBar = () => {
  return(
    <div className="navbar">
      <div className="navbar-left">
        <button className="navbar-button">
          <i className="fas fa-user-circle"></i>
        </button>
        <button className="navbar-button">
          <i className="fas fa-list-ul"></i>
        </button>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default NavBar;