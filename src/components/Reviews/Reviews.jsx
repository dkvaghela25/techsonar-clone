
import { reviews } from "../../constants";
import Title from "../ui/Title";
import Carousel from "../ui/Carousel";

const Reviews = ({ref}) => {
    return (
        <div ref={ref} className="px-15 max-md:px-5 flex flex-col items-center ">
            <Title
                title="TechSonar customers"
            />
            <Carousel items={reviews} />
        </div>
    );
};

export default Reviews;