"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";

const Testimonial = ({ data }) => {
  return (
    <section className="testimonial section anime" target="fadeUp">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My Client Saying</span>
      <div className="testimonial__container cus_container swiper-container">
        <Swiper
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={48}
          pagination={true}
          breakpoints={{
            568: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Autoplay]}
          className=""
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={item.img}
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">{item.name}</h3>
                      <span className="testimonial__client">{item.title}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1">
                      <FaRegStar className="testimonial__icon-star" />
                      <FaRegStar className="testimonial__icon-star" />
                      <FaRegStar className="testimonial__icon-star" />
                      <FaRegStar className="testimonial__icon-star" />
                      <FaRegStar className="testimonial__icon-star" />
                    </div>
                  </div>
                </div>
                <p className="testimonial__description">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="swiper-pagination swiper-pagination-testimonial" /> */}
      </div>
    </section>
  );
};

export default Testimonial;
