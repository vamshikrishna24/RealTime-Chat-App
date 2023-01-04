import React, { useContext } from "react";
import video from "../img/video.png";
import person from "../img/person-add-4.png";
import more from "../img/more.png";
import Messages from "./messages";
import Input from "./input";
import { ChatContext } from "./../context/chatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={person} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
