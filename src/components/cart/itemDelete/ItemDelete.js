import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDelete = ({item}) => {
    const {clearItemFromCart} = useContext(CartContext)
    return (
        <div>
            <p onClick={()=>clearItemFromCart(item)}>X</p>
        </div>
    )
}
