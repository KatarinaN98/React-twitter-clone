import React, { useState } from "react";

const TweetInput = ({ addTweet, user }) => {
  const [tweet, setTweet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweet.trim()) return;
    addTweet({ content: tweet, author: user.name, profilePicture: user.profilePicture, date: new Date() });
    setTweet("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tweet-input-header">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="tweet-avatar"
        />
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's happening?"
        />
      </div>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput;
