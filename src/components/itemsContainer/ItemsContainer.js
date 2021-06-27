import React from 'react'
import { Item } from './item/Item';
import './ItemsContainer.css';

export const ItemsContainer = ({titleSeccion}) => {
    return (
        <>
            <h1>{titleSeccion}</h1>
            <div className="containerBooks">
                <Item/>
            </div>
        </>
        
    )
}
