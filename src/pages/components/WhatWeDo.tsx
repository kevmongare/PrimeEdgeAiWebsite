/**
 * WhatWeDo Component
 * 
 * @description Displays the company's services/offerings section with a clean, professional layout
 * @returns {JSX.Element} Rendered what-we-do section
 */

import { WhatWeDoData, WhatWeDoList,  } from "./data/WhatWeDo";
// import { CheckIcon } from "@heroicons/react/24/outline"; // Optional: for icons

const WhatWeDo = () => {
  // Validate data exists before rendering
  if (!WhatWeDoData.length || !WhatWeDoList.length) {
    return (
      <section className="bg-gray-900 py-16 px-4 text-center">
        <p className="text-gray-400">Content is currently being updated.</p>
      </section>
    );
  }

  const { Header, MainText } = WhatWeDoData[0];

  return (
    <section 
      id="what-we-do"
      className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      aria-label="Our services and offerings"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            {Header}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {MainText}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {WhatWeDoList.map((item) => (
            <div
              key={``}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1"
            >
              {/* Optional Icon - Uncomment if you have icons */}
              {/* <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <CheckIcon className="w-6 h-6 text-blue-400" />
              </div> */}
              
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {item.Subject}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {item.Details}
                </p>
              </div>
              
              {/* Optional Learn More Link */}
              {/* <a 
                href="#" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 mt-6 font-medium text-sm"
              >
                Learn more
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;