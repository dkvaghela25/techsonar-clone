import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ references }) => {

    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        setIsVisible(!isVisible)
    }

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="max-lg:relative w-[75%] max-lg:px-0 max-lg:w-[90%] lg:max-xl:w-full   m-auto p-5 flex items-center justify-between font-medium">
            <img className="w-45 max-md:w-30 md:max-lg:w-35" src="./images/logo.svg" alt="" />

            <ul className={`max-lg:absolute z-50 flex max-lg:flex-col max-lg:text-center max-lg:w-full max-lg:px-0 max-md:text-sm  max-lg:top-15 max-lg:right-0 max-lg:gap-2 gap-10 bg-secondary-bg text-secondary-text px-6 py-3 max-lg:py-0 rounded-sm transition-all delay-200 ease-in-out
                   ${isVisible
                    ? "max-lg:opacity-100 py-5!"
                    : "max-lg:opacity-0 max-lg:-translate-y-5 max-lg:hidden"
                }                       
            `}>
                {Object.entries(references).map(([key, value]) => (
                    <li key={key} onClick={() => scrollToSection(value)} className="cursor-pointer">{key}</li>
                ))}

                <li className="lg:hidden cursor-pointer">
                    <button className="bg-primary-button-bg px-10 py-3 max-xl:px-5 max-xl:py-1.5 rounded-sm max-xl:w-fit" >Login</button>
                </li>
            </ul>

            <button className="max-lg:hidden bg-primary-button-bg px-10 py-3 max-xl:px-5 max-xl:py-1.5 rounded-sm max-xl:w-fit" >Login</button>

            <div className='cursor-pointer lg:hidden text-3xl max-md:text-2xl' onClick={changeVisibility}>
                {!isVisible
                    ? <RxHamburgerMenu />
                    : <IoMdClose />
            }
            </div>
        </div>
    );
};

export default Header;