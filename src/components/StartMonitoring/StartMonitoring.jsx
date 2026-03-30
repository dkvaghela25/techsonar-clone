import Title from "../ui/Title";

const StartMonitoring = ({ ref }) => {
    return (
        <div ref={ref} className="mx-10 max-lg:mx-0 flex flex-col gap-10 items-center pb-30 max-lg:pb-15">
            <Title
                title="Start monitoring your website in 30 seconds"
                description="Join 5,000+ users keeping their websites online with TechSonar."
            />

            <button className="py-2 px-6 rounded-md bg-primary-button-bg text-secondary-text text-lg">Start Free Monitoring</button>

            <div className="flex items-center gap-5 max-lg:gap-3 text-xl max-lg:text-[16px]">
                <img src="./images/favicon.svg" alt="" />
                <div className="">No credit card required. Cancel anytime.</div>
            </div>
        </div>
    );
};

export default StartMonitoring;