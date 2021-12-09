import React, { useState } from 'react';

import './Search.css';

import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import Form from './Form';
import BookGrid from './BookGrid';

import getGoogleBooks from '../../../services/googleBooks';

const Search = () => {
  const [searchValues, setSearchValues] = useState({
    title: '',
    author: '',
  });

  const [foundBookObjs, setFoundBookObjs] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValues({ ...searchValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, author } = searchValues;
    if (title || author) {
      getGoogleBooks(title, author)
        .then((bookObjsArr) => {
          setFoundBookObjs(bookObjsArr);
        })
        .catch((err) => {
          throw new Error({ message: err });
        });
    }

    searchValues.title = '';
    searchValues.author = '';
  };

  return (
    <PrivateTemplate>
      <div className="container search-container">
        <h1 className="search-title">
          Find books by title and/or by author name:
        </h1>
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          searchValues={searchValues}
        />
        <BookGrid foundBookObjs={foundBookObjs} />
      </div>
      <div className="footer" />
    </PrivateTemplate>
  );
};

export default Search;
