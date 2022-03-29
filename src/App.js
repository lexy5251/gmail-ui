import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div className="app">
        <Header />
        <div className='app_body'>
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
