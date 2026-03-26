import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FadeAnimation from "../ui/FadeAnimation";

const Highlight = ({ highlight, index }) => {
    const { imgUrl, title, description, link } = highlight;
    return (
        <FadeAnimation axes={index % 2 === 0 ? "Left" : "Right"}>
            <li className={`flex gap-15 max-lg:gap-8 max-lg:flex-col max-lg:text-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                <div className="w-[50%] max-lg:w-full p-10 max-lg:p-5 bg-primary-button-bg rounded-xl">
                    <img className="rounded-lg w-full" src={imgUrl} alt="" />
                </div>
                <div className="w-[40%] max-lg:w-full flex flex-col justify-center gap-10 max-lg:gap-5">
                    <div className="text-4xl font-semibold leading-10 font-secondary">{title}</div>
                    <div className="text-lg font-light leading-8.25">{description}</div>
                    <div className="flex items-center gap-2 max-lg:justify-center">
                        <Link className="text-link-text underline" to={link}>Create Yours Free</Link>
                        <FaArrowRightLong />
                    </div>
                </div>
            </li>
        </FadeAnimation>
    );
};

export default Highlight;   