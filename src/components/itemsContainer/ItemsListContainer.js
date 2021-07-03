import React from 'react'
import { useState, useEffect } from 'react';
import { listData } from './listData/ListData';
import { ItemList } from './itemList/ItemList';
import './ItemsListContainer.css';

export const ItemsListContainer = ({titleSeccion}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setData(listData);
        }, 2000);
    }, [])
    
    return (
        <>
            <h1>{titleSeccion}</h1>
            <div className="containerBooks">
                <ItemList items={data}/>
            </div>
        </>
        
    )
}
