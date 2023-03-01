import React from 'react';
//import { Footer,Blog,Possibility,Features,WhatCV,Header } from './containers';
import {CTA,Brand,Navbar} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatCV} from './containers';
import './App.css';

const App = () => {
  return (
    // <div>
    //   <h1>Hello</h1>
    // </div>
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
      <Header/>

      </div>
       <Brand/>
      <WhatCV/>
       <Features/>
       <Possibility/>
       <CTA/>
       <Blog/>

       
       <Footer/>
    </div>
  )
}

export default App