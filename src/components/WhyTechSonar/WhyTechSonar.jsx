import { reasons } from "../../constants";
import Title from "../ui/Title";
import Reason from "./Reason";
import useWindowWidth from "../../hooks/useWindowWidth";

const WhyTechSonar = ({ref}) => {

  const width = useWindowWidth();

  const gridCols = (() => {
    if (width <= 600) {
      return "grid-cols-1";
    } else if (width > 600 && width <= 1024) {
      return "grid-cols-2";
    } else {
      return "grid-cols-4";
    }
  })();

  return (
    <div ref={ref} className="mx-8 max-lg:mx-0 flex flex-col items-center gap-15">
      <Title
        title="Why TechSonar?"
      />
      <ul className={`grid ${gridCols} gap-10 max-lg:gap-5`} >
        {reasons.map((reason, index) => {
          return <Reason key={index} reason={reason} />
        })}
      </ul>
    </div>
  );
};

export default WhyTechSonar;