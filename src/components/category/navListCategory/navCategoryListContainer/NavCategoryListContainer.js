import React from "react";
import { NavListCategory } from "../navCategoryList/NavListCategory";
import { useContext } from "react";
import { CategoriesContext } from "../../../context/CategoriesContext";

export const NavCategoryListContainer = () => {
    const { allCategories } = useContext(CategoriesContext);
    return (
        <div className="containerNavListCategory">
            <NavListCategory data={allCategories} />
        </div>
    );
};
