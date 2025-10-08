import React, { useState, useEffect } from 'react';

function Hero() {
    // Array of equipment images from both folders
    const equipmentImages = [
        {
            src: '/ensoltechv2/img/enproductive/Smart-filter system Particle Cut.png',
            alt: 'Smart-filter system Particle Cut'
        },
        {
            src: '/ensoltechv2/img/enproductive/TOPWAY On-line Chemical controller & dosing system  .png',
            alt: 'TOPWAY On-line Chemical controller & dosing system'
        },
        {
            src: '/ensoltechv2/img/equipment/OEM Equipment., Ltd. Horizontal Wet process.png',
            alt: 'OEM Equipment Horizontal Wet process'
        },
        {
            src: '/ensoltechv2/img/equipment/PCB equipment solution  KSDW VCP - Steel Belt VCP.png',
            alt: 'PCB equipment solution KSDW VCP Steel Belt VCP'
        },
        {
            src: '/ensoltechv2/img/equipment/SUNUS 수평 진공 홀플러깅 설비.png',
            alt: 'SUNUS 수평 진공 홀플러깅 설비'
        },
        {
            src: '/ensoltechv2/img/equipment/수평인라인 Desmear+PTH(DM)+Flash Cu line.png',
            alt: '수평인라인 Desmear+PTH(DM)+Flash Cu line'
        }
    ];

    // State to track current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % equipmentImages.length
            );
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [equipmentImages.length]);

    return (
        <div className="pt-24 p-5">
            <h1 className="text-black text-6xl font-bold leading-tight" style={{ fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
                ENSOLTECH
            </h1>
            <p className="text-gray-700 text-lg mt-6 max-w-4xl leading-relaxed">
                엔솔테크는 PCB, IC Package, GMF, PV, 베터리 등의
                산업분야에 필요한 최적의 설비와 부품, 원자재
                등을 공급하고, 약품절감 및 물 사용 최적화, 폐수
                리사이클 솔루션을 통해 생산성향상 및 원가절감
                솔루션을 제공하고 환경을 보호함으로써 고객의
                수익과 사회적 가치를 높이는데 기여하겠습니다.
            </p>
            <div className="w-full flex flex-col justify-center items-center mt-8 p-[10pt] relative">
                {/* Image Container with Sliding Animation */}
                <div className="w-full overflow-hidden rounded-lg shadow-lg">
                    <div 
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {equipmentImages.map((image, index) => (
                            <div key={index} className="relative w-full flex-shrink-0 p-8">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-130 object-contain"
                                />
                                {/* Semi-transparent overlay with image name */}
                                <div className="absolute top-4 left-4 bg-gray-400/60 backdrop-blur-sm px-4 py-4 rounded-lg">
                                    <p className="text-white font-medium text-lg">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-3 mt-6">
                    {equipmentImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentImageIndex 
                                    ? 'bg-blue-600 w-8' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;

{/*수평 flash copper, 자동분석장치, 스마트필터, 스폰지롤러 */}