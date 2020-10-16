import React from "react";
import { useStateValue } from "../StateProvider";

import CartItem from "./CartItem";
import SubTotal from "./SubTotal";

const Cart = () => {

    const [state, dispatch] = useStateValue();

    return (
        <div>
            {
                state.cart.map((item) => {
                    return <div key={item.id}>
                    <CartItem product={item}/>
                    </div>
                })
            }
            
            <SubTotal/>
        </div>
    );
}

export default Cart;
