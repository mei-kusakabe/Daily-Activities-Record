import React from 'react'
import './App.css';
import Activities from './components/Activities/Activities';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';




function App() {

  return (
    <div className='container m-0 p-0'>
      <Header></Header>
      <Activities></Activities>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
