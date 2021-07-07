import React from "react";
import { useState, useEffect } from "react";
import { ItemList } from "../../itemsContainer/itemList/ItemList";

export const CategoryListContainer = ({ match }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://mocki.io/v1/37f3a056-9a4f-4a2f-9f9b-17fb48ee962c")
            .then((response) => response.json())
            .then((res) => findCategory(res));
        const findCategory = (res) => {
            let results = res.filter(function (category) {
                return category.id_category === +match.params.categoryId;
            });
            setCategories(results);
        };
    }, [match]);

    return (
        <div className="containerBooks">
            <ItemList items={categories} />
        </div>
    );
};
