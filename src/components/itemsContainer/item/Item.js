import React from 'react'
import { ItemCount } from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({data}) => {
    return (
        <>
            <div className="contentBook">
                <Link to={`/detail/${data.id}`}>
                    <img src={data.image} alt="" />
                    <p>{data.name}</p>
                </Link>
                <ItemCount stock={data.stock}/>
            </div>
        </>
    )
}
