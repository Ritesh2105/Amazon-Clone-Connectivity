import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Registration from './Registration';
import productContext from "../Context/ProductContext";
import categoryContext from "../Context/CategoryContext";
import HomePage from "../pages/HomePage"
import Checkout from "../pages/Checkout"
import AllProducts from "../pages/Products"
import ProductsByCategory from "../pages/ProductsByCategory"
import ProductByDescription from "../pages/ProductByDescription"
import "../assets/styles/App.css";
// const port = process.env.PORT || 4000;
// import Carousel from "./Carousel"


function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/products")
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

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then((data) => {
        console.log(data.body);
        setCategory((previousState) => {
          previousState = data.body;
          return previousState
        });
      })
      .catch(err => console.log(`Error ${err}`));
  }, [])

  return (
    <productContext.Provider value={{ products }}>
      <categoryContext.Provider value={{ category }}>
        <Router>
          <div className="app">
            <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route exact path="/products">
                <AllProducts/>
              </Route>
              <Route path="/categories/:id">
                <ProductsByCategory/>
              </Route>
              <Route path="/products/:id">
                <ProductByDescription/>
              </Route>
              <Route path="/checkout">
                <Checkout/>
              </Route>
            </Switch>
          </div>
        </Router>
      </categoryContext.Provider>
    </productContext.Provider>
  );
}

export default App;
