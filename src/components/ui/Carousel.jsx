import { useEffect, useState } from "react";
import Review from "../Reviews/Review";
import { FaCircle } from "react-icons/fa";
import useWindowWidth from "../../hooks/useWindowWidth";

const Carousel = ({ items }) => {
    const width = useWindowWidth();

    const totalDisplayItems = width <= 600 ? 1 : width <= 1024 ? 2 : 3;
    const totalItems = items.length;
    const [currIndex, setCurrIndex] = useState(0);
    const indicators = Math.ceil(totalItems / totalDisplayItems);

    const shiftInPercentage = currIndex * (totalDisplayItems == 1 || totalDisplayItems == 2 ? 100 : 33.33);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrIndex((prev) => (prev >= indicators - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(id);
    }, [indicators]);

    return (
        <div className="w-[90vw] max-w-full">
            <div className="flex flex-col gap-5 items-center mt-18 overflow-hidden">
                <div className="w-full">
                    <div
                        className={`flex transition-transform duration-500 ease-in-out `}
                        style={{
                            transform: `translateX(-${shiftInPercentage}%)`
                        }}
                    >
                        {items.map((item, index) => (
                            <Review key={index} review={item} totalDisplayItems={totalDisplayItems} />
                        ))}
                    </div>
                </div>

                <ul className="flex gap-2">
                    {Array.from({ length: indicators }).map((_, index) => (
                        <FaCircle
                            key={index}
                            onClick={() => setCurrIndex(index)}
                            className={`cursor-pointer text-sm max-sm:text-xs transition-colors ${currIndex === index ? "text-primary-button-bg" : "text-gray-300"
                                }`}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Carousel;
