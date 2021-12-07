import React, { useState, useEffect } from 'react';

import './Search.css';
import PrivateTemplate from '../../templates/Private/PrivateTemplate';
import FormField from '../../misc/FormField';

import getGoogleBooks from '../../../services/googleBooks';

const Search = () => {
  const [searchValues, setSearchValues] = useState({
    title: 'flowers',
    author: 'keyes',
  });

  const [foundBookObjs, setFoundBookObjs] = useState([]);

  useEffect(() => {
    const { title, author } = searchValues;
    getGoogleBooks(title, author)
      .then((bookObjsArr) => {
        setFoundBookObjs(bookObjsArr);
      })
      .catch((err) => {
        throw new Error({ message: err });
      });
  }, [searchValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValues({ ...searchValues, [name]: value });
  };

  return (
    <PrivateTemplate>
      <div className="search-bar">
        <h1>Find books by title and / or author name: </h1>
        <form className="form">
          <FormField
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={searchValues.title}
          />

          <FormField
            name="author"
            placeholder="Author"
            onChange={handleChange}
            value={searchValues.author}
          />
        </form>
      </div>
      <div>
        {foundBookObjs.map((bookObj) => {
          return <h3 key={bookObj.id}>{bookObj.volumeInfo.title}</h3>;
        })}
      </div>
    </PrivateTemplate>
  );
};

export default Search;
