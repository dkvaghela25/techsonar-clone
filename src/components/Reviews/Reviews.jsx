
import { reviews } from "../../constants";
import Title from "../ui/Title";
import Carousel from "../ui/Carousel";

const Reviews = ({ref}) => {
    return (
        <div ref={ref} className="  mx-auto max-lg:mx-0 flex flex-col items-center ">
            <Title
                title="TechSonar customers"
            />
            <Carousel items={reviews} />
        </div>
    );
};

export default Reviews;