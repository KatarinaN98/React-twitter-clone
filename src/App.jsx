import React, { useState } from 'react';
import './styles/App.css';

// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item active">🏠 Home</div>
      <div className="sidebar-item">🔍 Explore</div>
      <div className="sidebar-item">🔔 Notifications</div>
      <div className="sidebar-item">✉️ Messages</div>
      <div className="sidebar-item">🔖 Bookmarks</div>
      <div className="sidebar-item">📄 Lists</div>
      <div className="sidebar-item">👤 Profile</div>
      <div className="sidebar-item">⚙️ More</div>
      <button className="tweet-btn">Tweet</button>
    </div>
  );
};

// Tweet component
function Tweet({
  user, content, replies, retweets, likes, image, onLike, onRetweet, onReply
}) {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img src={user.profilePicture} alt={user.name} className="profile-pic" />
        <span>{user.name}</span>
      </div>
      <p>{content}</p>
      {image && <img src={image} alt="Tweet" className="tweet-image" />}
      <div className="tweet-actions">
        <button onClick={onLike}>❤️ Like ({likes})</button>
        <button onClick={onReply}>💬 Reply ({replies})</button>
        <button onClick={onRetweet}>🔁 Retweet ({retweets})</button>
      </div>
    </div>
  );
}

// Main App component
const App = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [newImage, setNewImage] = useState('');

  const user = {
    name: 'John Doe',
    profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
  };

  // Add handlers for Like, Reply, Retweet
  const handleLike = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  const handleRetweet = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, retweets: tweet.retweets + 1 } : tweet
      )
    );
  };

  const handleReply = (id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, replies: tweet.replies + 1 } : tweet
      )
    );
  };

  const handlePostTweet = () => {
    if (newTweet.trim()) {
      const newTweetObject = {
        id: Date.now(),
        content: newTweet,
        image: newImage || null,
        replies: 0,
        retweets: 0,
        likes: 0, // Initialize likes to 0
      };
      setTweets([newTweetObject, ...tweets]);
      setNewTweet('');
      setNewImage('');
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <header>
          <h1>Home</h1>
        </header>
        <div className="tweet-input">
          <textarea
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            placeholder="What's happening?"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <button onClick={handlePostTweet} disabled={!newTweet.trim()}>
            Tweet
          </button>
        </div>
        <div className="tweet-container">
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              user={user}
              content={tweet.content}
              image={tweet.image}
              replies={tweet.replies}
              retweets={tweet.retweets}
              likes={tweet.likes}
              onLike={() => handleLike(tweet.id)}
              onRetweet={() => handleRetweet(tweet.id)}
              onReply={() => handleReply(tweet.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

