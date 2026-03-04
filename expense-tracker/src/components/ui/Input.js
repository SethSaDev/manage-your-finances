import React from 'react';

export const Input = ({ label, id, ...props }) => (
  <div className="form-control">
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} {...props} />
  </div>
);
