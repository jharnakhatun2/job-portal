import React, { useRef, useState } from "react"
import { Link } from "react-router";

const SignIn = ({setIsModalOpen}) => {
  const [newAccount, setNewAccount] = useState(false);

 
  //handle toggle form
  const handleToggleForm = () => {
    setNewAccount(pre => !pre)
  }

  // handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const role = form.role.value;
    const password = form.password.value;
    console.log(email, role, password)
  }

  return (
    <div className="w-full mx-auto px-3">
      <h1 className="text-3xl"></h1>
      <h2 className="text-sm lg:text-lg font-bold text-center uppercase">{newAccount ? 'Create an account' : 'User Login'}</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Email input field */}
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
              name="email"
              className="grow"
              placeholder="email@example.com"
            />
          </label>
        </div>
        {/* Role input field */}
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
              <select defaultValue="Role" name="role" className="select select-primary w-full focus:outline-none border-none bg-transparent">
                <option disabled={true}>Role</option>
                <option value="Candidate">Candidate</option>
                <option value="Employee">Employee</option>
              </select>
            </label>
  
          </div>
        ) : ""}
        {/* Password input field */}
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
              name="password"
              className="grow"
              placeholder="Enter password"
            />
          </label>
          {/* forget password */}
          {newAccount ? "" : (
            <label className="label" >
              <Link to="/forgot-pass" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          )}

        </div>
        {/* submit button */}
        <div className="form-control mt-6" onClick={() => setIsModalOpen(false)}>
          {newAccount ? (<button className="btn btn-primary w-full uppercase">Register</button>) : (<button className="btn btn-primary w-full uppercase">Login</button>)}

        </div>
      </form>
      <div className="divider">OR</div>
      <div className="text-center text-gray-500">
        {newAccount ? <p>Already have an account? <button className="text-primary underline cursor-pointer" onClick={handleToggleForm}>Login</button></p> : <p>No account? <button className="text-primary underline cursor-pointer" onClick={handleToggleForm}>Create An Account</button></p>}
      </div>
    </div>
  )
};

export default SignIn;
