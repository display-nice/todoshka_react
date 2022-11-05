import './App.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import React from 'react';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
      </div>
    </div>
  );
}

export default App;
