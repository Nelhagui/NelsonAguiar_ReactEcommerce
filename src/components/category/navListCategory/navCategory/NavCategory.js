import React from 'react';
import './NavCategory.css';
import { Link } from 'react-router-dom';

export const NavCategory = ({category}) => {
    return (
        <>
            <ul className="list_category">
                <Link to={`/category/${category.id_category}`}>
                    <li>{category.name_category}</li>
                </Link>
            </ul>
        </>
    )
}
