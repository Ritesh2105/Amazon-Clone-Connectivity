import {useContext} from 'react';
import Product from "./Product";
import ProductContext from "../Context/ProductContext";
import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "../assets/styles/PaginatedContent.css";

const AllProducts = () => {

    const {products} = useContext(ProductContext);
    const todos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   const todosPerPage = 4;
   const [ activePage, setCurrentPage ] = useState( 1 );

    // Logic for displaying current todos
    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos     = todos.slice( indexOfFirstTodo, indexOfLastTodo );
 
    const renderTodos = currentTodos.map( ( products, index ) => {
       return <li key={ index }>{ products }</li>;
    } );
 
    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber )
     };
  
console.log(products);
    return (

        <section id="section-movie-list">
           <div className="home">
                <div className="home__container">
                    <div className="home__image">
                <div className="grid grid-gap-1 grid-col-4">
                    {/* <div className="result">
            { renderTodos }
         </div>
         <div className="pagination">
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 3 }
               totalItemsCount={ todos.length }
               pageRangeDisplayed={ 3 }
               onChange={ handlePageChange }
            />
         </div> */}
                {products.map(product=>(<Product key={product.product_id} product_id={product.product_id} title={product.title} poster={product.poster}/>))}    
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default AllProducts
