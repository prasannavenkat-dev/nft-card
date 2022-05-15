import React from "react";
import Image from "../Image/Image";
import Footer from "../Footer/Footer";
function Card() {
  return (
    <div className="card">
      <Image />

      <div className="title">Equilibrium #3429</div>

      <div className="description">
        Our Equilibrium Collection promotes balance and calm.
      </div>

      <div className="rating">
        <div className="value">
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
              fill="#00FFF8"
            />
          </svg>

          <span>0.041 ETH</span>
        </div>

        <div className="timeLeft">
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
              fill="#8BACD9"
            />
          </svg>
          <span>3 days left</span>
        </div>
      </div>
      <hr />

      <Footer />
    </div>
  );
}

export default Card;
