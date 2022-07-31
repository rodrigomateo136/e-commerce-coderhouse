import "./Item.css";


const Item =({product})=>{

  
    return (
        <li>
            <h4>{product.name}</h4>
            <img className="imgCelu" src={product.img} alt={product.name}/>
          
            </li>
    )
}

export default Item