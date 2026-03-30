import Title from "../ui/Title";
import { features } from "../../constants"
import Feature from "./Feature";
import useWindowWidth from "../../hooks/useWindowWidth";

const Features = ({ ref }) => {
    const width = useWindowWidth();
    return (
        <div ref={ref} className={`px-15 py-20 max-lg:px-5 max-lg:py-10 -mx-5 max-md:-mx-3 flex flex-col items-center gap-15 bg-highlights-bg ${width > 1600 ? "w-screen -mx-120" : ""}`}>
            <div className="max-w-400">
                <Title
                    title="Build Trust With a Status"
                    description="Show users your uptime history, response times, and current status."
                />

                <ul className="flex flex-col gap-20 max-lg:gap-13 mt-10">
                    {features.map((highlight, index) => (
                        <Feature key={index} highlight={highlight} index={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Features;