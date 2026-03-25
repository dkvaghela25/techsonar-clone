import FAQs from "../components/FAQs/FAQs";
import Highlights from "../components/Highlights/Highlights";
import PlansAndPricing from "../components/Plans/PlansAndPricing";
import Reviews from "../components/Reviews/Reviews";
import StartMonitoring from "../components/StartMonitoring/StartMonitoring";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import WhyTechSonar from "../components/WhyTechSonar/WhyTechSonar";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-25 max-sm:gap-10">
       <WelcomeModal />
       <WhyTechSonar />
       <Highlights />
       <Reviews />
       <FAQs />
       <PlansAndPricing />
       <StartMonitoring />
    </div>
  );
};

export default HomePage;