import { reasons } from "../../constants";
import Title from "../ui/Title";
import Reason from "./Reason";

const WhyTechSonar = () => {
  return (
    <div className="mx-8 max-sm:mx-0 flex flex-col items-center gap-15">
      <Title
        title="Why TechSonar?"
      />
      <ul className="grid grid-cols-4 gap-10 max-sm:gap-5 max-sm:grid-cols-1" >
        {reasons.map(reason => {
          return <Reason reason={reason} />
        })}
      </ul>
    </div>
  );
};

export default WhyTechSonar;