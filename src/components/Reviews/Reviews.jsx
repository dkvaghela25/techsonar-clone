
import { reviews } from "../../constants";
import Title from "../ui/Title";
import Carousal from "../ui/Carousal";

const Reviews = () => {
    return (
        <div className="mx-10 flex flex-col items-center ">
            <Title
                title="TechSonar customers"
            />
            <Carousal items={reviews} />
        </div>
    );
};

export default Reviews;