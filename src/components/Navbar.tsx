import React, { useState, useRef } from 'react';

function Navbar() {
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

    return (
        <nav className="flex justify-between items-center px-4 py-2.5 fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/20">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-1">
                <a href="/">
                    <img src="/public/img/ensoltech_logo.png" alt="Ensoltech logo" className="h-12" />
                </a>
                
            </div>

            {/* Navigation Links */}
            <div className="flex gap-12 ml-auto items-center">
                {/* About Link */}
                <a
                    href="#about"
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                    About
                </a>

                {/* Equipment Link with Dropdown */}
                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a
                        href="#equipment"
                        className="text-black hover:text-blue-300 transition-colors duration-300 font-medium cursor-pointer flex flex-col items-end"
                    >
                        <span>Equipment Solution</span>
                        <span className="text-[70%] text-right">생산장비솔루션</span>
                    </a>
                    
                    {/* Dropdown Menu */}
                    {isEquipmentOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                            <a href="#item1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                                Item 1
                            </a>
                            <a href="#item2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                                Item 2
                            </a>
                            <a href="#item3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
                                Item 3
                            </a>
                        </div>
                    )}
                </div>

                {/* EnProductive Link */}
                <a
                    href="#enproductive"
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"
                >
                    <span>EnProductive Solution</span>
                    <span className="text-[70%] text-right">부속장비/부품자재 솔루션</span>
                </a>

                {/* EnCycle Link */}
                <a
                    href="#encycle"
                    className="text-black hover:text-blue-300 transition-colors duration-300 font-medium flex flex-col items-end"
                >
                    <span>EnCycle</span>
                    <span className="text-[70%] text-right">환경설비 솔루션</span>
                </a>

                {/* Contact Button */}
                <a href="#contact">
                    <button style={{ backgroundColor: 'var(--color-primary-dark)' }} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                        Contact
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;