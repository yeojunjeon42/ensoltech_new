import React from 'react';


function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
            <div className="flex">
                <a href="/" className="text-white text-xl font-semibold hover:text-blue-300 transition-all">
                    Yeojun Jeon
                </a>
            </div>
            <div className="flex gap-8">
                <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                    About
                </a>
                <a href="#projects" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                    Projects
                </a>
                <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-300 font-medium">
                    Contact
                </a>
            </div>
            <div className="flex gap-4">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105">
                    Resume
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                    Get in Touch
                </button>
            </div>
        </nav>
    );
}

export default Navbar;