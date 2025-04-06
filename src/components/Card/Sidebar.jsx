import React from "react"

const Sidebar = () => {
    return (
            <div className="space-y-2">
            <div>
            <label className="input border border-gray-200">
                <input type="search" className="grow" placeholder="Search Keywords" />
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            </label>
            </div>
            <div>
            <label className="input border border-gray-200">
                <input type="search" className="grow" placeholder="All Locations" />
            </label>
            </div>
            </div>
    )
};

export default Sidebar;
