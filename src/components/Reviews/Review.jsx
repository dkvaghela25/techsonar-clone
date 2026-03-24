const Review = ({ review }) => {
    const { profilePicture, userName, role, reviewDescription } = review;
    return (
        <li className="bg-secondary-bg/10 backdrop-blur-md p-10 rounded-lg">
            <div className="text-2xl font-light leading-9.75 mb-12">"{reviewDescription}"</div>
            <div className="flex gap-5">
                <img className="" src={profilePicture} alt="" width={60} />
                <div>
                    <div className="text-[18px] font-medium">
                        — {userName}
                    </div>
                    <div className="text-sm font-light">{role}</div>
                </div>
            </div>
        </li>
    );
};

export default Review;