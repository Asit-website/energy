import React from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeheroimg from "../assets/homeheroimg.png";
import { home_hero_logos } from "../Data/home";
import "./product.css";
import largeimg from "../assets/productlarge.png";
import smallimg from "../assets/productsmal.png";

function Product() {
  return (
    <div>
      <section className="products1wrap">
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
          <div className="her_seccpa">
            <p className="her_lin"></p>
            <h4>Products</h4>
            <p className="her_lin"></p>
          </div>
          <div className="pointpro">
            <p>•</p>
            <span>Home</span>
            <span>Products</span>
          </div>
        </div>
      </section>

      <section className="products2wa">
        <div className="producwra_cont">

          <div className="whosec2">
            <div className="pros2coleft">

                <div className="largpro_div">
              <img src={largeimg} alt="largeimg" className="largeimg" />
                </div>

              <div className="pro2smalcon">
                <div>
                <img src={smallimg} alt="" />

                </div>
                <div>

                <img src={smallimg} alt="" />
                </div>
                <div>
                <img src={smallimg} alt="" />
                </div>
              </div>
            </div>

            <div className="procons2_right">
              <h3>TELECOM-IN-A-BOX” POWER SOLUTION 24kW VERSION</h3>

              <p>
                Fully integrated, from design & installation, to operation &
                maintenance. Running on AI/ML Backed Energy Software Platform,
                our energy solutions are optimized for long term reliability and
                peace of mind.
              </p>
            </div>
          </div>

          <div className="descrbbtns2">
            <button><span>Description</span></button>
            <button><span>Reviews</span></button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Product;
