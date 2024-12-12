import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign Up</h1>
      <input className="form-control mb-2" placeholder="username" />
      <input className="form-control mb-2" placeholder="password" type="password" />
      <input className="form-control mb-2" placeholder="verify password" type="password" />
      <Link to="/Kanbas/Account/Profile" className="btn btn-primary border border-white"> Sign up </Link>
      <Link to="/Kanbas/Account/Signin" className="btn btn-primary border border-white" > Sign in </Link>
    </div>
  );
}
