/**
 * This is a footer to the page
 * @returns 
 */
import FootData from './data/FooterData'
import Menu from './data/MenuData'
import Contact from './data/ContactData'
import Logo from '../../public/primeedge-logo-P-uVyoGj.png'

const Footer = () => {
    return (
        <>
            <div>
                <hr className='text-gray-600 py-2 max-w-6xl mx-auto'/>
                <section className="flex justify-between py-10 max-w-6xl mx-auto">
                    <div>
                        <img src={Logo} alt="" className='h-30' />
                        <p className='text-gray-400 max-w-xl'>
                            {FootData.FooterParagrah}
                        </p>
                    </div>
                    <div>
                        <p className='text-white'>Navigation</p>
                        <ul className="text-gray-400  space-x-4 ">
                            {Menu.map((item, index) => (
                                <a href="">
                                    <li key={index}
                                        className="hover:text-white">{item}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className='text-white'>Contact</p>
                        <ul className="text-gray-400  space-x-4 ">
                            {Contact.map((item, index) => (
                                <a href="">
                                    <li key={index}
                                        className="hover:text-white">{item}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                
                </section>
                
                <hr className='text-gray-600 py-2 max-w-6xl mx-auto'/>
                <div className='justify-between flex mx-auto max-w-6xl py-5'>
                    <p className="text-sm sm:text-base text-center text-gray-600">
                        &copy;{new Date().getFullYear()} PrimeEdge AI. All rights reserved.
                    </p>
                    <ul className='text-gray-600 flex space-x-4'>
                        <a href="">
                            <li>
                                Privacy Policy
                            </li>
                        </a>
                        <a href="">
                            <li>
                                Terms of Service
                            </li>
                        </a>
                    </ul>
                </div>

            </div>
        </>
    )

}
export default Footer