import React from "react"
import Collapse from "./Collapse";

  
const Sidebar = () => {
    return (
        <div className="space-y-2 text-zinc-500">
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
                <h1 className="text-sm tracking-wide font-bold text-zinc-600">DATE POSTED</h1>
                <div className="text-[13px]">
                    <label className="font-semibold cursor-pointer">
                        <input type="radio" name="radio-2" className="radio radio-xs mr-2 my-2" />Last Hour
                    </label><br />
                    <label className="font-semibold cursor-pointer">
                        <input type="radio" name="radio-2" className="radio radio-xs mr-2 my-2" />Last 24 hours
                    </label><br />
                    <label className="font-semibold cursor-pointer">
                        <input type="radio" name="radio-2" className="radio radio-xs mr-2 my-2" />Last 7 days
                    </label><br />
                    <label className="font-semibold cursor-pointer">
                        <input type="radio" name="radio-2" className="radio radio-xs mr-2 my-2" />Last 14 days
                    </label><br />
                    <label className="font-semibold cursor-pointer">
                        <input type="radio" name="radio-2" className="radio radio-xs mr-2 my-2" />Last 30 days
                    </label><br />
                    <label className="text-[13px] font-semibold cursor-pointer">
                        <input type="radio" name="radio-2" className="radio radio-xs mr-2 my-2" defaultChecked/>All
                    </label><br />
                </div>
            </div>
            {/* Vacancy Type */}
            <div className="space-y-3 border border-gray-200 p-3 rounded">
                <h1 className="text-sm tracking-wide font-bold uppercase text-zinc-600">Vacancy Type</h1>
                <div className="flex items-center gap-2 justify-between cursor-pointer ">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500"></div>
                        <span className="text-[13px] font-semibold">Freelance</span>
                    </div>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-700"></div>
                        <span className="text-[13px] font-semibold">Full Time</span>
                    </div>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500"></div>
                        <span className="text-[13px] font-semibold">Internship</span>
                    </div>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-700"></div>
                        <span className="text-[13px] font-semibold">Part Time</span>
                    </div>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-violet-500"></div>
                        <span className="text-[13px] font-semibold">Remote</span>
                    </div>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-violet-700"></div>
                        <span className="text-[13px] font-semibold">Temporary</span>
                    </div>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-800"></div>
                        <span className="text-[13px] font-semibold">Volunteer</span>
                    </div>
                    <p>(0)</p>
                </div>
            </div>
            {/* Specialisms */}
            <div className="space-y-3 border border-gray-200 p-3 rounded">
                <h1 className="text-sm tracking-wide font-bold uppercase text-zinc-600">Specialisms</h1>
                <div className="flex items-center gap-2 justify-between cursor-pointer ">
                    <label className="fieldset-label">
                        <input type="checkbox" defaultChecked />
                        <span className="text-[13px] font-semibold">Accountancy</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">Banking</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">Charity & Voluntary</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">Digital & Creative</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">Estate Agency</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">Graduate</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">IT Contractor</span>
                    </label>
                    <p>(0)</p>
                </div>
                <div className="flex items-center gap-2 justify-between cursor-pointer">
                    <label className="fieldset-label">
                        <input type="checkbox" />
                        <span className="text-[13px] font-semibold">More</span>
                    </label>
                </div>
            </div>
            {/* Group collapse */}
            <Collapse/>
        </div>
    )
};

export default Sidebar;
