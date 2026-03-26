const Reason = ({ reason }) => {
    const { imgUrl, title, description } = reason;

    return (
        <li className="bg-secondary-bg/10 backdrop-blur-md p-10 max-lg:p-5 text-center rounded-lg transition delay-3 hover:scale-105 ">
            <img className="m-auto mb-10 max-lg:mb-5" src={imgUrl} alt="" width={60} />
            <div className="text-[20px] leading-8.25 font-bold">{title}</div>
            <div className="font-light leading-8.25">{description}</div>
        </li>
    );
};

export default Reason;