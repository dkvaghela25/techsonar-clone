const Review = ({ review }) => {
    const { profilePicture, userName, role, reviewDescription } = review;
    return (
        <div className="relative shrink-0 px-4 w-[33.33%] min-w-[33.33%] sm:max-xl:w-[50%] sm:max-xl:min-w-[50%] max-sm:w-full max-sm:min-w-full">
            <div className="bg-secondary-bg/10 backdrop-blur-md p-10 max-lg:p-6 rounded-lg overflow-hidden">
                <div className="text-2xl max-lg:text-lg font-light leading-9.75 max-lg:leading-7.25 mb-12 max-lg:mb-6">"{reviewDescription}"</div>
                <div className="flex gap-5">
                    <img className="w-15 max-lg:w-11" src={profilePicture} alt="" />
                    <div>
                        <div className="text-[18px] max-lg:text-[16px] font-medium">
                            — {userName}
                        </div>
                        <div className="text-sm font-light">{role}</div>
                    </div>
                </div>

                <div class="absolute bottom-0 right-0 w-32 h-24 bg-primary-button-bg/60 rounded-full blur-3xl"></div>
            </div>

        </div>
    );
};

export default Review;