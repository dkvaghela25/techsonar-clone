const Review = ({ review }) => {
    const { profilePicture, userName, role, reviewDescription } = review;
    return (
        <li className="bg-secondary-bg/10 backdrop-blur-md p-10 max-sm:p-6 rounded-lg">
            <div className="text-2xl max-sm:text-lg font-light leading-9.75 max-sm:leading-7.25 mb-12 max-sm:mb-6">"{reviewDescription}"</div>
            <div className="flex gap-5">
                <img className="w-15 max-sm:w-11" src={profilePicture} alt="" />
                <div>
                    <div className="text-[18px] max-sm:text-[16px] font-medium">
                        — {userName}
                    </div>
                    <div className="text-sm font-light">{role}</div>
                </div>
            </div>
        </li>
    );
};

export default Review;