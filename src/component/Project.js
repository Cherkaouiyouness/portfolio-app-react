import React from 'react'
import './component.css/product.css'
import data from './data.json'


export default function Project() {



  return (
    <div className="p" id='project'>
        <div className="p-title">
            <h1>My project</h1>
        </div>
        <div className="p-card-list">
            {data.products.map((e)=>{

                return (
                    <>
                    <div className="p-card">
                    <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <div className="p-img">
                    
                    <a href={e.link} target="_blank"><img src={require(`./${e.img}`)} /></a>
                    
                </div>
            </div>     
                    </>)})}
        </div>
    </div>
  )
}
