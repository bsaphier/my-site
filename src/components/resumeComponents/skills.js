import React from 'react';

const Skills = ({ content }) => {
  return (
    <section id="skills">
      <a className="smoothscroll" href="#portfolio">
        <h1 className="center shadow">
          {content.text}
        </h1>
      </a>
    </section>
  );
};

export default Skills;
