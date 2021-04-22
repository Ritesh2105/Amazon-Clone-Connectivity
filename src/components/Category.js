import { Link } from "react-router-dom";
const Category = (props) => {
    const alt = `${props.category_name} Poster `;
    console.log(props.category_id);
    return (
        <div className="product-image">
            <Link to={"/categories/" + props.category_id}>
                <img src={require(`../assets/CategoryPoster/${props.category_poster}`).default} alt={alt} />
            </Link>
            <div className="productContent">
                <h3>{props.category_name}</h3>
            </div>
        </div>
    )
}

export default Category
