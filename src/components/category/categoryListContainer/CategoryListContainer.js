import React from "react";
import { db } from "../../../firebase";
import { useState, useEffect } from "react";
import { ItemList } from "../../itemsContainer/itemList/ItemList";
import { NavCategoryListContainer } from "../navListCategory/navCategoryListContainer/NavCategoryListContainer";
import "./CategoryListContainer.css";

export const CategoryListContainer = ({ match }) => {
    const [itemsCategory, setItemsCategory] = useState([]);
    const [allcategories, setAllCategories] = useState([]);

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

    useEffect(() => {
        getItem();
    }, [match]);

    //ANTERIOR

    // useEffect(() => {
    //     fetch("https://mocki.io/v1/37f3a056-9a4f-4a2f-9f9b-17fb48ee962c")
    //         .then((response) => response.json())
    //         .then((res) => findCategory(res));
    //     const findCategory = (res) => {
    //         let hash = {};
    //         let filterCategories = res.filter((o) =>
    //             hash[o.id_category] ? false : (hash[o.id_category] = true)
    //         );
    //         setAllCategories(filterCategories);
    //         let results = res.filter(function (category) {
    //             return category.id_category === +match.params.categoryId;
    //         });
    //         setItemsCategory(results);
    //     };
    // }, [match]);

    return (
        <>
            <div className="categoryListContainer">
                <NavCategoryListContainer allCategories={allcategories} />
                <ItemList items={itemsCategory} />
            </div>
        </>
    );
};
