import React from 'react';
import Nav from './components/Nav/Nav.js';
import Banner from './components/Banner/Banner.js';
import About from './components/About/About.js';
import Hero from './components/Hero/Hero.js';
import Questions from './components/Questions/Questions.js';
import Products from './components/Products/Products.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Whatsapp from './components/Whatsapp/Whatsapp.js';
import './App.scss';

const App = () => {


  return (
    <div className="App">
      <Nav />
      <Banner />
      <Hero />
      <About />
      <Products />
      <Questions />
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
