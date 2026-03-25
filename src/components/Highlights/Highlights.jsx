import Title from "../ui/Title";
import { highlights } from "../../constants"
import Highlight from "./Highlight";

const Highlights = () => {
    return (
        <div className="px-15 py-20 -mx-5 flex flex-col items-center gap-15 bg-highlights-bg">
            
            <Title
                title="Build Trust With a Status"
                description="Show users your uptime history, response times, and current status."
            />

            <ul className="flex flex-col gap-25">
                {highlights.map((highlight, index) => (
                    <Highlight key={index} highlight={highlight} index={index} />
                ))}
            </ul>
        </div>
    );
};

export default Highlights;