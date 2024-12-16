import React, { useState, useEffect, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'User', profilePicture: 'user.jpg' });

  // Get the current theme from localStorage (or default to 'light')
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  // Set the theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;  // Set the class on the body element for global theme styles
  }, [theme]);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;

