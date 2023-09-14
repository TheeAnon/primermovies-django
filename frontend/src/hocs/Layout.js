import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated, load_user, googleAuth } from "../actions/auth";

const Layout = (props) => {
  let location = useLocation;

  useEffect(() => {
    const currentURL = window.location.href;

    const urlParams = new URLSearchParams(new URL(currentURL).search);

    const state = urlParams.get("state") ? urlParams.get("state") : null;
    const code = urlParams.get("code") ? urlParams.get("code") : null;

    if (state && code) {
      props.googleAuth(state, code);
    } else {
      props.checkAuthenticated();
      props.load_user();
    }
  }, [location, props]);

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user, googleAuth })(
  Layout
);
