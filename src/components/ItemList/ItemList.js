import Item from "../Item/Item";

const ItemList =({productos})=>{
    return(
        <lu>
            {productos.map(prod=> <Item key={prod.id} product={prod}/>)}
        </lu>
    )
}
export default ItemList