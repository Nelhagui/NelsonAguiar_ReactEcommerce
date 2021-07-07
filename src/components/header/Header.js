import React from 'react'
import './Header.css';

export const Header = ({description}) => {
    return (
        <div className="containerHeader">
            <p>{description}</p>
        </div>
    )
}
