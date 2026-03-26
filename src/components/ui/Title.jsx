const Title = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center gap-8 text-center">
            <div className="relative w-fit">
                <h2 className="text-5xl font-semibold max-lg:text-3xl font-secondary">{title}</h2>
                <img className="absolute right-0 -bottom-5" width={120} src="./images/highlight.svg" alt="" />
            </div>
            {description && <div className="text-lg font-light">{description}</div>}
        </div>
    );
};

export default Title;