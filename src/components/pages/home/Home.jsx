import React, { useState, useEffect } from 'react';
import SectionRow from './SectionRow';
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
        throw err;
      });
  }, []);

  return (
    <PrivateTemplate>
      <div className="home-content">
        <SectionRow title="New from friends" bookArray={lastBooksReadFriends} />
        <SectionRow
          title="Friends will lend"
          bookArray={lastBooksFriendsLend}
        />
        <SectionRow title="I read lately" bookArray={lastBooksIRead} />
      </div>
    </PrivateTemplate>
  );
};

export default Home;
