import { IoMdCheckmark } from "react-icons/io";

const Plan = ({ plan, selectedCycle }) => {

    const { name, description, prices, features, buttonText, isPopular } = plan;
    const price = prices[selectedCycle].price
    const save = prices[selectedCycle].save

    return (
        <li className={`flex flex-col gap-6 bg-secondary-bg/10 backdrop-blur-md rounded-lg p-10 transition duration-300 hover:scale-102 ${isPopular ? "scale-105 hover:scale-108 border border-secondary-border shadow-md shadow-secondary-border" : ""}`}>
            <div className="text-xl font-medium">{name}</div>
            <div className="flex items-baseline gap-4">
                <div className="text-5xl font-semibold">$ {price}</div>
                {save && <div className="text-xl">( Save ${save} )</div>}
            </div>
            <div className="font-light">{description}</div>
            <button className={`py-2 rounded-md ${isPopular ? "bg-primary-button-bg text-secondary-text" : "bg-secondary-bg text-secondary-text "}`}>{buttonText}</button>
            <div>
                <div className="text-xl font-medium">What's included: </div>
                <ul className="flex flex-col gap-2 mt-4">
                    {features.map((features, index) => (
                        <li className="font-light flex items-center gap-2" key={index}>
                            <IoMdCheckmark className="text-xl text-primary-button-bg" />
                            <span>{features}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

export default Plan;