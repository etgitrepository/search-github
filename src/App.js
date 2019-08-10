import React from 'react';
import './App.css';
import SearchBar from './components/search-bar/search-bar';
import User from './components/user-data/user-data';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Search github</h1>
      </header>
      <main className='App-main'>
        <div className='body'>
          <SearchBar />
          <User />
        </div>
      </main>
    </div>
  );
}

export default App;
