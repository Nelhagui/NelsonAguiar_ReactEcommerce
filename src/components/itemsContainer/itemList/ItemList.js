import { Item } from "../item/Item";

export const ItemList = ({ items }) => {
    return (
        <>
        <div className="containerBooks">
            {items.map((item) => {
                return (
                        <Item data={item} key={item.id}/>
                );
            })}
        </div>
        </>
    );
};
