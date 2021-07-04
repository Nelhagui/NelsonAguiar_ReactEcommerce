import React from 'react';
import './Category.css';
import { CategoryListContainer } from '../../components/category/categoryListContainer/CategoryListContainer';

export const Category = ({match}) => {
    console.log('llamo 1')
    return (
        <div>
            <CategoryListContainer match={match}/>
        </div>
    )
}
