import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Section.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import BookGrid from './BookGrid';

import {
  newFromFriends,
  friendsWillLend,
  readRecently,
} from '../../../services/api';

const Section = () => {
  const { sectionName } = useParams();
  const token = localStorage.getItem('token');

  const [apiCall, setApiCall] = useState();

  useEffect(() => {
    switch (sectionName) {
      case 'New from friends':
        setApiCall(newFromFriends(token));
        break;
      case 'Friends will lend':
        setApiCall(friendsWillLend(token));
        break;
      case 'I read lately':
        setApiCall(readRecently(token));
        break;
      default:
        setApiCall('');
    }
  }, []);

  return apiCall ? (
    <PrivateTemplate>
      <div className="section container-fluid">
        <h1>{sectionName}</h1>
        <BookGrid apiCall={apiCall} />
      </div>
    </PrivateTemplate>
  ) : (
    <p />
  );
};

export default Section;
