import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mypage from './pages/Mypage/Mypage';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Lists from './pages/Lists/Lists';
import Owner from './pages/Owner/Owner';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import data from './pages/data';

function App() {
  const item = data;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail item={item} />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/lists" element={<Lists item={item} />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
