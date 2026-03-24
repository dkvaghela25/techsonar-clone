import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-fit m-auto p-5 flex items-center gap-40 font-medium">
            <img width={180} src="./images/logo.svg" alt="" />

            <div className="flex gap-10 bg-secondary-bg text-secondary-text px-6 py-3 rounded-sm">
                <Link to="/">Why TechSonar</Link>
                <Link to="/">Features</Link>
                <Link to="/">Faq</Link>
                <Link to="/">Pricing</Link>
                <Link to="/">Contact</Link>
            </div>

            <button className="bg-primary-button-bg px-10 py-3 rounded-sm" >Login</button>

        </div>
    );
};

export default Header;