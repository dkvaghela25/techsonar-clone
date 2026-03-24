import Title from "../ui/Title";
import { highlights } from "../../constants"
import Highlight from "./Highlight";

const Highlights = () => {
    return (
        <div className="px-15 py-20 -mx-5 flex flex-col items-center gap-15 bg-highlights-bg">
            <div className="flex flex-col gap-8">
                <Title title="Build Trust With a Status" />
                <div className="text-lg font-light">Show users your uptime history, response times, and current status.</div>
            </div>

            <ul className="flex flex-col gap-25">
                {highlights.map((highlight, index) => (
                    <Highlight key={index} highlight={highlight} index={index} />
                ))}
            </ul>
        </div>
    );
};

export default Highlights;