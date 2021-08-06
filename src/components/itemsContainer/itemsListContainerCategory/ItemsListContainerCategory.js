import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { ItemList } from "../itemList/ItemList";

export const ItemsListContainerCategory = ({ match }) => {
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
                    alert("Error getting documents: ", error);
                });
        };
        getItem();
    }, [match]);

    return (
        <>
            <div className="categoryListContainer">
                <ItemList items={itemsCategory} />
            </div>
        </>
    );
};
