import React from 'react';

const ChangeSection = ({ link }) => {
  return (
    <p className="scrolldown">
      <a className="smoothscroll" href={`#${link}`}>
        replace this text
      </a>
    </p>
  );
};

export default ChangeSection;
