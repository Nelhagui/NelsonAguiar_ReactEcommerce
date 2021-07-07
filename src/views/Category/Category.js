import React from 'react';
import './Category.css';
import { CategoryListContainer } from '../../components/category/categoryListContainer/CategoryListContainer';

export const Category = ({match}) => {
    return (
        <div>
            <CategoryListContainer match={match}/>
        </div>
    )
}
