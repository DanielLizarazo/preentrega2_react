import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greetings}) => {
    const [products, setproducts] = useState([])
    const {category} = useParams()


    useEffect(() => {

        if(!category){
            getProducts()
                .then((res) => {
                    setproducts(res)
                })
                .catch((err) => console.log(err))
        } else{
            getProductsByCategory(category)
            .then((res) =>{
                setproducts(res)
            })
            .catch((err)=> console.log(err))
        }
    }, [category]);

    return (
        
        <div>
            <h1>{greetings}</h1>
            <div>

            <ItemList products={products}/>
            </div>
        </div>

    )
}

export default ItemListContainer