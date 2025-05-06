import React from 'react';
import { Link } from 'react-router';

const LogIn = () => {
    return (
      <div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-2xl py-5">
              LogIn Your Account
            </h2>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="text-center font-semibold py-3">
                Dont’t Have An Account ?
                <Link to="/auth/register">
                  {" "}
                  <span className="text-secondary text-bold underline">
                    Register
                  </span>
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    );
};

export default LogIn;