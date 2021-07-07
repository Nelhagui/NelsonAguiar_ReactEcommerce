import React from 'react'
import { useState, useEffect } from 'react';
import { ItemList } from './itemList/ItemList';
import './ItemsListContainer.css';

export const ItemsListContainer = ({titleSeccion}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/37f3a056-9a4f-4a2f-9f9b-17fb48ee962c')
            .then((response) => response.json())
            .then((res) => setData(res))
    }, [])
    
    return (
        <>
            <h1>{titleSeccion}</h1>
            <ItemList items={data} />
        </>
        
    )
}
