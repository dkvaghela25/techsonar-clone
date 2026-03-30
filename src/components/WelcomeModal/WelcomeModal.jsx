import FloatingDashboard from "./FloatingDashboard";
import Header from "../ui/Header";
import FadeAnimation from "../ui/FadeAnimation";
import useWindowWidth from "../../hooks/useWindowWidth";

const WelcomeModal = ({ ref, references }) => {

    const width = useWindowWidth();

    return (
        <div ref={ref} className="relative w-full h-fit ">
            <div className={`${width > 1600 ? "w-screen -mx-120 px-10" : ""}`}>
                <div className="bg-linear-to-b from-gradient-start to-gradient-end w-full rounded-2xl h-265 max-md:h-130 md:max-lg:h-160 lg:max-xl:h-230 max-lg:px-1.5">
                    <Header references={references} />
                    <FadeAnimation axes="Up">
                        <div className=" flex flex-col gap-10 items-center max-lg:gap-5 mt-30 max-xl:mt-15 mb-15 max-sm:mt-10 m-auto text-center w-[60%] sm:max-lg:w-[80%] max-sm:w-full">
                            <div className="text-6xl md:max-xl:text-4xl max-md:text-2xl font-semibold leading-18.75 max-lg:leading-10 lg:max-xl:leading-12 font-secondary">Stay online. Stay ahead. Website monitoring that just works.</div>
                            <div className="text-xl md:max-lg:text-lg max-md:text-[16px] font-light leading-7 w-[70%] max-sm:w-full max-sm:px-2">Real-time uptime monitoring and instant alerts so you can fix downtime before your users notice.</div>
                            <div className="flex gap-5 font-normal max-sm:flex-col">
                                <button className="bg-primary-button-bg px-10 py-3 max-xl:px-5 max-xl:py-1.5 rounded-sm max-xl:w-fit">Start Monitoring Free</button>
                                <button className="bg-secondary-button-bg text-secondary-text px-6 py-2 rounded-sm">See How It Works?</button>
                            </div>
                        </div>
                    </FadeAnimation>
                </div>
            </div>
            <FloatingDashboard />
        </div>
    );
};

export default WelcomeModal;