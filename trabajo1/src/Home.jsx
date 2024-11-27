import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../src/style.css'

import Card from "./Card";
import SectionForm from "./SectionForm";

export default function Home() {
  const cards = Array(9).fill(0);

  return (
    <div>
      <Swiper
        slidesPerView={6} 
        spaceBetween={0}
        className="mySwiper"
        style={{ marginLeft: "40px" }}
        breakpoints={{
          320: {
            slidesPerView: 1, 
          },
          576: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4, 
          },
          1200: {
            slidesPerView: 5, 
          },
        }}
      >
        {cards.map((_, index) => (
          <SwiperSlide key={index} >
            <Card  />
          </SwiperSlide>
        ))}
      </Swiper>
      <SectionForm />
    </div>
  );
}
