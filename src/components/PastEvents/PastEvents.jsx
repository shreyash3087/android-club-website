import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import "./PastEvents.css";
import slide_image_1 from '/Events_Page/Android_Fusion/AndroidFusion.jpg';
import slide_image_2 from '/Events_Page/DSA_Tussle/DSA_Tussle.jpg';
import slide_image_3 from '/Events_Page/Meet_and_Greet/Meet_and_greet.jpg';
import slide_image_4 from '/Events_Page/Other_Events/CulturalCraft.jpg';
import slide_image_5 from '/Events_Page/AndroSeries2/AndroSeries2.jpg';
import slide_image_6 from '/Events_Page/App_A_Thon/App_A_Thon.jpg';
import slide_image_7 from '/Events_Page/Bug_Off/Bug Off.jpg';
import slide_image_8 from '/Events_Page/Other_Events/Front_End_Sprint.jpg';
import slide_image_9 from '/Events_Page/Other_Events/Code-Roid.png';
import slide_image_10 from '/Events_Page/Other_Events/V-Code.png';

function PastEvents() {
  return (
    <div className="pastEventsContainer">
      <h1 className="heading">Past Events</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Link to="/events/event1">
            <img src={slide_image_1} alt="Android Fusion" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/events/event2">
            <img src={slide_image_2} alt="DSA Tussle" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/events/event3">
            <img src={slide_image_3} alt="Meet and Greet" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/events/event4">
            <img src={slide_image_4} alt="AndroSeries 2.0" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/events/event5">
            <img src={slide_image_5} alt="Cultural Craft" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="App-A-Thon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="Bug Off" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="Front-End Sprint" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="Code-Roid" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="V-Code" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default PastEvents;
