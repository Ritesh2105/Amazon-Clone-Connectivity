import {useContext} from 'react';
import Category from "./Category";
import CategoryContext from "../Context/CategoryContext";
import "../assets/styles/CategoryList.css";

const CategoryList = () => {

    const { category } = useContext(CategoryContext);
    console.log(category);
    return (

        <section id="section-category-list">
            <div className="home">
                <div className="home__container1">
                    <h1>Categories</h1>
                    <div className="home__image">
                        <div className="grid grid-gap-1 grid-col-4">
                            {category.map(category => (<Category key={category.category_id} category_id={category.category_id} category_name={category.category_name} category_poster={category.category_poster} />))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryList
