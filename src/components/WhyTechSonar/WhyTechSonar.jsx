import { reasons } from "../../constants";
import Title from "../ui/Title";
import Reason from "./Reason";

const WhyTechSonar = () => {
  return (
    <div className="mx-8 flex flex-col items-center gap-15">
      <Title title="Why TechSonar?" />
      <ul className="grid grid-cols-4 gap-10" >
        {reasons.map(reason => {
          return <Reason reason={reason} />
        })}
      </ul>
    </div>
  );
};

export default WhyTechSonar;