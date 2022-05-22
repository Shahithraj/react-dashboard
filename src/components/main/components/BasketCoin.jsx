import React, { useState } from "react";
import Round from "./Round";

const BasketCoin = ({ data, setAllData, AllData, allData }) => {

  return (
    <div className="basket_coin">
      {allData
        ? AllData.map((item, i) => <div className="basket_data">
              <div className="left">
                <p>{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
              <div className="vertical_line"> </div>
              <div className="middle">
                <div>
                  <p>First</p>
                  <p>Second</p>
                  <p>Third</p>
                </div>
                <div>
                  <p style={{ color: "red" }}>{item.first}</p>
                  <p style={{ color: "green" }}>{item.second}</p>
                  <p style={{ color: "green" }}>{item.third}</p>
                </div>
              </div>
              <div className="vertical_line"> </div>

              <Round item={item} />
              
            </div>)
        : data.map((item, i) => (
            <div className="basket_data">
              <div className="left">
                <p>{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
              <div className="vertical_line"> </div>
              <div className="middle">
                <div>
                  <p>First</p>
                  <p>Second</p>
                  <p>Third</p>
                </div>
                <div>
                  <p style={{ color: "red" }}>{item.first}</p>
                  <p style={{ color: "green" }}>{item.second}</p>
                  <p style={{ color: "green" }}>{item.third}</p>
                </div>
              </div>
              <div className="vertical_line"> </div>

              <Round item={item} />
              
            </div>
          ))}
          {
              allData ? 
              <div className="basket_button" onClick={() =>setAllData(false)}>
              <button>Show less</button>
               </div>:
               <div className="basket_button" onClick={() =>setAllData(true)}>
              <button>See More</button>
               </div>
          }
         
    </div>
  );
};

export default BasketCoin;
