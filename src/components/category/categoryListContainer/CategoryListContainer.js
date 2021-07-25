import React from "react";
import { db } from "../../../firebase";
import { useState, useEffect } from "react";
import { ItemList } from "../../itemsContainer/itemList/ItemList";
import { NavCategoryListContainer } from "../navListCategory/navCategoryListContainer/NavCategoryListContainer";
import "./CategoryListContainer.css";

export const CategoryListContainer = ({ match }) => {
    const [itemsCategory, setItemsCategory] = useState([]);

    useEffect(() => {
        const getItem = () => {
            const docs = [];
            db.collection("items")
                .where("id_category", "==", +match.params.categoryId)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    });
                    setItemsCategory(docs);
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        };
        getItem();
    }, [match]);

    return (
        <>
            <div className="categoryListContainer">
                <NavCategoryListContainer />
                <ItemList items={itemsCategory} />
            </div>
        </>
    );
};
