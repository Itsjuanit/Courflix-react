import React from 'react';
import './App.css';
import '../src/assets/reset.css'
import BurgerMenu from './components/BurgerMenu'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import data from './data/data.json'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero data={data[0]} showThumbs={false}/>
        <Carousel data={data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
