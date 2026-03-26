import FloatingDashboard from "./FloatingDashboard";
import Header from "../ui/Header";

const WelcomeModal = () => {
    return (
        <div className="relative h-fit">
            <div className="w-full rounded-2xl  bg-linear-to-b from-gradient-start to-gradient-end h-265 max-lg:h-130 sm:max-lg:h-180">
                <Header />
                <div className="flex flex-col gap-10 items-center max-lg:gap-5 mt-30 max-lg:mt-15 mb-15 max-sm:mt-10 m-auto text-center w-[60%] sm:max-lg:w-[80%] max-sm:w-full">
                    <div className="text-6xl max-lg:text-3xl font-semibold  leading-18.75 max-lg:leading-10 font-secondary">Stay online. Stay ahead. Website monitoring that just works.</div>
                    <div className="text-xl max-sm:text-[16px] font-light leading-7 w-[70%] max-sm:w-full max-sm:px-2">Real-time uptime monitoring and instant alerts so you can fix downtime before your users notice.</div>
                    <div className="flex gap-5 font-normal max-sm:flex-col">
                        <button className="bg-primary-button-bg px-6 py-2 rounded-sm">Start Monitoring Free</button>
                        <button className="bg-secondary-button-bg text-secondary-text px-6 py-2 rounded-sm">See How It Works?</button>
                    </div>
                </div>
            </div>
            <FloatingDashboard />
        </div>
    );
};

export default WelcomeModal;