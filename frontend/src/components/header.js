import avatar from "../images/avatar.png";
import Menu from "./menu";
import SearchBar from "./search";

function Header() {
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
              className="menu menu-lg font-medium dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-full"
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

          <button className="btn btn-ghost btn-circle hidden">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-active indicator-item"></span>
            </div>
          </button>

          <button className="btn btn-outline btn-sm md:btn-md">Sign in</button>

          <div className="dropdown dropdown-end hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="avatar" src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/profile" className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a href="settings">Settings</a>
              </li>
              <li>
                <a href>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-5 md:hidden">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
