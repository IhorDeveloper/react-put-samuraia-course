



// Page in book 55

import Sidebar from './components/Sidebar/Sidebar.jsx'
import Header from './components/Header/Header.jsx'
import Profile from './components/Profile/Profile.jsx'

import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid">
      
      <Header />

      <Sidebar />

      <Profile />

    </div>
  );
}

export default App;
