import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
