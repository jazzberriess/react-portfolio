import React from 'react';

import Navigation from './Navigation';

import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/style.css';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Christi Scappatura</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}
