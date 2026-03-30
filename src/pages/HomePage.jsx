import { useRef } from "react";
import FAQs from "../components/FAQs/FAQs";
import Highlights from "../components/Features/Features";
import PlansAndPricing from "../components/Plans/PlansAndPricing";
import Reviews from "../components/Reviews/Reviews";
import StartMonitoring from "../components/StartMonitoring/StartMonitoring";
import FadeAnimation from "../components/ui/FadeAnimation";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import WhyTechSonar from "../components/WhyTechSonar/WhyTechSonar";

const HomePage = () => {

  const welcomeModalRef = useRef(null)
  const whyTechSonarRef = useRef(null)
  const featuresRef = useRef(null)
  const reviewsRef = useRef(null)
  const faqsRef = useRef(null)
  const plansAndPricingRef = useRef(null)
  const startMonitoringRef = useRef(null)

  const references = {
    // "Welcome" :welcomeModalRef,
    "Why TechSonar": whyTechSonarRef,
    "Features": featuresRef,
    "FAQ": faqsRef,
    "Pricing": plansAndPricingRef,
    "Contact": startMonitoringRef,
  }

  const HomePageComponents = [
    <WhyTechSonar ref={whyTechSonarRef} />,
    <Highlights ref={featuresRef} />,
    <Reviews ref={reviewsRef} />,
    <FAQs ref={faqsRef} />,
    <PlansAndPricing ref={plansAndPricingRef} />,
    <StartMonitoring ref={startMonitoringRef} />
  ]

  return (
    <div className="w-full flex flex-col gap-25 max-lg:gap-10">
      <WelcomeModal ref={welcomeModalRef} references={references} />
      {HomePageComponents.map((component, index) => (
        <FadeAnimation key={index} axes="Up" >
          {component}
        </FadeAnimation>
      ))}
    </div>
  );
};

export default HomePage;