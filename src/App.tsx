import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Equipment from './pages/Equipment';
import Enproductive from './pages/Enproductive';
import Encycle from './pages/Encycle';
import './styles/styles.css';

function App() {
    return (
        <Router basename="/ensoltechv2">
            <div className="min-h-screen bg-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/equipment" element={<Equipment />} />
                    <Route path="/enproductive" element={<Enproductive />} />
                    <Route path="/encycle" element={<Encycle />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;