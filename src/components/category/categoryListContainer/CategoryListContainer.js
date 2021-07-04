import React from 'react'
import { useState, useEffect } from 'react';
import { ItemList } from '../../itemsContainer/itemList/ItemList';

export const CategoryListContainer = ({match}) => {
    let categoryID = match.params.categoryId
    console.log('id select', categoryID)
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        console.log('ajax')
        fetch('https://mocki.io/v1/37f3a056-9a4f-4a2f-9f9b-17fb48ee962c')
            .then((response) => response.json())
            .then((res) => findCategory(res))
    }, [])
    console.log(categories);
    //FUNCION TEMPORAL HASTA ARMAR API CON "/id"
    const findCategory = (res) => 
    {
        console.log('ejecuto')
        var results = res.filter(function (category) { return category.id_category === +categoryID; });
        setCategories(results);
    }
    //fin

    return (
            <div className="containerBooks">
                <ItemList items={categories}/>
            </div>
    )
}
