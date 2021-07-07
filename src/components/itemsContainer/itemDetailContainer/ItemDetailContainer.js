import React from 'react'
import { ItemDetail } from './itemDetail/ItemDetail';
import { useState, useEffect } from 'react';

export const ItemDetailContainer = ({match}) => {
    const [detailMatch, setDetailMatch] = useState([]);
    useEffect(() => {
        fetch('https://mocki.io/v1/37f3a056-9a4f-4a2f-9f9b-17fb48ee962c')
            .then((response) => response.json())
            .then((res) => findMatch(res))

        const findMatch = (res) => 
        {
            const results = res.filter(function (detail) { return +detail.id === +match.params.id; });
            const firstObj = (results.length > 0) ? results[0] : null;
            setDetailMatch(firstObj);
        }
    }, [match])
    
    return (
        <div>
            <ItemDetail data={detailMatch}/>
        </div>
    )
}
