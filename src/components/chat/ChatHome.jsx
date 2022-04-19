import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import { ChatHomeDiv } from "./ChatHomeStyled";
import LogInOut from "./logInOut/LogInOut";
import ChatRoom from "./chatRoom/ChatRoom";

firebase.initializeApp({
  //// firebase initializeApp settings
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatHome = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="body-content">
      <div className="content">
        <ChatHomeDiv>
          {user ? (
            <ChatRoom firebase={firebase} firestore={firestore} auth={auth} />
          ) : (
            <>
              <LogInOut auth={auth} />
            </>
          )}
        </ChatHomeDiv>
      </div>
    </div>
  );
};

export default ChatHome;
