import { SlPlus } from "react-icons/sl";

const FAQ = ({ faq, displayId, handleToggle }) => {
    const { que, ans, queId } = faq;
    const isActive = displayId === queId;

    return (
        <li className={`w-full p-10 max-lg:p-5 text-2xl transition-colors duration-300 relative overflow-hidden
            ${isActive
                ? "bg-secondary-bg/20 backdrop-blur-md rounded-[10px]"
                : "border-b first:border-t border-white/40"
            }
        `}>
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(queId)}>
                <div className="max-lg:text-lg max-lg:font-normal max-lg:w-[85%]" >{que}</div>
                <SlPlus className={`text-4xl max-lg:text-2xl transition-transform duration-300 ${isActive ? "rotate-45" : ""}`} />
            </div>
            <div
                className={`text-xl font-light overflow-hidden transition-all duration-500 ease-in-out
                        ${isActive
                        ? "mt-12 max-h-125 opacity-100 visible"
                        : "max-h-0 opacity-0 invisible"}
                        `}
            >
                {ans}
                <div className="absolute bottom-0 right-0 w-32 h-24 bg-primary-button-bg/50 rounded-full blur-3xl"></div>
            </div>

        </li>
    );
};

export default FAQ;
