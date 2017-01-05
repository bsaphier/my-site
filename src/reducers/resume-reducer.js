const initialState = {
  navbar: {
    root: '/resume',
    home: 'Home',
    about: 'About',
    work: 'Work',
    education: 'Education',
    skills: 'Skills',
    portfolio: 'Portfolio'
  },
  work: { text: 'work' },
  basics: {
    name: 'Benjamin Saphier',
    text: 'about'
  },
  skills: { text: 'skills' },
  education: { text: 'education' },
  portfolio: { text: 'portfolio' }
};

export default (state = initialState) => (state);
