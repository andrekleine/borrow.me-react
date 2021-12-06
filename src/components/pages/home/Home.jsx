import React, { useState, useEffect } from 'react';

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
        <div className="item">
          {lastBooksReadFriends.map((bookObj) => {
            return <img src={bookObj.imgLink} alt="Minha Figura" />;
          })}
        </div>
      </div>
    </PrivateTemplate>
  );
};

export default Home;
