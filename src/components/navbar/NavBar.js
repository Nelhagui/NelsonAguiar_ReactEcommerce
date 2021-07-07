import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg containerNavBar">
			<div className="container">
			<a className="navbar-brand" href="/">Mi logo</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<Link to="/" className="nav-item nav-link tfont3">
						Home
					</Link>
					<Link to="/contac" className="nav-item nav-link tfont3">
						Contact
					</Link>
				</ul>
			</div>
			</div>
			<CartWidget className="icon-cart" />
		</nav>
	)
}

export default NavBar