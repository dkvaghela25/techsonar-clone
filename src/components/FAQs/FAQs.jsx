import { useState } from "react";
import { faqs } from "../../constants";
import Title from "../ui/Title";
import FAQ from "./FAQ";

const FAQs = ({ ref }) => {

    const [displayId, setDisplayId] = useState(false);

    const handleToggle = (queId) => {
        setDisplayId(prev => prev === queId ? false : queId)
    }

    return (
        <div className="w-full px-15 max-md:px-5">
            <div ref={ref} className=" flex flex-col items-center w-full max-w-400 mx-auto">

                <Title
                    title="Frequently ask questions"
                    description="Show users your uptime history, response times, and current status."
                />

                <ul className="w-full mt-20 max-lg:mt-10">
                    {faqs.map((faq, index) => (
                        <FAQ key={index} faq={faq} displayId={displayId} handleToggle={handleToggle} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FAQs;