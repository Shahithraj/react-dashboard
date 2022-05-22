import React,{useState} from 'react'
import {FcMoneyTransfer} from "react-icons/fc";
import BasketCoin from './BasketCoin';

const Basket = () => {

  const [allData,setAllData] = useState(false)

  const data = [
    {
      title:"NFT",
      desc:"An NFT is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"Metaverse",
      desc:"An Metaverse is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"Metaverse",
      desc:"An Metaverse is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    }
  ]

  const AllData = [
    {
      title:"NFT",
      desc:"An NFT is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"Metaverse",
      desc:"An Metaverse is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"Metaverse",
      desc:"An Metaverse is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"NFT",
      desc:"An NFT is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"Metaverse",
      desc:"An Metaverse is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
    {
      title:"Metaverse",
      desc:"An Metaverse is a digital asset that represents real-world objects ",
      first:"-10%",
      second:"20%",
      third:"30%", 
    },
  ]

  return (
    <div className='basket'>
     <div className='head'>
     <div className='money_img'>
         <FcMoneyTransfer />
     </div>
     <div style={{marginBottom:"10px",color:"gray"}}>My Basket</div>
    </div>
    <BasketCoin data={data} AllData = {AllData} allData = {allData} setAllData = {setAllData} />
    </div>
  )
}

export default Basket