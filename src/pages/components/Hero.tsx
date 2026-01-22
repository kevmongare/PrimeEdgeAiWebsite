/**
 * This is the Hero page holds the landing page hero section dat
 * @returns Hero Data
 * @requires data from src/pages/components/data
 */
import React from "react";
import {HeroStats, LandingText} from "./data/LandingPage";

const Hero: React.FC = () => {
    return (
        <div className="relative h-[110vh] mt-20 flex items-center overflow-hidden">
            
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
            <div className="relative z-10 mx-auto max-w-5xl items-center fade-in h-screen">
                <p className="shadow-gray-400/30 bg-white/30 w-fit px-5 text-white my-8 py-2 rounded-full shadow text-center mx-auto">
                    <span className="text-blue-500">✧</span> AI-Powered Business Solutions
                </p>
                
                <h1 className="text-white font-bold text-6xl text-center">
                    AI Automation That <span className="text-blue-400">Scales Your <br /> Business</span>
                </h1>

                {LandingText.map((item, index) => (
                    <p className="text-gray-400 max-w-2xl text-center mx-auto mt-4 font-extralight" key={index}>
                        {item.LandingText}
                    </p>
                ))}
                
                <div className="text-center space-x-4 py-8">
                    <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Book A Free Consultation</button>
                    <button className="px-4 py-2 rounded-lg backdrop-blur-xl text-white shadow shadow-gray-400/30 bg-white/10">Explore Our Options</button>
                </div>

                <hr className='border-gray-600 mt-15 max-w-full mx-auto'/>

                 {/* --- New Statistics Section --- */}
                <div className="py-10 grid grid-cols-3 gap-4 text-center text-white max-w-[80%] mx-auto">
                    {HeroStats.map((stat) => (
                        <div key={stat.id}>
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <p className="text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Hero;
