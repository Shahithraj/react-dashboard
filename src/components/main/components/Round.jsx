import React from 'react';
import {BsCashCoin,BsCoin,BsCurrencyBitcoin} from "react-icons/bs";
import {FaCoins} from "react-icons/fa";
import {ImCoinYen} from "react-icons/im";
import {RiCoinsFill} from "react-icons/ri";

const Round = ({item}) => {
  return (
    <div className='round_container'>
    {
        item.title === "NFT" ? (
<>
<div className='round first'></div>
<div className='round first'></div>
<div className='round'><BsCashCoin /></div>
<div className='round'><BsCoin /></div>
<div className='round'><BsCurrencyBitcoin /></div>
<div className='round'><FaCoins /> </div>
<div className='round'><ImCoinYen /> </div>
<div className='round'><RiCoinsFill /> </div>


</>
        ):(
            <>
<div className='round'></div>
<div className='round'></div>
<div className='round'></div>
<div className='round'></div>
<div className='round'></div>
<div className='round'></div>
<div className='round'></div>
<div className='round'></div>


</>
        )
    }
    </div>
  )
}

export default Round