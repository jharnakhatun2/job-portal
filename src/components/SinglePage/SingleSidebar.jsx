import React from "react"

const SingleSidebar = () => {
  return (
    <div className="text-gray-600 text-sm font-inter font-light min-w-xs">
      <h2 className="uppercase font-semibold pb-4">Contact</h2>
      <div>
        <div class="relative mb-6">
          <input type="text" id="input-group-1" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5 outline-0" placeholder="EmailAddress*" />
          <div class="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SingleSidebar;
