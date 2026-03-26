import { FaCircle, FaPlus } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { PiUploadSimple } from "react-icons/pi";
import { IoLockClosed } from "react-icons/io5";

const FloatingDashboard = () => {
    return (
        <div className="sm:relative -top-112.5 -mb-112.5 max-sm:mb-0  max-sm:mx-0 sm:max-lg:-top-65 sm:max-lg:-mb-65 max-sm:my-4 m-9 rounded-lg overflow-hidden">
            <div className="bg-primary-bg flex justify-between px-6 py-3 max-sm:px-3 max-sm:py-1.5 items-center">
                <div className="flex gap-2 max-sm:gap-1">
                    <FaCircle className="text-ios-close max-sm:text-xs" />
                    <FaCircle className="text-ios-minimize max-sm:text-xs" />
                    <FaCircle className="text-ios-zoom max-sm:text-xs" />
                </div>
                <div className="flex items-center gap-2 font-semibold mx-5 rounded-sm text-sm py-1 bg-primary-bg-500 w-full justify-center">
                    <IoLockClosed className="w-3 h-3" />
                    <span>techsonar.io</span>
                </div>
                <div className="flex items-center gap-3 max-sm:gap-1.5">
                    <PiUploadSimple className="text-xs" />
                    <FaPlus className="text-xs" />
                    <IoIosCopy className="text-xs" />
                </div>
            </div>
            <img src="./images/dashboard.png" alt="" />
        </div>
    );
};

export default FloatingDashboard;