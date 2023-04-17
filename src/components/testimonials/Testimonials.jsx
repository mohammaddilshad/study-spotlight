import React from "react";
import "./testimonials.css";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// data
const data = [
  {
    image: AVTR1,
    name: "Olivia",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit aliquam alias assumenda. Natus facere nulla, minus soluta cupiditate animi consequatur iusto quaerat placeat ex! Illo enim in quos et!",
  },
  {
    image: AVTR2,
    name: "Dwayne",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit aliquam alias assumenda. Natus facere nulla, minus soluta cupiditate animi consequatur iusto quaerat placeat ex! Illo enim in quos et!",
  },
  {
    image: AVTR3,
    name: "John",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit aliquam alias assumenda. Natus facere nulla, minus soluta cupiditate animi consequatur iusto quaerat placeat ex! Illo enim in quos et!",
  },
  {
    image: AVTR4,
    name: "Aqsaa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit aliquam alias assumenda. Natus facere nulla, minus soluta cupiditate animi consequatur iusto quaerat placeat ex! Illo enim in quos et!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from Students</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
