import React from 'react';

export const Modal = ({ onClose, children }) => (
  <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  </div>
);
