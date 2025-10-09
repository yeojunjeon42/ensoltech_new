import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    // State to control Equipment dropdown visibility
    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
    // Timeout ref for delayed dropdown close
    const dropdownTimeout = useRef<number | null>(null);

    // Handle opening dropdown immediately
    const handleMouseEnter = () => {
        if (dropdownTimeout.current) {
            clearTimeout(dropdownTimeout.current);
        }
        setIsEquipmentOpen(true);
    };

    // Handle closing dropdown with 0.3s delay
    const handleMouseLeave = () => {
        dropdownTimeout.current = window.setTimeout(() => {
            setIsEquipmentOpen(false);
        }, 200);
    };

    // Handle scrolling to contact section
    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <nav className="flex justify-between items-center px-4 py-2.5 fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/20">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-1">
                <Link to="/">
                    <img src="/ensoltechv2/img/Ensoltech_logo.png" alt="Ensoltech logo" className="h-12" />
                </Link>
                
            </div>

            {/* Navigation Links */}
            <div className="flex gap-12 ml-auto items-center">

                {/* Equipment Link with Dropdown */}
                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link
                        to="/equipment"
                        className="text-black hover:text-blue-300 transition-colors duration-300 font-medium cursor-pointer flex flex-col items-end"
                    >
                        <span>Equipment Solution</span>
                        <span className="text-[70%] text-right">생산장비솔루션</span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {isEquipmentOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                            <Link to="/equipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                                Equipment1
                            </Link>
                            <Link to="/equipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                                Equipment2
                            </Link>
                        </div>
                    )}
                </div>

                {/* EnProductive Link */}
                <Link
                    to="/enproductive"
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"
                >
                    <span>EnProductive Solution</span>
                    <span className="text-[70%] text-right">부속장비/부품자재 솔루션</span>
                </Link>

                {/* EnCycle Link */}
                <Link
                    to="/encycle"
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"
                >
                    <span>EnCycle</span>
                    <span className="text-[70%] text-right">환경설비 솔루션</span>
                </Link>

                {/* Contact Button */}
                <button 
                    onClick={handleContactClick}
                    style={{ backgroundColor: 'var(--color-primary-dark)' }} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}

export default Navbar;