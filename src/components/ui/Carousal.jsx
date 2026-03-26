import { useEffect, useState } from "react";
import Review from "../Reviews/Review";
import { FaCircle } from "react-icons/fa";
import useWindowWidth from "../../hooks/useWindowWidth";

const Carousal = ({ items }) => {

    const width = useWindowWidth();

    const totalDisplayItems = (() => {
        if (width <= 600) {
            return 1;
        } else if (width > 600 && width <= 1024) {
            return 2;
        } else {
            return 3;
        }
    })();

    const totalItems = items.length;
    const [displayItems, setDisplayItems] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);
    const indicators = Math.ceil(totalItems / totalDisplayItems);

    useEffect(() => {
        setDisplayItems(items.slice(currIndex, currIndex + totalDisplayItems))
    }, [currIndex, items, totalDisplayItems])

    // useEffect(() => {

    //     const id = setInterval(() => {
    //         setCurrIndex(prev => prev === indicators - 1 ? 0 : prev + 1)
    //     }, 1000)

    //     return () => clearInterval(id);

    // }, [])

    return (
        <div className="flex flex-col gap-5 items-center mt-18">
            <ul className={`w-full grid grid-cols-${totalDisplayItems} gap-15 sm:max-lg:gap-5`}>
                {displayItems.map((item, index) => (
                    <Review key={index} review={item} />
                ))}
            </ul>

            <ul className="flex gap-2">
                {Array.from({ length: indicators }).map((_, index) => (
                    <FaCircle onClick={() => setCurrIndex(index)} className={`text-sm max-sm:text-xs ${currIndex === index ? "text-primary-button-bg" : ""}`} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default Carousal;