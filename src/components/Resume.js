import React from 'react';

import ResumeComponents from './resumeComponents';

const Resume = ({ resume }) => {
  return (
    <div>
      <h1 className="top center shadow">Resume</h1>
      <ResumeComponents
        work={ resume.work }
        basics={ resume.basics }
        skills={ resume.skills }
        education={ resume.education }
        languages={ resume.languages }
        references={ resume.references }
        portfolio={ resume.publications }
      />
    </div>
  );
};

export default Resume;
