import React from "react";
import "./Footer.css";
import BlueHeart from "../../assets/sticky-notes.png";

function Footer() {
  return (
    <div className='footer'>
      Built by Ishan Agarwal
      <img src={BlueHeart} width={30} alt='(by heart)' />
    </div>
  );
}

export default Footer;
