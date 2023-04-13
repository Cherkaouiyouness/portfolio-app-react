import React from 'react'
import "./component.css/about.css"
import logo from "./3W.jpg";
import Yo from "./Yo.jpg"

export default function About() {
  return (
    <div className="a" id='about'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Yo} className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Developpeur Junior Full Stack 
            </p>
            <p className="a-desc">La formation, complété par ma passion pour internet et l'informatique,m'a permis d'acquérir les connaissances techniques 
              et pratiques indispensables à l'exercice de ce métier. Maitrisant différents langages informtiques (HTML/CSS/JS), je désire confirmer 
              mes compétences en création et dévelopements de sites Web. Ma forte motivation,ma capacité d'adaptation et mon potentiel
              sont d'autres atouts qui seront bénéfiques au dévelopement de votre entreprise .</p>
            <div className="a-award">
                <img src={logo} className="a-award-img" />

                <div className="a-award-texts">
                    <h4 className="a-award-title">Bootcamp 3W Academy</h4>
                    <p className="a-award-desc">Full Stack (React JS - Laravel)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
