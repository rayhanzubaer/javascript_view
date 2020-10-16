import React from 'react';
import {useStateValue} from "../StateProvider";

const SubTotal = () => {
    const [state, dispatch] = useStateValue();
    return (
        <div>
            <p>Total {state.cart.length} items</p>
        </div>
    );
}

export default SubTotal;