import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';

import './Home.css';
import PrivateTemplate from '../../templates/Private/PrivateTemplate';

import { home } from '../../../services/api';

const Home = () => {
  const [lastBooksReadFriends, setLastBooksReadFriends] = useState([]);
  const [lastBooksFriendsLend, setLastBooksFriendsLend] = useState([]);
  const [lastBooksIRead, setLastBooksIRead] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    home(token)
      .then((response) => {
        setLastBooksReadFriends(response[0]);
        setLastBooksFriendsLend(response[1]);
        setLastBooksIRead(response[2]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PrivateTemplate>
      <h1>Last Books Friends Read:</h1>
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {lastBooksReadFriends.map((bookObj) => {
            return (
              <SwiperSlide>
                <img src={bookObj.imgLink} alt="Minha Figura" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </PrivateTemplate>
  );
};

export default Home;
