import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import User from './User';

import { getOneBook } from '../../../../services/api';

const FriendsWhoLend = () => {
  const token = localStorage.getItem('token');
  const { googleId } = useParams();

  const [people, setPeople] = useState([]);

  useEffect(async () => {
    const response = await getOneBook(googleId, token);
    const foundPeople = response[1].map((person) => {
      return person.owner;
    });
    setPeople(foundPeople);
  }, []);

  return people[0] ? (
    <div className="friends-who-lend">
      <h5 className="my-review-title">Friends who lend this book:</h5>
      {people.map((person) => {
        return (
          <div key={person._id}>
            <User id={person} key={person} />
          </div>
        );
      })}
    </div>
  ) : (
    <p className="none-friends">None of your friends have this book to lend :´(</p>
  );
};

export default FriendsWhoLend;
