
import { reviews } from "../../constants";
import Title from "../ui/Title";
import Carousal from "../ui/Carousal";

const Reviews = ({ref}) => {
    return (
        <div ref={ref} className="mx-10 max-lg:mx-0 flex flex-col items-center ">
            <Title
                title="TechSonar customers"
            />
            <Carousal items={reviews} />
        </div>
    );
};

export default Reviews;