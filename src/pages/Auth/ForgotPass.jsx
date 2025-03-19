import React from "react"

const ForgotPass = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-10">
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6">
        <h2 className="text-lg font-bold text-center">Forgot Password</h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Enter your email to reset your password
        </p>

        <div className="form-control mt-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-.5a.5.5 0 0 0-.5.5v.8l4.5 2.7 4.5-2.7V4a.5.5 0 0 0-.5-.5H4ZM13 6.618l-4.4 2.64a.5.5 0 0 1-.5 0L3 6.618V12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6.618Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="email"
              placeholder="Enter your email"
              className="grow"
            />
          </label>
        </div>

        <button className="btn btn-primary w-full mt-4">Reset Password</button>
      </div>
    </div>
  )
};

export default ForgotPass;
