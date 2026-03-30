import { IoMdCheckmark } from "react-icons/io";

const Plan = ({ plan, selectedCycle }) => {

    const { name, description, prices, features, buttonText, isPopular } = plan;
    const price = prices[selectedCycle].price
    const save = prices[selectedCycle].save

    return (
        <li className={`flex flex-col gap-6 max-lg:gap-3 bg-secondary-bg/10 backdrop-blur-md rounded-lg p-10 max-lg:p-5 lg:max-xl:p-8 transition duration-300 hover:scale-102 relative overflow-hidden ${isPopular ? "scale-105 hover:scale-108 border border-secondary-border shadow-md shadow-secondary-border" : ""}`}>
            <div className="flex items-baseline justify-between gap-4 max-lg:gap-1 font-medium">
                <div className="text-xl max-lg:text-lg">{name}</div>
                {isPopular && <div className="px-4 py-1 rounded-full border border-secondary-border text-lg text-primary-button-bg max-lg:text-sm">Popular</div>}
            </div>
            <div className="flex items-baseline gap-4 max-lg:gap-1">
                <div className="text-5xl font-semibold max-lg:text-4xl">$ {price}</div>
                {save && <div className="text-xl max-lg:text-lg">( Save ${save} )</div>}
            </div>
            <div className="font-light">{description}</div>
            <button className={`py-2 rounded-md ${isPopular ? "bg-primary-button-bg text-secondary-text" : "bg-secondary-bg text-secondary-text "}`}>{buttonText}</button>
            <div>
                <div className="text-xl max-lg:text-lg font-medium">What's included: </div>
                <ul className="grid grid-cols-1 md:max-lg:grid-cols-2 gap-2 max-lg:gap-0.5 mt-4">
                    {features.map((features, index) => (
                        <li className="font-light flex items-center gap-2" key={index}>
                            <IoMdCheckmark className="text-xl text-primary-button-bg" />
                            <span>{features}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div class="absolute bottom-0 right-0 w-32 h-24 bg-primary-button-bg/60 rounded-full blur-3xl"></div>
        </li>
    );
};

export default Plan;