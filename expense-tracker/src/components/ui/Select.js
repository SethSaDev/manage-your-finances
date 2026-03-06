import React from 'react';

export const Select = ({ label, id, options, ...props }) => (
  <div className="form-control">
    {label && <label htmlFor={id}>{label}</label>}
    <select id={id} {...props}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);
