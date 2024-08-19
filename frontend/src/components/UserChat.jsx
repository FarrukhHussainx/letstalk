import React from "react";
import styles from "./scrollbar.module.css";

const UserChat = () => {
  return (
    <div className={`overflow-y-scroll h-96 mt-2 ${styles.customScrollbar}`}>
      <div className=" mb-2">
        <h1 className="font-bold gray-text text-xl">To: Sam Edverd</h1>
      </div>
      <div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            It's over Anakin,
            <br />I have the high ground.
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble">You underestimate my power!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
