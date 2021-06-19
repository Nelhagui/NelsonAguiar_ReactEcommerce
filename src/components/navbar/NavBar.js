import React from 'react'
import './Navbar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <div className="container">
			    <a className="navbar-brand" href="/">Mi logo</a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
			        <li className="nav-item">
			          <a className="nav-link tfont3 active" aria-current="page" href="/">Home</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link tfont3" href="/">Los 100 más vendidos</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link tfont3 " href="/">Novedades</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link tfont3 " href="/" >Libros</a>
			        </li>
			      </ul>
			    </div>
			  </div>
			   <CartWidget className="icon-cart" />
			</nav>
		</>
	)
}

export default NavBar