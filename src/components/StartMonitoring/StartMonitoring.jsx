import Title from "../ui/Title";

const StartMonitoring = () => {
    return (
        <div className="mx-10 flex flex-col gap-10 items-center py-30">
            <Title
                title="Start monitoring your website in 30 seconds"
                description="Join 5,000+ users keeping their websites online with TechSonar."
            />

            <button className="py-2 px-6 rounded-md bg-primary-button-bg text-secondary-text text-lg">Start Free Monitoring</button>

            <div className="flex items-center gap-5 text-xl">
                <img src="./images/img_group_512717.svg" alt="" />
                <div>No credit card required. Cancel anytime.</div>
            </div>
        </div>
    );
};

export default StartMonitoring;