import React from 'react';
import {FcMoneyTransfer} from "react-icons/fc";

const Investment = () => {
  return (
    <div className='investment'>
    <div className='head'>
     <div className='money_img'>
         <FcMoneyTransfer />
     </div>
     <div style={{marginBottom:"10px",color:"gray"}}>Investment</div>
    </div>
    <div className='investment_body'>
        <p>You have invested in</p>
        <h1>1 of 3</h1>
        <p>available portfolios</p>
    </div>
    <div className='investment_button'>
        <button>Suggest New Portfolio</button>
    </div>
    </div>
  )
}

export default Investment