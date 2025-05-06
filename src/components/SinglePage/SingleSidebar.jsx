import React from "react"

const SingleSidebar = () => {
  return (
    <div className="text-gray-600 text-sm font-inter font-light min-w-xs">
      <h2 className="uppercase font-semibold pb-4">Contact</h2>
      <form >   
        {/* Name field  */}
        <div className="relative mb-3">
          <input type="text" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5 outline-0" placeholder="Enter Your Name*" />
          <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="currentColor"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        {/* Email Field */}
        <div className="relative mb-6">
          <input type="email" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5 outline-0" placeholder="Email Address*" />
          <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-3 h-3 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
        </div>
        {/* phone Field */}
        <div className="relative mb-6">
          <input type="text" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5 outline-0" placeholder="Phone Number*" />
          <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 2C6.34315 2 5 3.34315 5 5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V5C19 3.34315 17.6569 2 16 2H8ZM7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V5ZM10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H10Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </form>
    </div>
  )
};

export default SingleSidebar;
