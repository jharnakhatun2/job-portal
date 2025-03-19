import React, { useRef, useState } from "react"
import { Link } from "react-router";

const SignIn = () => {
  const [newAccount, setNewAccount] = useState(true);

  const modalRef = useRef(null);

  // closes modal when clicked outside
  const closeModal = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      modalRef.current.close();
    }
  };

  //handle toggle form
  const handleToggleForm = () => {
    setNewAccount(pre => !pre)
  }

  return (
    <div className="w-full mx-auto px-3">
      <h1 className="text-3xl"></h1>
      <h2 className="text-sm lg:text-lg font-bold text-center uppercase">{newAccount ? 'Create an account' : 'User Login'}</h2>
      <form method="dialog" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="email@example.com"
            />
          </label>
        </div>
        {newAccount ? (
          <div className="form-control mt-4">
          <label className="label">
              <span className="label-text">Account For </span>
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 7 7A7 7 0 0 0 8 1Zm0 12.5A5.5 5.5 0 1 1 13.5 8 5.51 5.51 0 0 1 8 13.5ZM8 4a.75.75 0 0 1 .75.75V8h2.5a.75.75 0 0 1 0 1.5H8.75v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5V4.75A.75.75 0 0 1 8 4Z"
                  clipRule="evenodd"
                />
              </svg>
              <select defaultValue="Role" className="select select-primary w-full focus:outline-none border-none bg-transparent">
                <option disabled={true}>Role</option>
                <option value="Candidate">Candidate</option>
                <option value="Employee">Employee</option>
              </select>
            </label>
  
          </div>
        ) : ""}
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Enter password"
            />
          </label>
          {newAccount ? "" : (
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          )}

        </div>
        <div className="form-control mt-6">
          {newAccount ? (<button className="btn btn-primary w-full uppercase">Register</button>) : (<button className="btn btn-primary w-full uppercase">Login</button>)}

        </div>
      </form>
      <div className="divider">OR</div>
      <div className="text-center">
        {newAccount ? <p>Already have an account? <button className="text-primary underline" onClick={handleToggleForm}>Login</button></p> : <p>No account? <button className="text-primary underline" onClick={handleToggleForm}>Create An Account</button></p>}
      </div>
    </div>
  )
};

export default SignIn;
