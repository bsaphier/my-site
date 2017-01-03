import React from 'react';

const Footer = ({ content }) => {
  return (
    <footer>
      <div className="row">
        <div className="columns">
          <ul>
            <li><p className="wavy--shit">{content.text}</p></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
