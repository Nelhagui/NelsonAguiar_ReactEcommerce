import React from "react";
import { db } from "../../../firebase";
import { useState, useEffect } from "react";
import { ItemList } from "../../itemsContainer/itemList/ItemList";
import { NavCategoryListContainer } from "../navListCategory/navCategoryListContainer/NavCategoryListContainer";
import "./CategoryListContainer.css";

export const CategoryListContainer = ({ match }) => {
    const [itemsCategory, setItemsCategory] = useState([]);
    const [allcategories, setAllCategories] = useState([]);

    useEffect(() => {
        const getItem = () => {
            const findCategory = (res) => {
                let hash = {};
                let filterCategories = res.filter((o) =>
                    hash[o.id_category] ? false : (hash[o.id_category] = true)
                );
                setAllCategories(filterCategories);
                let results = res.filter(function (category) {
                    return category.id_category === +match.params.categoryId;
                });
                setItemsCategory(results);
            };
            const docs = [];
            db.collection("items").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                findCategory(docs);
            });
        };
        getItem();
    }, [match]);

    return (
        <>
            <div className="categoryListContainer">
                <NavCategoryListContainer allCategories={allcategories} />
                <ItemList items={itemsCategory} />
            </div>
        </>
    );
};
