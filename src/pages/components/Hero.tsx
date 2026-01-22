import React from "react";
import LandingText from "./data/LandingPage";

const Hero: React.FC = () => {
    return (
        <div className="relative h-[80vh] mt-20 flex items-center overflow-hidden">
            
            {/* 1. Fixed Background Video */}
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="fixed inset-0 w-full h-full object-cover -z-20"
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            {/* 2. Fixed Black/50 Overlay */}
            <div className="fixed inset-0 bg-black/85 -z-10" />

            {/* 3. Hero Content (Scrolled content) */}
            <div className="relative z-10 mx-auto max-w-5xl items-center fade-in">
                <p className="shadow-gray-400/30 bg-white/10 w-fit px-5 text-white my-8 py-2 rounded-lg shadow text-center mx-auto">
                    <span className="text-blue-500">✧</span> AI-Powered Business Solutions
                </p>
                
                <h1 className="text-white font-bold text-6xl text-center">
                    AI Automation That <span className="text-blue-400">Scales Your <br /> Business</span>
                </h1>

                {LandingText.map((item, index) => (
                    <p className="text-gray-300 max-w-2xl text-center mx-auto mt-4" key={index}>
                        {item.LandingText}
                    </p>
                ))}
                
                <div className="text-center space-x-4 py-8">
                    <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Book A Free Consultation</button>
                    <button className="px-4 py-2 rounded-lg backdrop-blur-xl text-white shadow shadow-gray-400/30 bg-white/10">Explore Our Options</button>
                </div>

                <hr className='border-gray-600 py-8 max-w-[80%] mx-auto'/>
            </div>
        </div>
    );
};

export default Hero;
