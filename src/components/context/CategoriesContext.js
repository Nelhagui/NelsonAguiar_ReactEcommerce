import { createContext, useState, useEffect } from "react";
import { db } from "../../firebase";

export const CategoriesContext = createContext({});

export const CategoriesProvider = ({ children }) => {
    const [allCategories, setAllCategories] = useState([]);
    useEffect(() => {
        const docs = [];
        db.collection("categories").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setAllCategories(docs);
        });
    }, []);

    return (
        <CategoriesContext.Provider
            value={{
                allCategories,
                setAllCategories,
            }}
        >
            {children}
        </CategoriesContext.Provider>
    );
};
