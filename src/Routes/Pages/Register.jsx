import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl py-5">
              Register Your Account
            </h2>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Your Name</label>
              <input
                type="email"
                className="input"
                name="name"
                placeholder="User Name"
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input type="email" className="input" placeholder="Input URL" />
              {/* email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Submit</button>
              <p className="text-center font-semibold py-3">
                Already Have a Account ?
                <Link to="/auth/login">
                  {" "}
                  <span className="text-secondary text-bold underline">
                    LogIn
                  </span>
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
