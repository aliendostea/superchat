import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

function SignIn({ onClick }) {
  return (
    <>
      <span className="main-title-chat">
        Welcome to the
        <br /> superchat2
      </span>
      <button className="btn-chat btn-chat-in" onClick={onClick}>
        Sign in With google
      </button>
    </>
  );
}

function SignOut({ onClick }) {
  return (
    <button className="btn-chat" onClick={onClick}>
      signOut
    </button>
  );
}

const LogInOut = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleSingOut = () => {
    auth.signOut();
  };
  return (
    <>
      {auth.currentUser ? (
        <SignOut onClick={handleSingOut} />
      ) : (
        <SignIn onClick={signInWithGoogle} />
      )}
    </>
  );
};

export default LogInOut;
