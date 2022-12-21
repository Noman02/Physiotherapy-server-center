import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const menuItems = (
    <>
      <button className="btn btn-outline mr-2 mb-2">
        <Link to="/">Home</Link>
      </button>
      <button className="btn btn-outline mr-2 mb-2">
        <Link to="/services">Services</Link>
      </button>

      <button className="btn btn-outline mr-2 ">
        <Link to="/blog">Blog</Link>
      </button>
      <Link to="/myReviews">
        <button className="btn btn-ghost border-b-2 border-cyan-600 hover:text-cyan-600 mr-3 mb-2">
          My Reviews
        </button>
      </Link>
      <Link to="/addService">
        <button className="btn btn-ghost border-b-2 border-cyan-600 hover:text-cyan-600 mr-3 mb-2">
          Add Service
        </button>
      </Link>
      {user?.uid ? (
        <>
          <button
            onClick={handleLogOut}
            className="btn btn-outline btn-error mb-2
            "
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-ghost">Register</button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="mt-6">
      <div className="navbar bg-base-100 shadow-2xl">
        <div className="navbar-start">
          <Link to="/">
            <button className="btn btn-ghost normal-case text-xl">
              <p className="text-cyan-600">Physiotherapy Service</p>
            </button>
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              <li tabIndex={0}></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0"></ul>
        </div>
        <div className="navbar-end hidden lg:flex md:flex">
          {user?.uid && (
            <>
              <img
                className="w-12 mr-2 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </>
          )}

          {menuItems}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
