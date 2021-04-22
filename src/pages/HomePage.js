import React from 'react'
import Header from "../components/Header";
import Home from "../components/Home";
import Nav from "../components/Nav";
import CategoryList from "../components/CategoryList";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <Home />
            <CategoryList />
            <BestSeller />
            <Footer />
        </>
    )
}

export default HomePage
