import React from 'react';
import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import About from './components/About/About.js';
import Hero from './components/Hero/Hero.js';
import Whatsapp from './components/Whatsapp/Whatsapp.js';
import Questions from './components/Questions/Questions.js';
import Products from './components/Products/Products.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
{/*   <About />
      <Hero />
      <Whatsapp />
      <Questions />
      <Products />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
