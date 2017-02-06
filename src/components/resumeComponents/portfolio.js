import React from 'react';

const Portfolio = ({ content }) => {
  return (
    <section id="portfolio">
      <a className="smoothscroll" href="#resume">
        <h1 className="center shadow">
          {content.text}
        </h1>
      </a>
    </section>
  );
};

export default Portfolio;
