import React from 'react'
import './NavBarCategory.css';
import { NavLink } from 'react-router-dom';

export const NavBarCategory = () => {
    return (
        <div className="containerNavBarCategory">
            <ul>
                <NavLink to="/category/3" className="nav-item nav-link tfont3" activeClassName="li_select">
                    <li>Betst Sellers</li>
                </NavLink>
                <NavLink to="/category/1" className="nav-item nav-link tfont3" activeClassName="li_select">
                    <li>Lo más vendido</li>
                </NavLink>
                <NavLink to="/category/2" className="nav-item nav-link tfont3" activeClassName="li_select">
                    <li>Ofertas</li>
                </NavLink>
            </ul>
        </div>
    )
}
