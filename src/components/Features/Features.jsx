import Title from "../ui/Title";
import { features } from "../../constants"
import Feature from "./Feature";

const Features = ({ref}) => {
    return (
        <div ref={ref} className="px-15 py-20 max-lg:px-5 max-lg:py-10 -mx-5 max-lg:mx-0 flex flex-col items-center gap-15 bg-highlights-bg">
            
            <Title
                title="Build Trust With a Status"
                description="Show users your uptime history, response times, and current status."
            />

            <ul className="flex flex-col gap-25 max-lg:gap-13">
                {features.map((highlight, index) => (
                    <Feature key={index} highlight={highlight} index={index} />
                ))}
            </ul>
        </div>
    );
};

export default Features;