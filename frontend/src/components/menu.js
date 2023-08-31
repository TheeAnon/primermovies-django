import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Menu() {
  return (
    <ul className="menu bg-base-200 w-auto rounded-box flex-shrink-0">
      <li>
        <a href="/">
          <FontAwesomeIcon icon={icon({ name: "house" })} />
          Home
        </a>
      </li>
      <li>
        <a className="whitespace-nowrap">
          <FontAwesomeIcon icon={icon({ name: "tape" })} />
          TV Series
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon icon={icon({ name: "clapperboard" })} />
          Movies
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon icon={icon({ name: "film" })} />
          Anime
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon icon={icon({ name: "database" })} />
          Sign up
        </a>
      </li>
      <li>
        <a className="whitespace-nowrap">
          <FontAwesomeIcon icon={icon({ name: "user" })} />
          Sign in
        </a>
      </li>
      <li>
        <a className="whitespace-nowrap">
          Request
          <FontAwesomeIcon icon={icon({ name: "crown" })} />
        </a>
      </li>
      <li>
        <a className="whitespace-nowrap">My Watchlist</a>
      </li>
      <li>
        <a className="whitespace-nowrap">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          About
        </a>
      </li>
    </ul>
  );
}

export default Menu;
