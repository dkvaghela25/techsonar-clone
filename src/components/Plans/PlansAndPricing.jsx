import { useState } from "react";
import { billingCycles, plans } from "../../constants";
import Title from "../ui/Title";
import Plan from "./Plan";

const PlansAndPricing = () => {
    const [selectedCycle, setSelectedCycle] = useState(billingCycles[0])

    return (
        <div className="mx-10 max-lg:mx-0 flex flex-col gap-10 items-center">
            <Title
                title="Plans & pricing"
                description="Straightforward, Fair Pricing"
            />

            <ul className="flex p-1.5 bg-secondary-bg/10 backdrop-blur-md rounded-xl">
                {billingCycles.map(cycle => (
                    <li
                        className={`px-6 py-2 text-sm capitalize cursor-default transition-colors duration-300 flex items-center rounded-lg ${selectedCycle === cycle ? "bg-primary-button-bg text-secondary-text font-medium" : ""}`}
                        key={cycle}
                        onClick={() => setSelectedCycle(cycle)}
                    >{cycle}</li>
                ))}
            </ul>

            <ul className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 w-[90%]">
                {plans.map(plan => (
                    <Plan plan={plan} selectedCycle={selectedCycle} />
                ))}
            </ul>
        </div>
    );
};

export default PlansAndPricing;