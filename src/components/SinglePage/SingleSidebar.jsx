import React from "react"

const SingleSidebar = () => {
  return (
    <div className="text-gray-600 text-sm font-inter font-light min-w-xs">
      <h2 className="uppercase font-semibold pb-4">Contact</h2>
      <form >    
        <div className="relative mb-3">
          <input type="text" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5 outline-0" placeholder="Enter Your Name*" />
          <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="currentColor"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <div class="relative mb-6">
          <input type="text" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5 outline-0" placeholder="Email Address*" />
          <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-3 h-3 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
        </div>
      </form>
    </div>
  )
};

export default SingleSidebar;
