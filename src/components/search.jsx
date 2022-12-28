import React from "react";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user..." />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/6159139/pexels-photo-6159139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        ></img>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
