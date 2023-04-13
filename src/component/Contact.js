

import'./component.css/contact.css'

import Phone from "./img/phone.png";
import Email from "./img/email.png";
import Git from "./img/Github.png";
import In from "./img/linkedin.png"

const Contact = () => {

  return (
    <div className="c" id='contact'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +212 605787773
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              cyouness209@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Git} alt="" />
              <a href="https://github.com/Cherkaouiyouness" target="_blank">https://github.com/Cherkaouiyouness</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={In} alt="" />
              <a href="www.linkedin.com/in/cherkaoui-youness" target="_blank" > https://linkedin.com/in/cherkaoui-youness</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <form>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;