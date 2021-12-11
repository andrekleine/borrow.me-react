import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/swiper.min.css';

const BookSwiper = ({ bookArray }) => {
  return (
    <Swiper spaceBetween={15} slidesPerView={2.9}>
      {bookArray.map((bookObj) => {
        return (
          <SwiperSlide key={bookObj.googleID}>
            <div className="book-container-height">
              <Link to={`/books/${bookObj.googleID}`}>
                <img
                  className="img-fluid book-cover"
                  src={bookObj.imgLink}
                  alt={bookObj.title}
                />
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BookSwiper;
