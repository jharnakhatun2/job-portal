import React from "react"
import { Link } from "react-router";
import { BiSolidArrowToTop } from "react-icons/bi";

const BottomFooter = () => {
    return (
        <footer className="bg-neutral text-neutral-content items-center">
            <div className="footer sm:footer-horizontal max-w-7xl mx-auto justify-items-center justify-between px-3 xl:px-0 py-5 sm:py-3">

                <aside className="grid-flow-row sm:grid-flow-col items-center justify-items-center">
                <Link to='/' className="text-lg lg:text-xl xl:text-2xl font-bold"><span className="text-primary ">J</span>O<span className="text-primary ">B</span> <span className="font-light">PORTAL</span></Link>
                    <p className="text-gray-600">© {new Date().getFullYear()} - JobPortal All right reserved. Design by <span className="text-blue-500">Jharna Khatun</span></p>
                </aside>
                <div>
                    <p className="flex items-center cursor-pointer text-primary gap-1">Back to top <BiSolidArrowToTop className="border border-primary text-2xl rounded-full bg-primary text-white"/></p>
                </div>
            </div>
        </footer>
    )
};

export default BottomFooter;
