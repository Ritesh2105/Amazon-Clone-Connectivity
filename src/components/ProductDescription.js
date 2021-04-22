import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom";
import '../assets/styles/ProductDescription.css';
import QuantityDropdown from "../components/QuantityDropdown";

const ProductDescription = ()=> {
    
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const source = product.poster;
    const alt= `${product.title} Poster `;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
          .then(res => res.json())
          .then((data) => {
            // console.log(data);
            console.log(data.body[0]);
            setProduct((data.body[0]));
          })
          .catch(err => console.log(`Error ${err}`));
      }, [])

   console.log(product);

    return (

        <section id="product-description-section">
            <div className="container grid grid-col-4 grid-gap-2">

                <img src={require(`../assets/productsImages/p3.jpg`).default} alt={alt}></img>
               
                <div className="product-description-content-area">
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                     <h3>Description:</h3>
                     <p>{product.description}</p>
                     <QuantityDropdown/>
                <Link to={'/checkout'}>
                    <div>
                <button  className='login__signInButton' style={{width:"300px", marginLeft:"1px"}}>Add to Cart</button>
                </div></Link>
            </div>
            </div>

        </section>
    )
}

export default ProductDescription
