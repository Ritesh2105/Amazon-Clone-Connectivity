import { useContext } from 'react';
import { useParams } from "react-router-dom"
import Product from "./Product";
import ProductContext from "../Context/ProductContext";

const ProductList = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const ProductFilterByCategory = products.filter((product) => {
        return product.category_id === id;

    })
    return (
        <section id="section-product-list">
            <div className="home">
                <div className="home__container">
                    <div className="home__image">
                        <div className="grid grid-gap-1 grid-col-4">
                            {ProductFilterByCategory.map(product => (<Product key={product.product_id} product_id={product.product_id} title={product.title} poster={product.poster} price={product.price} />))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList
