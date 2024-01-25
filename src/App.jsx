import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Temp from './pages/Temp';
import Curr from './pages/Curr';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curr" element={<Curr />} />
            <Route path="/temp" element={<Temp />} />
        </Routes>
    </BrowserRouter>
 
  );
}

export default App;
