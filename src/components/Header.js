//import react
import React from 'react';

//import Navigation component
import Navigation from './Navigation';

//export Header function
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
