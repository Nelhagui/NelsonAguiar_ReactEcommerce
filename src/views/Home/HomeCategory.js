import React from 'react'
import { ItemsListContainerCategory } from '../../components/itemsContainer/itemsListContainerCategory/ItemsListContainerCategory';
import { Header } from '../../components/header/Header';
export const HomeCategory = ({match}) => {
    return (
        <div>
            <Header description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ut dolorum? Similique quasi omnis, beatae deleniti ab corrupti explicabo ea aut. Et blanditiis amet voluptatibus hic ab, quas ducimus culpa."/>
            <ItemsListContainerCategory match={match} />
        </div>
    )
}