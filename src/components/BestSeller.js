import { useState, useEffect, useContext } from 'react';
import Product from "./Product";
import ProductContext from "../Context/ProductContext";
import "../assets/styles/BestSeller.css";

const BestSeller = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products/bestSeller?bestSeller=true")
          .then(res => res.json())
          .then((data) => {
            console.log(data);
            console.log(data.body);
            setProducts((previousState) => {
              previousState = data.body;
              return previousState
            });
          })
          .catch(err => console.log(`Error ${err}`));
      }, [])

    // const { products } = useContext(ProductContext);
    // const bestseller = products.filter((product) => {
    //     return product.bestSeller === "true";
    // })
    console.log(products);
    console.log(products.bestSeller);
    console.log(products.body);
    return (
        <section id="section-product-list">
            <div className="product">
                <div className="product__container">
                    <h1>Best Seller</h1>
                    <div className="product__image">
                        <div className="grid grid-gap-1 grid-col-4">
                            {products.map(products => (<Product key={products.product_id} product_id={products.product_id} title={products.title} poster={products.poster} price={products.price} />))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSeller;