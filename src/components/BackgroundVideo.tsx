import React from 'react';
import bgVideo from './assets/background.mp4'; // Ensure your TS config handles .mp4

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center bg-black/40 text-center text-white">
        <div>
          <h1 className="text-5xl font-bold">Welcome to 2026</h1>
          <p className="mt-4 text-xl">Experience seamless video backgrounds.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
