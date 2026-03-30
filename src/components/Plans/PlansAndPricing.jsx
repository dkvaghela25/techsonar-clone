import { useState } from "react";
import { billingCycles, plans } from "../../constants";
import Title from "../ui/Title";
import Plan from "./Plan";
import useWindowWidth from "../../hooks/useWindowWidth";

const PlansAndPricing = ({ ref }) => {
    const [selectedCycle, setSelectedCycle] = useState(billingCycles[0])
    const width = useWindowWidth();

    return (
        <div className={`relative ${ width > 1600 ? "w-screen -mx-120" : ""}`}>
            <div ref={ref} className="max-w-400  mx-auto lg:max-xl:px-5 max-lg:px-0 flex flex-col gap-10 items-center">
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

            <ul className="grid grid-cols-3 max-lg:grid-cols-1 gap-10 w-[90%] lg:max-xl:w-full lg:max-xl:gap-8">
                {plans.map(plan => (
                    <Plan plan={plan} selectedCycle={selectedCycle} />
                ))}
            </ul>

            <div className="-z-10 w-full">
                <img className="absolute -ml-5 top-0 left-0 " src="./images/shadows/image-shadow1pricing.png" alt="" />
                <img className="absolute -mr-5 bottom-0 right-0" src="./images/shadows/image-shadow2pricing.svg" alt="" />
            </div>
        </div>
        </div>
    );
};

export default PlansAndPricing;