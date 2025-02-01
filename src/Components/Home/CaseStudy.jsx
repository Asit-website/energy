import React, { useState } from "react";
import caseimg from "../../assets/casestudy.png";
import { casestudy } from "../../Data/home";
import "./casestudy.css";

function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCaseStudy = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="casesutdywrap">
      <img src={caseimg} alt="" className="caseimg" />

      <div className="casestudy_cont">
        <div className="cs_iner">
          <div className="cas_head">
            <h3>Case Studies</h3>
            <p className="caseline"></p>
          </div>

          <div className="case_study_back">
            {casestudy?.map((cstu, index) => (
              <div key={index} className="casesyudy">
                <div className="casdthe" onClick={() => toggleCaseStudy(index)}>
                  <h4>{cstu.title}</h4>
                  <span className="cursor-pointer">{activeIndex === index ? "-" : "+"}</span>
                </div>

                <div
                  className={`case_content ${activeIndex === index ? "open" : ""}`}
                >
                  <p>{cstu.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
