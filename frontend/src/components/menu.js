import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { connect } from "react-redux";

function Menu({ isAuthenticated }) {
  const guestLinks = () => (
    <Fragment>
      <li>
        <a href="/signup">
          <FontAwesomeIcon icon={icon({ name: "database" })} />
          Sign up
        </a>
      </li>
      <li>
        <a href="/signin" className="whitespace-nowrap">
          <FontAwesomeIcon icon={icon({ name: "user" })} />
          Sign in
        </a>
      </li>
    </Fragment>
  );
  return (
    <ul className="menu bg-base-200 w-auto rounded-box flex-shrink-0 font-medium">
      <li>
        <a href="/">
          <FontAwesomeIcon icon={icon({ name: "house" })} />
          Home
        </a>
      </li>
      <li>
        <a href="/series" className="whitespace-nowrap">
          <FontAwesomeIcon icon={icon({ name: "tape" })} />
          TV Series
        </a>
      </li>
      <li>
        <a href="/movies">
          <FontAwesomeIcon icon={icon({ name: "clapperboard" })} />
          Movies
        </a>
      </li>
      <li>
        <a href="/anime">
          <FontAwesomeIcon icon={icon({ name: "film" })} />
          Anime
        </a>
      </li>
      {!isAuthenticated && guestLinks()}
      <li>
        <a href="/about" className="whitespace-nowrap">
          <FontAwesomeIcon icon={icon({ name: "info-circle" })} />
          About
        </a>
      </li>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Menu);
