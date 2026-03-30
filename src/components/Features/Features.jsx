import Title from "../ui/Title";
import { features } from "../../constants"
import Feature from "./Feature";

const Features = ({ ref }) => {
    return (
        <div ref={ref} className={`w-full px-15 py-20 max-lg:py-10 max-md:px-5 bg-highlights-bg`}>
            <div className="max-w-400 mx-auto flex flex-col items-center gap-15">
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