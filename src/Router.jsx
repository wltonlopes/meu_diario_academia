import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import MainPag from './pages/MainPag';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<MainPag />} />
    </Routes>
  )
}