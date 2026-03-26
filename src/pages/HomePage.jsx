import FAQs from "../components/FAQs/FAQs";
import Highlights from "../components/Highlights/Highlights";
import PlansAndPricing from "../components/Plans/PlansAndPricing";
import Reviews from "../components/Reviews/Reviews";
import StartMonitoring from "../components/StartMonitoring/StartMonitoring";
import FadeAnimation from "../components/ui/FadeAnimation";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import WhyTechSonar from "../components/WhyTechSonar/WhyTechSonar";

const HomePage = () => {

  const HomePageComponents = [<WelcomeModal />, <WhyTechSonar />, <Highlights />, <Reviews />, <FAQs />, <PlansAndPricing />, <StartMonitoring />]

  return (
    <div className="flex flex-col gap-25 max-lg:gap-10">
      {HomePageComponents.map(component => (
        <FadeAnimation axes="Up" >
          {component}
        </FadeAnimation>
      ))}
    </div>
  );
};

export default HomePage;