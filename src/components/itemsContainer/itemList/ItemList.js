import { Link } from 'react-router-dom';
import { Item } from '../item/Item';

export const ItemList = ({items}) => {
    return (
        <>
            {items.map((item)=>{
                return (
                    <Link to={`/detail/${item.id}`} key={item.id}>
                        <Item data={item}/>
                    </Link>
                )
            })}
        </>
    )
}

