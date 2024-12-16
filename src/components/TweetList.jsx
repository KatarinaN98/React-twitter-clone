import React from "react";
import Tweet from "./Tweet";

function TweetList({ tweets, updateTweet }) {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} updateTweet={updateTweet} />
      ))}
    </div>
  );
}

export default TweetList;
