import React from 'react';

// Components 
import Header from './components/Header/Header';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Whatsapp from './components/Whatsapp/Whatsapp';
import Questions from './components/Questions/Questions';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Hero />
      <Nav />
      <Whatsapp />
      <Questions />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
