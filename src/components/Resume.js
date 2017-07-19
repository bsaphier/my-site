import React from 'react';

import Banner from './Banner';
import Section from './Section';


const Resume = ({ resume, ...props }) => {
  // return (
  //   <div>
  //     <Header id={ 'resume-home' }>
  //       <Navbar navbar={ resume.navbar } />
  //       <Banner
  //         title={ resume.basics }
  //         text={ resume.text }
  //       />
  //       <ChangeSection link="about" />
  //     </Header>
  //     <ResumeComponents
  //       work={ resume.work }
  //       basics={ resume.basics }
  //       skills={ resume.skills }
  //       education={ resume.education }
  //       portfolio={ resume.portfolio }
  //     />
  //   </div>
  // );
  return (
    <Section>
      <Banner {...props} />
    </Section>
  );
};

export default Resume;
