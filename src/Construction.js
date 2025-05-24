 import './Construction.css';
import React from "react";
import {SidebarComponent} from "./components/Sidebar/SidebarComponent"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Construction() {
  return (
    <div className="Construction">
         <div className="container">
    <div className="left">
        <div className='avatar-container'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
      </div>
      <p className="message">
        Our website is under construction, but we are ready to go! Want to know more about us?
      </p>
 
    </div>
    <div className="right">
      <h4>Our Website is</h4>
      <h1>COMING SOON</h1>
      <p>We're working hard to give you the best experience!</p>
      </div>
  </div>
    </div>
  );
}

export default Construction;

