import React from "react";
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";

const Header = () => {

    const [state, dispatch] = useStateValue();

    return (
        <div className={"header"}>
            Header Component
            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>Cart{state.cart.length}</Link>
        </div>
    );
}

export default Header;
