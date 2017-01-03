import React from 'react';

import Header from './Header';
import Banner from './Banner';
import ChangeSection from './ChangeSection';
import NavBarContainer from '../containers/NavBarContainer';
import ResumeComponents from './resumeComponents';

const Resume = ({ resume }) => {
  return (
    <div>
      <Header>
        <NavBarContainer />
        <Banner
          basics={ resume.basics }
        />
        <ChangeSection link="about" />
      </Header>
      <ResumeComponents
        work={ resume.work }
        basics={ resume.basics }
        skills={ resume.skills }
        education={ resume.education }
        references={ resume.references }
        portfolio={ resume.portfolio }
      />
    </div>
  );
};

export default Resume;
