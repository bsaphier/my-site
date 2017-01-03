import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import Work from './work';
// import About from './about';
// import Skills from './skills';
import Footer from './footer';
// import Education from './education';
// import Portfolio from './portfolio';
// import References from './references';


const ResumeComponents = ({ work, basics, skills, education, languages, references, portfolio }) => {
  return (
    <div>
      {/* <About content={ basics } /> */}
      {/* <Work content={ work } /> */}
      {/* <Education content={ education } /> */}
      {/* <Skills content={ skills } /> */}
      {/* <Portfolio content={ portfolio } /> */}
      {/* <References content={ references } /> */}
      <Footer content={ basics } />
    </div>
  );
};

export default ResumeComponents;
