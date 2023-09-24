import React from "react";
import { NavLink } from "react-router-dom";

const NavigationContainer = (props) => {
  const dynamicLink = () => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to="/blog" activeClassName="nav-link-active">
          Blog
        </NavLink>
        {false ? <button>Add Blog</button> : null}
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/blog", "Blog")
          : null}
      </div>

      <div className="right-side">
        <div className="nav-link-wrapper">
          <NavLink to="/login" activeClassName="nav-link-active">
            Login
          </NavLink>
        </div>
        Mike Vidal
      </div>
    </div>
  );
};

export default NavigationContainer;
