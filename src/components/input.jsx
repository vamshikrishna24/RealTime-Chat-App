import React from "react";
import attach from "../img/attachment.svg";
import img from "../img/image-123.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something here..." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" hidden id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
