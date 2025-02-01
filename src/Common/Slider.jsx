import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css"; 
import { sliderData } from "../Data/home";
import { MdArrowOutward } from "react-icons/md";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={4} 
      spaceBetween={20} 
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      pagination={{ clickable: true }} 
      modules={[Pagination, Autoplay]} 
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="single_slide">
            <img src={data.img} alt="Slide Image" />
            <p>{data.title}</p>
            <button>
              <span>VIEW</span> <MdArrowOutward className="MdArrowOutward" />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
