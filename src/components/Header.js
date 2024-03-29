import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 by-2-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="data:image/jpeg;base64,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"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 ">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
