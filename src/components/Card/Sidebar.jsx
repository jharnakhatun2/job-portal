import React from "react"

const Sidebar = () => {
    return (
        <div className="space-y-2">
            {/* Search Bar */}
            <div>
                <label className="input border border-gray-200 w-full">
                    <input type="search" className="grow" placeholder="Search Keywords" />
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                </label>
            </div>
            {/* location Bar */}
            <div>
                <label className="input border border-gray-200 w-full">
                    <input type="search" className="grow" placeholder="All Locations" />
                </label>
            </div>
            {/* Date Post */}
            <div className="space-y-3 border border-gray-200 p-3 rounded">
                <h1 className="text-sm tracking-wide font-bold">DATE POSTED</h1>
                <div className="flex items-center gap-2">
                    <input type="radio" name="radio-2" className="radio radio-xs" defaultChecked />
                    <span className="text-xs font-bold">Last Hour</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="radio-2" className="radio radio-xs" defaultChecked />
                    <span className="text-xs font-bold">Last 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="radio-2" className="radio radio-xs" defaultChecked />
                    <span className="text-xs font-bold">Last 7 days</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="radio-2" className="radio radio-xs" defaultChecked />
                    <span className="text-xs font-bold">Last 14 days</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="radio-2" className="radio radio-xs" defaultChecked />
                    <span className="text-xs font-bold">Last 30 days</span>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" name="radio-2" className="radio radio-xs" defaultChecked />
                    <span className="text-xs font-bold">All</span>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
