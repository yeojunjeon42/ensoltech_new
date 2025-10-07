import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Product from './components/Product.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import './styles/styles.css';

function App() {

    return (

        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Product />
            <Contact />
            <Footer />
            
        </div>
    );
}
export default App;