import React from 'react'
import contact2 from "../../assets/contactimg.png"
import "./contact.css"

function Contact() {
  return (
    <div className='contacT_wrap'>

        <div className="conac_cont">

             <div className="conga_left">
                <p className='fornpars'>For a New World</p>
                <h4 className='hfdsfds'>Let’s Make </h4>
                <p className='fsfslines'><span className="conline"></span>Some Changes</p>

                <p className="actuaconpa">
                The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.
                </p>

                <img src={contact2} alt="" />

             </div>

             <div className="conactofmr">

                <div className="flexconta">
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Phone' />
                </div>

                <div className="flexconta">
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Website' />
                </div>

                <textarea placeholder='Write here' name="" id=""></textarea>

                <button ><span>Contact Us</span></button>

             </div>

        </div>

    </div>
  )
}

export default Contact