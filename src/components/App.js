import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home.js';
import Login from './login/login.js';
import Booklist from './booklist/booklist.js';
import MainTemplate from './mainLayout/template/mainTemplate.js';
import '../css/style.css';

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/booklist' element={<Booklist />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;