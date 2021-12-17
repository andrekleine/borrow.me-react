import React from 'react';
import { useParams } from 'react-router-dom';

import './Section.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import BookGrid from './BookGrid';

const Section = () => {
  const { sectionName } = useParams();

  return (
    <PrivateTemplate>
      <div className="section container-fluid">
        <h1>{sectionName}</h1>
        <BookGrid sectionName={sectionName} />
      </div>
    </PrivateTemplate>
  );
};

export default Section;
