import { Item } from "../item/Item";

export const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <Item data={item} key={item.id}/>
                );
            })}
        </>
    );
};
