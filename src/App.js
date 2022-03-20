import './App.css';
import React from 'react';
import Posts from './components/Posts';


function App() {
  return (
    <>
      <div className="App">
        <div className='heading'>
          <h1>Posts Votes React App Practice!</h1>
          <p>The goal of this app is to create an API fetch for posts, and create buttons to upvote/downvote each post. Maybe also display them on cards with Bootstrap!</p>
        </div>
        <Posts />
      </div>
    </>
  );
}

export default App;
