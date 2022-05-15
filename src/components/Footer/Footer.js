import React from "react";
function Footer() {
  return (
    <>
      <div className="footer">
        <img src={process.env.PUBLIC_URL + "images/image-avatar.png"} alt="icon-img" />

        <div style={{ marginLeft: "15px" }}>
          <span style={{ color: "#8DA8CF" }}>Creation of</span>{" "}
          <span className="author">Jules Wyvern</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
