import React from 'react';

const Work = ({ content }) => {
  return (
    <section id="work">
      <a className="smoothscroll" href="#education">
        <h1 className="center shadow">
          {content.text}
        </h1>
      </a>
    </section>
  );
};

export default Work;
