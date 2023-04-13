import React  from 'react'
import "./component.css/nav.css";



export default function Nav() {
  return (
    <div className="n">
     <div class="n-logo">
        <h1>PortFolio</h1>
      </div>
        <ul className='n-list'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">My project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}