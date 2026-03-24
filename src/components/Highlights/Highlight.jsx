import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Highlight = ({ highlight, index }) => {
    const { imgUrl, title, description, link } = highlight;
    return (
        <li className={`flex gap-15 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
            <div className="w-[50%] p-10 bg-primary-button-bg rounded-xl">
                <img className="rounded-lg" src={imgUrl} alt="" />
            </div>
            <div  className="w-[40%] flex flex-col justify-center gap-10">
                <div className="text-4xl font-semibold leading-10 font-secondary">{title}</div>
                <div className="text-lg font-light leading-8.25">{description}</div>
                <div className="flex items-center gap-2">
                    <Link className="text-link-text underline" to={link}>Create Yours Free</Link>
                    <FaArrowRightLong />
                </div>
            </div>
        </li>
    );
};

export default Highlight;   