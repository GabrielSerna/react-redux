import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home.js';
import MainTemplate from './mainLayout/template/mainTemplate.js';

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;