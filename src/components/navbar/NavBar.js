import React from "react";
import "./Navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import DropdownCategories from "./DropdownCategories";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg containerNavBar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Mi logo
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/" className="nav-item nav-link tfont3">
                            Home
                        </Link>
                        <Link to="/contac" className="nav-item nav-link tfont3">
                            Contact
                        </Link>
                        <DropdownCategories />
                    </ul>
                </div>
            </div>
            <Link to="/cart">
                <CartWidget className="icon-cart" />
            </Link>
        </nav>
    );
};

export default NavBar;
