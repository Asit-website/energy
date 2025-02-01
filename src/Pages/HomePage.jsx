import React, { isValidElement } from "react";
import "./home.css";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeheroimg from "../assets/homeheroimg.png";
import playicon from "../assets/play_icon.png";
import { ho_s2_box, home_hero_logos, hs3cont } from "../Data/home";
import dots from "../assets/home_s2_dots.png"
import s3img3 from "../assets/s3largimg.png"
import Slider from "../Common/Slider";
import Testimonial from "../Components/Home/Testimonial";
import WeFollow from "../Components/Home/WeFollow";
import CaseStudy from "../Components/Home/CaseStudy";
import NewsUpdate from "../Components/Home/NewsUpdate";
import Contact from "../Components/Home/Contact";
import Footer from "../Common/Footer";
import OurClient from "../Components/Home/OurClient";

function HomePage() {
  return (
    <div>
      <section className="hero_sectionwrap">
        <HomeNavbar />

        <img src={homeheroimg} alt="homeheroimg" className="homeheroimg" />

        <img src={homeshade} alt="homeshade" className="homeshade" />

        <div className="home_logos">
          {home_hero_logos?.map((im, index) => (
            <div key={index} className="sing_ho_lg">
              <img src={im?.img} alt="" />
            </div>
          ))}
        </div>

        <div className="hero_sec_con">
          <img src={playicon} alt="" />

          <h2>Powering Tomorrow: Intelligent Energy Solutions at Scale</h2>

          <div className="her_seccpa">
            <p className="her_lin"></p>
            <h4>
              Integrated <span>Renewable Energy</span>
            </h4>
            <p className="her_lin"></p>
          </div>
        </div>
      </section>

      <section className="home_sec2">
        <div className="home_s2_cont">
          {ho_s2_box?.map((item, index) => (
            <div key={index} className="sinel_s2">
              <img src={dots} alt="" />
              <div className="sin_s2_top">
                <h3>{item.title}</h3>
                <p className="itm_index">{index + 1}</p>
              </div>
              <p className="hs2_para">{item.para}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="home_sec3" >

        <div className="home_s3_cont">

          <div className="hm_s3Fir">

            <div className="hm_s3left">
              <p className="hm_s3tag">About Us</p>
              <h3>An End to End Energy Solution for </h3>
              <div className="hms3lin">
                <p className="linss3"></p>
                <span>your exacting needs</span>
                <p className="linss3"></p>
              </div>
              <p className="sms3_par">Fully integrated, from design & installation, to operation & maintenance. Running on AI/ML Backed Energy Software Platform, our energy solutions are optimized for long term reliability and peace of mind.</p>
            </div>

            <img src={s3img3} alt="s3img3" className="s3img3" />


          </div>

          <div className="hms3secn">

            <div className="hms3sle">
              {
                hs3cont?.map((hs, index) => (
                  <div key={index} className="singh3cont">
                    <img src={hs.img} alt="" />
                    <div className="hs_content">
                      <h4>{hs.title}</h4>
                      <p>{hs.para}</p>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="year15tag">
              <h4>15+</h4>
              <div className="yar15li">
                <span className="yelins"></span>
                <p>Years Experience</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="home_sec4" >

        <div className="hm_s4_cont">

          <div className="hms4_top">

            <p>Our Best-Selling <span>Products</span></p>

            <h4>APPLIED ENERGY “TELECOM-IN-A-BOX” </h4>

            <div className="hms4_lins">
              <p className="h4line"></p>
              <span>POWER SOLUTION</span>
              <p className="h4line"></p>
            </div>

          </div>

          <div className="hms4_slider">
            <Slider />
          </div>


        </div>

      </section>

      <Testimonial />

      <WeFollow />

      <CaseStudy />


      <NewsUpdate />

      <OurClient/>

      <Contact />

      <Footer />
    </div>
  );
}

export default HomePage;
