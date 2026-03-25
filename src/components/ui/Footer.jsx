import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full px-10">

            <div className="w-full grid grid-cols-[2fr_1fr_1fr]">
                
                <div className="w-[80%]">
                    <img src="./images/logo.svg" alt="" />
                    <p className="mt-6 text-lg font-normal">Why Techsonar? Techsonar is one of the most popular website monitoring services in the world.</p>
                </div>

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

            <div className="text-center p-10 font-light">© 2025 TechSonar. All Rights Reserved.</div>

        </footer>
    );
};

export default Footer;