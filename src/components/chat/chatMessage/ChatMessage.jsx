import React from "react";
import { MgDiv, MsgPhoto, MsgParag } from "./ChatMessageStyled";

const ChatMessage = (prop, auth) => {
  const { text, uid, photoURL } = prop.message;
  const messageClass = uid === auth?.currentUser?.uid;

  return (
    <MgDiv uid={messageClass}>
      <MsgPhoto className={`image__box first-element-logo`}>
        <img className="image__item" src={photoURL} alt="" />
      </MsgPhoto>

      <MsgParag uid={messageClass}>{text}</MsgParag>
    </MgDiv>
  );
};

export default ChatMessage;
