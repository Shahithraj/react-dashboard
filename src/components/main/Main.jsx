import React from 'react';
import Analytics from './components/Analytics';
import Basket from './components/Basket';
import Fact from './components/Fact';
import Investment from './components/Investment';
import Portfolio from './components/Portfolio';
import "./Main.css";

const Main = () => {
  return (
    <div className='main'>
    <div className='main_container'>
    <div className='left'>
    <Investment />
    <Portfolio />
</div>
<div className='right'>
    <Analytics />
    <Basket />
</div>
    </div>
<Fact />

    </div>

  )
}

export default Main