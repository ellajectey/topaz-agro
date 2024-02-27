import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Landing from './pages/landing/Landing';
import Seller from './pages/seller/Seller';
import Navbar from './components/navbar/navbar';

function App() {

  let [pageInView, setPageInView] =  useState('Landing Page');

  return (
    <div className="App">
      <Navbar setPageInView={setPageInView}/>

        {pageInView === 'Landing Page' && <Landing/>}
        {pageInView === 'Seller Page' && <Seller/>}

        {/* IF/ELSE SYNTAX */}
        {/* {pageInView === 'Landing Page' ? <Landing/> : <Seller/>} */}

      <Footer/>
    </div>
  );
}

export default App;
