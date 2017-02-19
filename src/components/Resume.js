import React from 'react';

import Header from '../containers/Header';

import Banner from './Banner';
import Navbar from './navbarComponents';
import ChangeSection from './ChangeSection';
// import ResumeComponents from './resumeComponents';


const Resume = ({ resume }) => {
  return (
    <div>
      <Header id={ 'resume-home' }>
        <Navbar navbar={ resume.navbar } />
        <Banner
          title={ resume.basics }
          text={ resume.text }
        />
        {/* <ChangeSection link="about" /> */}
      </Header>
      {/* <ResumeComponents
        work={ resume.work }
        basics={ resume.basics }
        skills={ resume.skills }
        education={ resume.education }
        portfolio={ resume.portfolio }
      /> */}
    </div>
  );
};

export default Resume;
