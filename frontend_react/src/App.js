import React from 'react';

import { Header, About, Skills, Work, Footer } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default App;