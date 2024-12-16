import React, { useState } from 'react';

const Tweet = ({
  user,
  content,
  replies,
  retweets,
  likes,
  image,
  onLike,
  onRetweet,
  onReply,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      onReply(replyText);
      setReplyText('');
      setShowReplyInput(false);
    }
  };

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
        <button onClick={() => setShowReplyInput(!showReplyInput)}>
          💬 Reply ({replies.length})
        </button>
        <button onClick={onRetweet}>🔁 Retweet ({retweets})</button>
      </div>

      {/* Reply Input Field */}
      {showReplyInput && (
        <div className="reply-input">
          <input
            type="text"
            placeholder="Write your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button onClick={handleReplySubmit}>Reply</button>
        </div>
      )}

      {/* Display Replies */}
      {replies.length > 0 && (
        <div className="replies">
          <strong>Replies:</strong>
          <ul>
            {replies.map((reply, index) => (
              <li key={index}>{reply}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tweet;
