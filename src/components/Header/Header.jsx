import React from "react";
import "./Header.css";
import { FiLogOut } from "react-icons/fi";
import { AiFillBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
        </div>
        <h2 style={{color:"blueviolet"}}>HOME PAGE</h2>
      </div>
      <div className="header_right">
        <div>
          <button>Deposit</button>
        </div>
        <p>Withdraw</p>
        <AiFillBell />
        <FiLogOut />
      </div>
    </div>
  );
};

export default Header;
