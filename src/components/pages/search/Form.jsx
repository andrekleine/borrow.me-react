import React from 'react';
import './Form.css';
import FormField from '../../misc/FormField';

const Form = ({ handleSubmit, handleChange, searchValues }) => {
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <FormField
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={searchValues.title}
        className="search-form-field"
      />

      <FormField
        name="author"
        placeholder="Author"
        onChange={handleChange}
        value={searchValues.author}
        className="search-form-field"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Form;
