import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';

const BookSwiper = ({ bookArray }) => {
  return (
    <Swiper spaceBetween={15} slidesPerView={2.9}>
      {bookArray.map((bookObj) => {
        return (
          <SwiperSlide key={bookObj._id}>
            <div className="book-container-width">
              <div className="book-container-height">
                <img
                  className="img-fluid book-cover"
                  src={bookObj.imgLink}
                  alt={bookObj.title}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BookSwiper;
