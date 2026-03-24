import FloatingDashboard from "./FloatingDashboard";
import Header from "../ui/Header";

const WelcomeModal = () => {
    return (
        <div className="relative h-fit">
            <div className="w-full rounded-2xl  bg-linear-to-b from-gradient-start to-gradient-end h-265">
                <Header />
                <div className="flex flex-col gap-10 items-center mt-30 mb-15 m-auto text-center w-[60%]">
                    <div className="text-6xl font-semibold leading-18.75 font-secondary">Stay online. Stay ahead. Website monitoring that just works.</div>
                    <div className="text-xl font-light leading-7 w-[70%]">Real-time uptime monitoring and instant alerts so you can fix downtime before your users notice.</div>
                    <div className="flex gap-5 font-normal">
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