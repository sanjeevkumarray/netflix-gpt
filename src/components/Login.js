import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSclice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonclik = () => {
    //Validate the form data
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const message = -checkValidData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "data:image/jpeg;base64,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",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error, message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <from
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonclik}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : " Already register? Sign In Now..."}{" "}
        </p>
      </from>
    </div>
  );
};

export default Login;
