import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    const changeVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="w-[80%] max-xl:w-full m-auto max-xl:m-0 p-5 flex items-center justify-between font-medium">
            <img className="w-45 max-xl:w-30" src="./images/logo.svg" alt="" />
            <div className={`max-xl:absolute flex gap-40 max-xl:p-3 max-xl:flex-col max-xl:items-center max-xl:gap-2 max-xl:top-15 max-xl:right-0 max-xl:w-full max-xl:bg-secondary-bg max-xl:rounded-sm max-xl:text-sm ${!isVisible ? "max-xl:hidden" : ""} `}>
                <div className="flex max-xl:flex-col max-xl:text-center max-xl:px-0 max-xl:gap-2 gap-10 bg-secondary-bg text-secondary-text px-6 py-3 max-xl:py-0 rounded-sm">
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