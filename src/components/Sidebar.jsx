import React from 'react';
import './Sidebar.css';

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

export default Sidebar;
