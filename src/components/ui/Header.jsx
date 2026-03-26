import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="max-lg:relative w-[75%] sm:max-lg:w-[90%] m-auto p-5 flex items-center justify-between font-medium">
            <img className="w-45 max-lg:w-30" src="./images/logo.svg" alt="" />

            <div
                className={`max-lg:absolute flex gap-30 max-lg:p-3 max-lg:flex-col max-lg:items-center max-lg:gap-2 max-lg:top-15 max-lg:left-0 max-lg:w-full max-lg:bg-secondary-bg max-lg:rounded-sm max-lg:text-sm transition-all duration-300 ease-in-out  
                    ${isVisible
                        ? "max-lg:opacity-100 "
                        : "max-lg:opacity-0 max-lg:-translate-y-5"
                    }`}
            >                <div className="flex max-lg:flex-col max-lg:text-center max-lg:px-0 max-lg:gap-2 gap-10 bg-secondary-bg text-secondary-text px-6 py-3 max-lg:py-0 rounded-sm">
                    <Link to="/">Why TechSonar</Link>
                    <Link to="/">Features</Link>
                    <Link to="/">Faq</Link>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Contact</Link>
                </div>
                <button className="bg-primary-button-bg px-10 py-3 max-xl:px-5 max-xl:py-1.5 rounded-sm max-xl:w-fit" >Login</button>
            </div>
            <div className='cursor-pointer lg:hidden' onClick={changeVisibility}><RxHamburgerMenu className='text-2xl' /></div>
        </div>
    );
};

export default Header;