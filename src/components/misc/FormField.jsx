import React from 'react';

const FormField = ({
  id,
  label,
  type,
  name,
  onChange,
  value,
  required,
  hint,
  placeholder,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
      />
      {hint ? <div className="form-text">{hint}</div> : null}
    </div>
  );
};

export default FormField;
