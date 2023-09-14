import React, { Fragment } from "react";
import avatar from "../images/avatar.png";
import Menu from "./menu";
import SearchBar from "./search";
import { logout } from "../actions/auth";
import { connect } from "react-redux";

const Header = ({ logout, isAuthenticated }) => {
  const guestLinks = () => (
    <Fragment>
      <a
        className="btn btn-outline btn-sm md:btn-md rounded-full"
        href="/signin"
      >
        Sign in
      </a>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="avatar" src={avatar} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="bg-base-200 w-auto mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box"
        >
          <li>
            <a href="/profile" className="justify-between whitespace-nowrap">
              My Watchlist
            </a>
          </li>
          <li>
            <a href="/profile" className="justify-between">
              Notifications
            </a>
          </li>
          <li>
            <a href="/profile" className="justify-between">
              Profile
            </a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
  return (
    <div className="mb-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-medium dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-full"
            >
              <Menu />
            </ul>
          </div>
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              Primermovies
            </a>
          </div>
        </div>

        <div className="navbar-end space-x-2">
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {isAuthenticated ? authLinks() : guestLinks()}
        </div>
      </div>

      <div className="px-5 md:hidden">
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
