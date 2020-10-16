import Axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/products')
        .then((response) => {
            setProducts(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className={"home"}>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="col-3 mb-3">
                                <Product  product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
