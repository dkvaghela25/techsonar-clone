const Reason = ({ reason }) => {
    const { imgUrl, title, description } = reason;

    return (
        <li className="bg-secondary-bg/10 backdrop-blur-md p-10 max-sm:p-5 text-center rounded-lg transition delay-3 hover:scale-105 relative overflow-hidden leading-8.25 max-lg:leading-relaxed">
            <img className="m-auto mb-10 max-lg:mb-5 w-15 max-lg:w-12" src={imgUrl} alt=""/>
            <div className="text-[20px] max-md:text-[16px] font-bold">{title}</div>
            <div className="font-light">{description}</div>

            <div className="absolute bottom-0 right-0 w-32 h-24 bg-primary-button-bg/60 rounded-full blur-3xl"></div>
        </li>
    );
};

export default Reason;