import React from "react"
import { Link } from "react-router";
import { BiSolidArrowToTop } from "react-icons/bi";

const BottomFooter = () => {
    return (
        <footer className="bg-neutral text-neutral-content items-center p-4 ">
            <div className="footer sm:footer-horizontal max-w-7xl mx-auto justify-items-center justify-between">

                <aside className="grid-flow-row sm:grid-flow-col items-center justify-items-center">
                <Link to='/' className="text-lg lg:text-xl xl:text-2xl font-bold"><span className="text-primary ">J</span>O<span className="text-primary ">B</span> <span className="font-light">PORTAL</span></Link>
                    <p className="text-gray-600 pl-15">© {new Date().getFullYear()} - JobPortal All right reserved. Design by <span className="text-blue-500">Jharna Khatun</span></p>
                </aside>
                <div>
                    <p className="flex items-center gap-3 cursor-pointer text-primary">Back to top <BiSolidArrowToTop className="border border-primary text-2xl rounded-full p-1 bg-primary text-white"/></p>
                </div>
            </div>
        </footer>
    )
};

export default BottomFooter;
