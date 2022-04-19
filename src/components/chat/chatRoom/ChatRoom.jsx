import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { ChatMessagesDiv } from "./ChatRoomStyled";
import LogInOut from "./../logInOut/LogInOut";
import ChatForm from "./../chatForm/ChatForm";
import ChatMessage from "./../chatMessage/ChatMessage";

const ChatRoom = ({ firebase, firestore, auth }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  if (!messages) {
    return (
      <>
        <h1>ChatRoom</h1>
        <p> We are loading the messages...</p>
      </>
    );
  }

  return (
    <>
      <div className="btn-singout">
        <h1>ChatRoom</h1>
        <LogInOut auth={auth} />
      </div>

      <ChatMessagesDiv>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}
      </ChatMessagesDiv>

      <ChatForm
        handleSubmit={handleSendMessage}
        inputValue={formValue}
        handleChange={setFormValue}
      />
    </>
  );
};

export default ChatRoom;
