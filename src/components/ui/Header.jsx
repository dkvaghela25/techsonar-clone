import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-[90%] max-sm:w-full m-auto max-sm:m-0 p-5 flex items-center justify-between font-medium">
            <img className="w-45 max-sm:w-30" src="./images/logo.svg" alt="" />

            <div
                className={`max-sm:absolute flex gap-30 max-sm:p-3 max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:top-15 max-sm:right-0 max-sm:w-full max-sm:bg-secondary-bg max-sm:rounded-sm max-sm:text-sm transition-all duration-300 ease-in-out  
                    ${isVisible
                        ? "max-sm:opacity-100 "
                        : "max-sm:opacity-0 max-sm:-translate-y-5"
                    }`}
            >                <div className="flex max-sm:flex-col max-sm:text-center max-sm:px-0 max-sm:gap-2 gap-10 bg-secondary-bg text-secondary-text px-6 py-3 max-sm:py-0 rounded-sm">
                    <Link to="/">Why TechSonar</Link>
                    <Link to="/">Features</Link>
                    <Link to="/">Faq</Link>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Contact</Link>
                </div>
                <button className="bg-primary-button-bg px-10 py-3 max-xl:px-5 max-xl:py-1.5 rounded-sm max-xl:w-fit" >Login</button>
            </div>
            <div className='cursor-pointer xl:hidden' onClick={changeVisibility}><RxHamburgerMenu className='text-2xl' /></div>
        </div>
    );
};

export default Header;