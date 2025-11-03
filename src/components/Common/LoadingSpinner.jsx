import React from 'react';

export default function LoadingSpinner({ size = 'medium' }) {
  return (
    <div className={`spinner spinner-${size}`}>
      <div className="spinner-circle"></div>
      <p>Cargando...</p>
    </div>
  );
}