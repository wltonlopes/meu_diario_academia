import React from 'react';
import Footer from '../componets/Footer';
import Header from '../componets/Header'
import MainPag from './MainPag';

export default function Home() {
  return (
    <div className="App">
      <Header/>
      <MainPag/>
      <Footer/>
  </div>
  )
}
