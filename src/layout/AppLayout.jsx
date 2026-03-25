import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";

const AppLayout = () => {
    return (
        <div className="w-full flex flex-col items-center bg-primary-bg text-primary-text p-5 max-sm:p-3 min-h-screen font-primary">
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppLayout;