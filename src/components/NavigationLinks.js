import { Link } from "react-router-dom";
import "../assets/styles/NavigationLinks.css"

const NavigationLinks = (props) => {
    return (

        <div className="productImage">
            <Link to={`/categories/${props.category_id}`}>
            <p>{props.category_name}</p>
            </Link>
        </div>
    )
}

export default NavigationLinks
