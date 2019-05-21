import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './containers/VideoList/VideoList';
import SearchForm from './containers/SearchForm/SearchForm';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>YouTube Search Example(React, redux, resux-saga, typesafe-actions)</p>
      </header>
      <SearchForm />
      <VideoList />
    </div>
  );
};

export default App;
