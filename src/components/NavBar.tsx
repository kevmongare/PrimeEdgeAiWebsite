/**
 * This is the Navbar component helps with the menu bar
 * @returns Menu list on the Menu page
 */
import Menu from "./data/MenuData"
import Logo from '../../public/primeedge-logo-P-uVyoGj.png'

const Navbar = () => {
    return (
        <>
            <section className="shadow-sm shadow-gray-500 fixed top-0 left-0 right-0 backdrop-blur-2xl z-50 bg-black/98">

                <div className="flex items-center justify-between px-4">
                    <a href=""><img src={Logo} alt="" className="h-20"/></a>
{/*                     
                    This is the list for the Menu - can be accessed via ./data/MenuData.ts */}
                     
                    <ul className="text-gray-400 flex space-x-8 ">
                        {Menu.map((item, index) => (
                           <a href=""><li key={index}
                            className="hover:text-white">{item}
                            </li>
                            </a>
                        ))}
                    </ul>

                    <button className="text-blu-500 px-2 py-2 rounded-lg bg-blue-500">Book Consultation</button>
                </div>

            </section>
        </>
    )
}
export default Navbar