import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {reviews} from "../constants";
import {styles} from "../styles";
import Button from "./Button";

const Reviews = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <h1 className={`${styles.mediumHeadText} my-10`}>What they've said</h1>

      <Swiper
        initialSlide={1}
        // effect={"coverflow"}
        slidesPerView={3}
        spaceBetween={40}
        grabCursor={true}
        loop={true}
        scrollbar={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.8,
        }}
        breakpoints={{
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          310: {
            slidesPerView: 1, // Display only 1 slide per view for screens with a width of 340 pixels and above
          },
          768: {
            slidesPerView: 1, // Display only 1 slide per view for screens with a width of 768 pixels and above
          },
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="background-color: hsl(12, 88%, 59%);"></span>`; // customize the bullet style here
          },
        }}
        modules={[Pagination]}
        className="w-full h-full "
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={`${index}`}
            className="flex flex-col items-center justify-center py-10"
          >
            <div className="py-16 px-8 relative w-full flex flex-col items-center justify-center  bg-[#ffefeb] rounded-2xl">
              <img
                // sm:w-[12%] md:w-[10%] w-[20%]
                className="absolute -top-10 bg-center w-20 object-contain  rounded-full"
                src={`../../images/${review.avatar}`}
                alt={`${review.avatar}`}
              />
              <h1 className={`${styles.smallHeadText}`}>{review.name}</h1>
              <p className={`${styles.sectionText} mt-8 md:mt-4 text-justify`}>
                {review.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button title="Get Started" />
    </section>
  );
};

export default Reviews;
