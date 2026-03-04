import React from 'react';

export const Button = ({ children, variant = 'primary', ...props }) => (
  <button className={`btn${variant === 'secondary' ? ' btn-secondary' : ''}`} {...props}>
    {children}
  </button>
);
