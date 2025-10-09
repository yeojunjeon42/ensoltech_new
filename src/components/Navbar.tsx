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
        <nav className="flex justify-between items-center px-6 lg:px-32 py-2.5 fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-lg shadow-sm">
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
                    
                    {/* Large NVIDIA-Style Dropdown Menu */}
                    <div className={`fixed top-[65px] left-0 right-0 w-full bg-white shadow-2xl border-t border-gray-200 z-40 transition-all duration-300 ease-out ${
                        isEquipmentOpen 
                            ? 'opacity-100 translate-y-0 pointer-events-auto' 
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                            <div className="max-w-7xl mx-auto">
                                <div className="flex">
                                    {/* Left Sidebar - Equipment List */}
                                    <div className="w-1/3 bg-gray-50 p-6 border-r border-gray-200">
                                    <Link 
                                        to="/equipment/vertical" 
                                        className="block py-3 px-4 text-gray-700 hover:bg-white hover:text-blue-600 rounded-md transition-all mb-2 font-medium"
                                    >
                                        수직 PCB/IC 장비
                                    </Link>
                                    <Link 
                                        to="/equipment/horizontal" 
                                        className="block py-3 px-4 text-gray-700 hover:bg-white hover:text-blue-600 rounded-md transition-all mb-2 font-medium"
                                    >
                                        수평 PCB 장비
                                    </Link>
                                    <Link 
                                        to="/equipment/vacuum" 
                                        className="block py-3 px-4 text-gray-700 hover:bg-white hover:text-blue-600 rounded-md transition-all mb-2 font-medium"
                                    >
                                        진공 홈플러깅
                                    </Link>
                                    <Link 
                                        to="/equipment/double-sided" 
                                        className="block py-3 px-4 text-gray-700 hover:bg-white hover:text-blue-600 rounded-md transition-all mb-2 font-medium"
                                    >
                                        양면 자동 인쇄기
                                    </Link>
                                    
                                </div>

                                {/* Right Content Area */}
                                <div className="w-2/3 p-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">생산설비류 (Production Equipment)</h3>
                                    
                                    <div className="space">
                                        {/* 수직 PCB/IC 장비 */}
                                        <Link to="/equipment/vertical" className="block group p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                수직 PCB/IC 장비 →
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                DC VCP, PPR VCP, 캐리어타입 CU plating, 수평전기동 CU plating, IC 도금 장비
                                            </p>
                                        </Link>

                                        {/* 수평 PCB 장비 */}
                                        <Link to="/equipment/horizontal" className="block group p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                수평 PCB 장비 →
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Desmear, Electroless Cu, Blackhole, Shadow, Flash Cu plating, BrownOxide, Immersion Tin
                                            </p>
                                        </Link>

                                        {/* 진공 홈플러깅 */}
                                        <Link to="/equipment/vacuum" className="block group p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                진공 홈플러깅 →
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                High-precision vacuum hole plugging equipment for advanced PCB applications
                                            </p>
                                        </Link>

                                        {/* 양면 자동 인쇄기 */}
                                        <Link to="/equipment/double-sided" className="block group p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                양면 자동 인쇄기 →
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Double-sided automatic printing equipment for efficient PCB manufacturing
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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