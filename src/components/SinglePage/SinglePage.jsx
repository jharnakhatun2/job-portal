import React from "react"
import JobCard from "./JobCard";
import Body from "./Body";
import SingleSidebar from "./SingleSidebar";


const SinglePage = () => {
  return (
    <div className="sm:max-w-7xl mx-auto w-full px-3 xl:px-0 py-8">
      <JobCard/>
      <hr className="text-gray-200 my-2 sm:my-8 "/>
      <div>
        <Body/>
        <SingleSidebar/>
      </div>
    </div>
  )
};

export default SinglePage;
