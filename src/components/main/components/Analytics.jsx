import React,{useState} from 'react'
import {BsGraphUp} from "react-icons/bs";
import LineCharts from './LineChart';

const Analytics = () => {
    const [activeMenu,setActiveMenu] = useState("")

  const handleRoute = (type) => {
    setActiveMenu(type)
  }
  return ( 
    <div className='analytics'>
    <div className='analytics_head'>
    <div className='head'>
     <div className='graph_img'>
         <BsGraphUp />
     </div>
     <div style={{marginBottom:"10px",color:"gray"}}>Analytics</div>
    </div>
    <div className='grap_time'>
        <div onClick = {() =>handleRoute("")} className={` ${activeMenu == ""}`}>1w</div>
        <div onClick = {() =>handleRoute("1m")} className={` ${activeMenu == "1m"}`}>1M</div>
        <div onClick = {() =>handleRoute("6m")} className={` ${activeMenu == "6m"}`}>6M</div>
        <div onClick = {() =>handleRoute("1y")} className={` ${activeMenu == "1y"}`}>1Y</div>
        <div onClick = {() =>handleRoute("all")} className={` ${activeMenu == "all"}`}>All</div>
    </div>

    </div>
    <LineCharts />
    </div>
  )
}

export default Analytics