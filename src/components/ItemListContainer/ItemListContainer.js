import  './ItemListContainer.css';
import { useState, useEffect  } from 'react';
import {getProducts} from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
const ItemListiContainer =({greeting}) =>{
    
    const [productos, setProducts]=useState([])
    console.log(productos)

    useEffect( ()=>{
     getProducts().then(productos =>{
        setProducts(productos)
     })
    },[])


    return(
        <>
        <h2>{greeting}</h2>
        
    <ItemList productos={productos}/>
    
        </>
    
    )
}
export default ItemListiContainer
