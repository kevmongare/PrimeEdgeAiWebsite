/**
 * This returns the Hero page 
 * @returns Hero
 * 
 */
import LandingPage from "./data/LandingPage"
const Hero = () => {
    return (
        <>
            <div className="">
                <div className="h-[80vh] mt-25 items-center flex">
                    {/* Landing Page Text */}
                    <div className="mx-auto max-w-5xl items-center">
                        <p className="shadow-gray-400/30 bg-white/10 w-fit px-5 text-white my-8 py-2 rounded-lg shadow text-center mx-auto"><span className="text-blue-500">✧</span>AI-Powered Business Solutions</p>
                        <h1 className="text-white font-bold text-6xl items-center text-center justify-center">AI Automation That <span className="text-blue-400">Scales Your <br /> Business</span></h1>
                        <p className="text-gray-500 max-w-2xl text-center mx-auto mt-4">
                            {LandingPage}
                        </p>
                        <div className="text-center space-x-4 py-8">
                            <button className="bg-blue-500 px-4 py-2 rounded-lg">Book A Free Consultation</button>
                            <button className=" px-4 py-2 rounded-lg backdrop-blur-5xl  text-white shadow shadow-gray-400/30 bg-white/10">Explore Our Options</button>

                        </div>

                        <hr className='text-gray-600 py-8 max-w-[80%] mx-auto'/>

                    </div>

                </div>

            </div>

        </>
    )

}
export default Hero