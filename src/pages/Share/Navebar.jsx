import React, { useState } from "react"
import Modal from "../Auth/Modal";
import { Link } from "react-router";
import { authApp } from "../../context/AuthProvider";
import Loader from "../../util/Loader/Loader";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {user,logOut,loading} = authApp();

    const menuList = <>
        <li><a>Item 1</a></li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><a>Item 3</a></li>
    </>

    if(loading){
        return <Loader/>
    }

    return (
        <>
            {/* SignIn form Modal */}
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <div className="bg-base-100 shadow-sm">
                <div className="navbar sm:max-w-7xl mx-auto w-full p-0">
                    <div className="navbar-start cursor-pointer">
                        <Link to='/' className="text-lg lg:text-xl xl:text-2xl font-bold"><span className="text-primary ">J</span>O<span className="text-primary ">B</span> <span className="font-light">PORTAL</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuList}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (<button className="btn btn-primary btn-sm lg:btn-md" onClick={() => logOut()}>Logout</button>):(<button className="btn btn-primary btn-sm lg:btn-md" onClick={() => setIsModalOpen(true)}>Sign In</button>)}
                        
                        {/* menu for small device */}
                        <div className="dropdown ml-1">
                            {/* menu icon for small device */}
                            <div tabIndex={0} role="button" className="btn btn-primary btn-sm lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 right-0 shadow">
                                {menuList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;
