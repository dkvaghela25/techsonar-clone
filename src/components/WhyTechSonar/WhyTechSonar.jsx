import { reasons } from "../../constants";
import Title from "../ui/Title";
import Reason from "./Reason";

const WhyTechSonar = () => {

  const gridCols = (() => {
    if (window.innerWidth <= 450) {
      return "grid-cols-1";
    } else if (window.innerWidth > 450 && window.innerWidth <= 1024) {
      return "grid-cols-2";
    } else {
      return "grid-cols-4";
    }
  })();

  console.log(gridCols)

  return (
    <div className="mx-8 max-lg:mx-0 flex flex-col items-center gap-15">
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