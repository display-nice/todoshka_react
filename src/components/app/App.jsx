import './css-vendor/bootstrap/bootstrap.min.css';
import './css-vendor/fontawesome/all.min.css';
import './app.css';

import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

const App = () => {
  const data = [
    {text: 'Хоп, хей, лалалей', favorite: true, id: 1},
    {text: 'Где вопросы', favorite: false, id: 2},
    {text: 'Где ответы', favorite: false, id: 3},
  ];
  return (
    <div className="app">
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  );
}

export default App;
