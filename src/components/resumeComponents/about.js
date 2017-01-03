import React from 'react';

const About = ({ content }) => {
  return (
    <section id="about">
      <a className="smoothscroll" href="#work">
        <h1 className="center shadow">
          {content.text}
        </h1>
      </a>
    </section>
  );
};

export default About;
