import React from "react";

import './Product.css';
import {useStateValue} from "../StateProvider";

const Product = (product) => {
const {id, name, image, price} = product.product;
    const [state, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                name,
                image,
                price
            }
        });
    }

    return (
        <div className="card">
            <img className="card-img-top" src={`http://localhost:8000/${image}`} 
            alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;
