import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="relative w-full">

            <footer className="max-w-400 mx-auto px-15 max-md:px-5 w-full">
                <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-5">

                    <div className="w-[80%] max-lg:w-full">
                        <img src="./images/logo.svg" alt="" />
                        <p className="mt-6 text-lg font-normal">Why Techsonar? Techsonar is one of the most popular website monitoring services in the world.</p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-5">
                        <div>
                            <div className="text-lg font-bold">Links</div>
                            <div className="flex flex-col gap-2 mt-4 font-light">
                                <Link to="/">Why TechSonar</Link>
                                <Link to="/">Faq</Link>
                                <Link to="/">Pricing</Link>
                                <Link to="/">Contact</Link>
                                <Link to="/">Features</Link>
                            </div>
                        </div>

                        <div>
                            <div className="text-lg font-bold">Resources</div>
                            <div className="flex flex-col gap-2 mt-4 font-light">
                                <Link to="/">API Docs</Link>
                                <Link to="/">Webhook Setup</Link>
                                <Link to="/">Blog</Link>
                                <Link to="/">Uptime Tools</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text-center p-10 font-light max-lg:p-0 max-lg:py-10">© 2025 TechSonar. All Rights Reserved.</div>
            </footer>

            <div className="w-full">
                <img className="-ml-15 absolute bottom-0 left-0" src="./images/shadows/image-shadow1footer.svg" alt="" />
                <img className="absolute bottom-0 right-0" src="./images/shadows/image-shadow2footer.svg" alt="" />
            </div>
        </div>
    );
};

export default Footer;