import React from 'react'
import { weFollow } from '../../Data/home'
import "./follow.css"

function WeFollow() {
  return (
    <div className='wefolow_wrpa'>

        <div className="weffolo_cont">

        <div className="wefolow_top">

            <div className="folow_left">
                 <p className='folspara'> We Follow</p>
                  <h4>4 D's</h4>
                  <p className="linesfo"></p>
            </div>

            <p className='folwlefriparas'>At Applied Energy Technologies, we are dedicated to driving decarbonisation by offering advanced energy solutions tailored to our clients' needs. Our bespoke power systems help businesses minimize their carbon footprint </p>

        </div>

        <div className="wefolow_bottom">
             {
                weFollow?.map((folow , index)=>(
                     <div key={index} className="sngle_folow">
                         <img src={folow.img} alt="" />
                         <p>{folow.title}</p>
                     </div>
                ))
             }
        </div>

        </div>

    </div>
  )
}

export default WeFollow