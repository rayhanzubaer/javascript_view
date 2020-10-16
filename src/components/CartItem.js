import React from "react";

const CartItem = (product) => {
    console.log(product.product);
    const {id, name, image, price} = product.product;
    return (
        <div className="media">
            <img src={`http://localhost:8000/${image}`} className="mr-3" alt=""/>
            <div className="media-body">
    <h5 className="mt-0">{name}</h5>
    <p>{price}</p>
            </div>
        </div>
    );
}

export default CartItem;
