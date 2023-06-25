import { useState } from "react";
import logo from "../../assets/logoText.png";

const Login = () => {
  const [error, setError] = useState("");

  const handleLogIn = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col ">
          <div className="lg:flex items-center">
            <h2 className="text-5xl font-bold">Welcome To </h2>
            <img className="w-52 mx-auto -mb-16 -mt-12" src={logo} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-primary">Login now!</h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-error">
                  <small>{error}</small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
