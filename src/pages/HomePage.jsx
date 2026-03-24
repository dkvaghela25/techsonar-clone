import Highlights from "../components/Highlights/Highlights";
import Reviews from "../components/Reviews/Reviews";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import WhyTechSonar from "../components/WhyTechSonar/WhyTechSonar";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-25">
       <WelcomeModal />
       <WhyTechSonar />
       <Highlights />
       <Reviews />
    </div>
  );
};

export default HomePage;