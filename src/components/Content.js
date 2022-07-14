//import react and useState method
import React, { useState } from 'react';

//import components
import Header from './Header';
import Footer from './Footer';

//import pages
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

//import skeleton CSS and stylesheet
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/style.css';

//export PortfolioContainer function
export default function Content() {
  const [currentPage, setCurrentPage] = useState('Home');

  //render page conditionally based on current page location
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }

    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}
