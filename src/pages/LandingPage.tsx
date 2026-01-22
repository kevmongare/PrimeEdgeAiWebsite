/**
 * This loads the landing page and all its details
 * @returns Landingpage, WhatWedo
 */
import Hero from "./components/Hero"
import WhatWedo from "./components/WhatWeDo"
const LandingPage = () =>{
    return(
        <>
        <Hero />
        <WhatWedo/>
        </>
    )
}
export default LandingPage