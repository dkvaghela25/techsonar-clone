import { useState } from "react";
import { faqs } from "../../constants";
import Title from "../ui/Title";
import FAQ from "./FAQ";

const FAQs = () => {

    const [displayId, setDisplayId] = useState(false);

    const handleToggle = (queId) => {
        setDisplayId(prev => prev === queId ? false : queId)
    }

    return (
        <div className="mx-10 max-sm:mx-0 flex flex-col items-center ">

            <Title
                title="Frequently ask questions"
                description="Show users your uptime history, response times, and current status."
            />
            
            <ul className="w-full mt-20 max-sm:mt-10">
                {faqs.map((faq, index) => (
                    <FAQ key={index} faq={faq} displayId={displayId} handleToggle={handleToggle} />
                ))}
            </ul>
        </div>
    );
};

export default FAQs;