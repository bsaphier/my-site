import React from 'react';

const Education = ({ content }) => {
  return (
    <section id="education">
      <a className="smoothscroll" href="#skills">
        <h1 className="center shadow">
          {content.text}
        </h1>
      </a>
    </section>
  );
};

export default Education;
