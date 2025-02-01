import React, { useState } from 'react'
import "./homenav.css"
import logo from "../assets/homenavlogo.png"
import { homenavbardata } from '../Data/home'
import hnav1 from "../assets/hnal1.png"
import hnal2 from "../assets/hnal2.png"

function HomeNavbar() {

   const [showslidebar , setShowslide] = useState(true);

  return (
    <div className='hoemnavbarwap'>

        <nav>

            <img src={logo} alt="" />


            <div className="ho_nav_items">

              {
                homenavbardata?.map((item , index)=>(
                    <a href="" key={index}>{item?.title}</a>
                ))
              }


               <div className="nav_logos">
                   <img src={hnal2} alt="" />
                   <img src={hnav1} alt="" />
               </div>

            </div>

              <img src={hnal2} alt="" />



        </nav>

  {
    showslidebar && 
    <div className="showsliderbar">

    </div>
  }

    </div>
  )
}

export default HomeNavbar