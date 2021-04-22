import {Link} from "react-router-dom";
const Product = (props) => {

    const alt= `${props.title} Poster `;
    console.log(props);
    
    return (
        <div className="product-image">
           <Link to = {`/products/${props.product_id}`}>
                <img src={require(`../assets/productsImages/${props.poster}`).default} alt={alt}></img>                
            </Link> 
            <div className="productContent">
                <h3>{props.title}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Product
