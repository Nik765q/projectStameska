import { useState } from 'react'
import './App.css'
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

function App() {

  return (
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>
  )
}

export default App
