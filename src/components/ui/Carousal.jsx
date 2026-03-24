import { useEffect, useState } from "react";
import Review from "../Reviews/Review";
import { FaCircle } from "react-icons/fa";

const Carousal = ({ items }) => {

    const totalItems = items.length;
    const [displayItems, setDisplayItems] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);
    const indicators = Math.ceil(totalItems / 3);

    useEffect(() => {
        setDisplayItems(items.slice(currIndex, currIndex + 3))
    }, [currIndex, items])

    // useEffect(() => {

    //     const id = setInterval(() => {
    //         setCurrIndex(prev => prev === indicators - 1 ? 0 : prev + 1)
    //     }, 1000)

    //     return () => clearInterval(id);

    // }, [])

    console.log(currIndex)

    return (
        <div className="flex flex-col gap-5 items-center mt-18">
            <ul className="w-full grid grid-cols-3 gap-15">
                {displayItems.map((item, index) => (
                    <Review key={index} review={item} />
                ))}
            </ul>

            <ul className="flex gap-2">
                {Array.from({ length: indicators }).map((_, index) => (
                    <FaCircle onClick={() => setCurrIndex(index)} className={`w-3 h-3 ${currIndex === index ? "text-primary-button-bg" : ""}`} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default Carousal;