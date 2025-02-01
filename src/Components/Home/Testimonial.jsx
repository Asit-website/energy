import React from "react";
import "./testimonial.css";
import user from "../../assets/testi_users.png";
import testimonial_right from "../../assets/testimonial_right.png";

function Testimonial() {
  return (
    <div className="testit_wrap">
      <div className="testi_cont">
        <div className="test_left">
          <p className="testi_tag">Testimonial</p>

          <div className="head_test">
            <h4>Check Our Clients</h4>
            <p>
              <span className="linett"></span> Feedback
            </p>
          </div>

          <p className="head_parastest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>

          <div className="testi_users">
            <img src={user} alt="" />
            <div className="testi_grp">
              <h2>User</h2>
              <p>Manager</p>
            </div>
          </div>
        </div>

        <div className="testi_right">
          <img src={testimonial_right} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
