import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
  <div className="navBar">
    <h1>BLACK GYM</h1>
    <ul>
      <li><a href="#">SOBRE NOSOTROS</a></li>
      <li><a href="#">CLASES</a></li>
      <li><a href="#">CONTACTO</a></li>
      <li><a href="https://www.instagram.com/bl4ck.gym/">IG</a></li>
    </ul>
  </div>
    );
  }
  
  export default NavBar;