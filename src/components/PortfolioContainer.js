import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState('About');

  // const renderPage = () => {
  // if (currentPage === 'About') {
  //   return <About />;
  // } else {
  //   return <Contact />;
  // }

  return (
    <div id="root">
      {' '}
      <About />{' '}
    </div>
  );
  // };

  // const handlePageChange = (page) => setCurrentPage(page);
  // return { renderPage };
}