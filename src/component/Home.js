import React from 'react'
import './component.css/home.css'
import Nav from './Nav'
import Me from './img/tools.jpg'
import cv from './img/cv yo.jpg'



export default function Home() {
  return (
    <div>
      <Nav/>
        <div className="h">
          <div className="h-left">
              <div className="h-left-wrapper">
                <h2 className="h-home">Hello, My name is</h2>
                <h1 className='h-name'>Cherkaoui</h1>
                <div className="h-title">
                  <div className="h-title-wrapper">
                    <div className="h-title-item">Web Developer</div>
                    <div className="h-title-item">Full Stack</div>
                    <div className="h-title-item">Front End</div>
                    <div className="h-title-item">Back End</div>
                    <div className="h-title-item">React JS - Laravel</div>
                  </div>
                </div>
                <p className="h-desc">
                  Developpeur junior Full Stack React JS + Laravel
                </p>
                <a href={cv} target="_blank"><button className="h-btn">Download cv</button></a>
              </div>
          </div>
          <div className="h-right">
            <div className="h-bg"></div>
            <img src={Me} className="h-img" />
          </div>
        </div>
    </div>
  )
}
