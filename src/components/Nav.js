import {React} from 'react'
import {useContext} from 'react';
import NavigationLinks from "../components/NavigationLinks"
import CategoryContext from "../Context/CategoryContext";
import "../assets/styles/Nav.css";

function Nav() {
    const { category } = useContext(CategoryContext);
    return (
        <div className="Nav">
            <a href="/products" style={{fontSize:"100%",marginLeft:"10px", color:"white", textDecoration:"none"}}>All Products</a>
            <div class="grid-item-category">
                {category.map(category => (<NavigationLinks key={category.category_id} category_id={category.category_id} category_name={category.category_name} />))}
            </div>
        </div>
    )
}

export default Nav