import React,{useState} from 'react';
import "./Sidebar.css";
import {AiFillHome,AiOutlineCompass,AiFillProfile,AiOutlineShoppingCart,AiFillSetting} from "react-icons/ai";
import {BsFillQuestionCircleFill} from "react-icons/bs"
const Sidebar = () => {

  const [activeMenu,setActiveMenu] = useState("")

  const handleRoute = (type) => {
    setActiveMenu(type)
  }

  return (
    <div className='sidebar'>
    <div>
   <AiFillHome onClick = {() =>handleRoute("")} className={`menu ${activeMenu === ""}`} />
   <AiOutlineCompass onClick = {() =>handleRoute("second")} className={`menu ${activeMenu === "second"}`} />
   <AiOutlineShoppingCart onClick = {() =>handleRoute("third")} className={`menu ${activeMenu === "third"}`} />
   <AiFillProfile onClick = {() =>handleRoute("fourth")} className={`menu ${activeMenu === "fourth"}`} />
    </div>
<div style={{marginBottom:"30px"}}>
<AiFillSetting onClick = {() =>handleRoute("settings")} className={`menu ${activeMenu === "settings"}`} />
<BsFillQuestionCircleFill onClick = {() =>handleRoute("help")} className={`menu ${activeMenu === "help"}`} />
</div>
    </div>
  )
}

export default Sidebar