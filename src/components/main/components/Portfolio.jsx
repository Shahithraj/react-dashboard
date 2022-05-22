import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="head">
        <div className="money_img">
          <FcMoneyTransfer />
        </div>
        <div style={{ marginBottom: "10px", color: "gray" }}>
          Portfolio Value
        </div>
      </div>
      <div className="portfolio_number">
        <p>
          $5500 <span>(+ $ 60)</span>
        </p>
      </div>
      <div className="box_graph">
        <div className="horizontal_line">
          <hr></hr>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="first_svg">
          <path
            d="M1,30 C75,100 125,20 150,30 S10 100, 150 50"
            style={{ stroke: "#006666", fill: "none" }}
          />
        </svg>
      </div>
      <div className="graph_percentage">
        <p style={{ color: "red" }}>-5%</p>
        <p style={{ color: "green" }}>+25%</p>
        <p style={{ color: "green" }}>+12.5%</p>
      </div>
      {/* <div style={{cursor:"pointer"}} className="tbss-percent">
        <svg>
          <circle cx="40" cy="40" r="40"></circle>
          <circle
            cx="40"
            cy="40"
            r="40"
            style={{
              strokeDashoffset: `calc(251 - (251 * ${10}) / 100)`,
              stroke: "#08A652",
            }}
          ></circle>
        </svg>
        <svg className="second_round_svg">
          <circle cx="100" cy="100" r="50"></circle>
          <circle
           cx="100" cy="100" r="50"
            style={{
              strokeDashoffset: `calc(251 - (251 * ${10}) / 100)`,
              stroke: "#08A652",
            }}
          ></circle>
        </svg>
        <svg>
          <circle cx="40" cy="40" r="40"></circle>
          <circle
            cx="40"
            cy="40"
            r="40"
            style={{
              strokeDashoffset: `calc(251 - (251 * ${10}) / 100)`,
              stroke: "#08A652",
            }}
          ></circle>
        </svg>
        <div className="tbss-number">
                <div className="tbss-number-title">Green</div>
                <span>{100}%</span>
              </div>
      </div> */}
      <div className="circle">
        <div className="c1"></div>
        <div className="c2"></div>
        <div className="c3"></div>
        <div className="c4"></div>
        <div className="c5"></div>

<div className="circle_text">
  <h2>5</h2>
  <p>Derivatives</p>
</div>
      </div>
    </div>
  );
};

export default Portfolio;
