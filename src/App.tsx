import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import './styles/styles.css';

function App() {

    return (

        <div className="min-h-screen bg-gradient-to-br from-sky-200 to-sky-700">
            <Navbar />
            <Hero />
            
            <About />
            <Products />
            <Contact />
            <Footer />
            
        </div>
    );
}
export default App;