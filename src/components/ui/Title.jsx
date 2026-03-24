const Title = ({ title }) => {
    return (
        <div className="relative w-fit">
            <h2 className="text-5xl font-semibold font-secondary">{title}</h2>
            <img className="absolute right-0 -bottom-5" width={120} src="./images/highlight.svg" alt="" />
        </div>
    );
};

export default Title;