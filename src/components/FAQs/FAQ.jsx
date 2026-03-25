import { SlPlus } from "react-icons/sl";

const FAQ = ({ faq, displayId, handleToggle }) => {
    const { que, ans, queId } = faq;

    return (
        <li className={`w-full p-10 max-sm:p-5 border-b first:border-t text-2xl 
            ${displayId === queId ? "bg-secondary-bg/10 backdrop-blur-md border-b-0 rounded-b-[10px]" : ""}
        `}>
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(queId)}>
                <div className="max-sm:text-lg max-sm:font-normal max-sm:w-[85%]" >{que}</div>
                <SlPlus className={`text-4xl max-sm:text-2xl transition delay-25 ${displayId === queId ? "rotate-45" : ""}`} />
            </div>
            {displayId === queId && <div className={`mt-12 text-xl font-light`}>{ans}</div>}
        </li>
    );
};

export default FAQ