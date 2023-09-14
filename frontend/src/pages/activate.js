import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verify } from "../actions/auth";
import { connect } from "react-redux";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const { uid, token } = useParams();

  const verify_account = (e) => {
    verify(uid, token);
    setVerified(true);
    navigate("/", { replace: true });
  };

  if (verified) {
    navigate("/", { replace: true });
  }

  return (
    <div className="flex flex-col justify-center w-auto p-4 ml-auto mr-auto space-y-5">
      <h1 className="normal-case text-2xl font-bold text-center ">
        Verify Your Account
      </h1>
      <div className="flex justify-center w-full">
        <button
          onClick={verify_account}
          className="btn btn-outline btn-sm md:btn-md rounded-full ml-auto mr-auto"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
