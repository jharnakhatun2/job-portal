import React from "react"

const SinglePage = () => {
  return (
    <div className="sm:max-w-7xl mx-auto w-full px-3 xl:px-0 py-8">
      <div>
        <img src="/logo/logo1.png" alt="logo" className="border border-gray-200"/>
        <div className="py-5 text-gray-500 text-sm space-y-1 tracking-wide">
        <h4 className="text-primary text-lg font-light ">Tix Dog</h4>
        <div>
        <p>394 Edgware Road, London, W2 1ED</p>
        </div>
        <div>
        <p>Post Date: <span>July 10, 2023</span> <span>378</span></p>
        </div>
        <div>
            <div>
                <p>Applications 1</p>
            </div>
            <div>
                <p>Views <span>13102</span></p>
            </div>
        </div>
        
        </div>
      </div>
    </div>
  )
};

export default SinglePage;
