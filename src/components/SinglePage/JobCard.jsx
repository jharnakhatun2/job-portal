import React from "react"
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const JobCard = () => {
    return (
        <div className="sm:flex gap-5">
            <img src="/logo/logo1.png" alt="logo" className="border border-gray-200 sm:w-28" />
            <div className="py-5 sm:py-0 text-gray-500 text-sm space-y-2 tracking-wide">
                <h4 className="text-primary text-lg font-light ">Tix Dog</h4>
                <div className="flex items-center gap-2">
                    <FaLocationDot className="bg-gray-300 text-white w-4 h-4 p-[2px] rounded-full" />
                    <p className="text-gray-400">394 Edgware Road, London, W2 1ED</p>
                </div>
                <div className="lg:flex gap-5 space-y-2">
                    <div className="flex items-center gap-2">
                        <MdDateRange className="bg-gray-300 text-white w-4 h-4 p-[2px] rounded-full" />
                        <p>Post Date: <span className="font-bold pr-5">July 10, 2023</span> <span>378</span></p>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <IoIosDocument className="bg-gray-300 text-white w-4 h-4 p-[2px] rounded-full" />
                            <p>Applications : <span className="font-bold">1</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEye className="bg-gray-300 text-white w-4 h-4 p-[2px] rounded-full" />
                            <p>Views : <span className="font-bold ">13102</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobCard;
