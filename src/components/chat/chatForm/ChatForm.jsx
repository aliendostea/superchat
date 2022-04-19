import React from "react";
import style from "./ChatForm.module.scss";

const ChatForm = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.inputchat}
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className={style.btnchat} type="submit">
        <figure className={`image__box ${style.btnchatimg}`}>
          <img className="image__item" src="../img/icon-send.png" alt="" />
        </figure>
      </button>
    </form>
  );
};

export default ChatForm;
