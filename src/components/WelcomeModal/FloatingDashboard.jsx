import { FaCircle, FaPlus } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { PiUploadSimple } from "react-icons/pi";
import { IoLockClosed } from "react-icons/io5";

const FloatingDashboard = () => {
    return (
        <div className="relative -top-112.5 -mb-112.5 m-9 rounded-lg overflow-hidden">
            <div className="bg-primary-bg flex justify-between px-6 py-3 items-center">
                <div className="flex gap-2">
                    <FaCircle className="text-ios-close w-3.5 h-3.5" />
                    <FaCircle className="text-ios-minimize w-3.5 h-3.5" />
                    <FaCircle className="text-ios-zoom w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-2 font-semibold mx-5 rounded-sm text-sm py-1 bg-primary-bg-500 w-full justify-center">
                    <IoLockClosed className="w-3 h-3" />
                    <span>techsonar.io</span>
                </div>
                <div className="flex items-center gap-3">
                    <PiUploadSimple className="w-4 h-4" />
                    <FaPlus className="w-4 h-4" />
                    <IoIosCopy className="w-4 h-4" />
                </div>
            </div>
            <img src="./images/dashboard.png" alt="" />
        </div>
    );
};

export default FloatingDashboard;