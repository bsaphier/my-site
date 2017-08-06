export const styles = {
  window: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  main: {
    display: 'inline-block',
    fontFamily: '"Roboto", sans-serif'
  },
  banner: {
    position: 'relative',
    background: 'none',
    textAlign: 'center',
    color: 'rgba(255, 68, 62, 1)',
    width: '100%',
    height: '100%',
    paddingTop: 0,
  },
  block: {
    display: 'flex',
    overflow: 'hidden',
    position: 'absolute'
  },
  cell: {
    position: 'absolute',
    left: '50%',
    willChange: 'transform',

    WebkitTransform: 'translate(-50%, -50%)',
    MozTransform: 'translate(-50%, -50%)',
    MsTransform: 'translate(-50%, -50%)',
    OTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    display: 'flex',
    textAlign: 'justify',
    textTransform: 'uppercase'
  },
  text: {
    margin: '0 auto',
    display: 'inline-block',
    whiteSpace: 'pre',
    background: 'linear-gradient(to top right, rgb(255, 68, 62) 62%, rgb(252, 255, 88) 162%)',

    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    MsTextFillColor: 'transparent',
    OTextFillColor: 'transparent',

    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    MsBackgroundClip: 'text',
    OBackgroundClip: 'text',
    backgroundClip: 'text'
  },
  socialButton: {
    borderRadius: '9px',
    boxShadow: '-1px 8px 13px -3px rgba(0, 0, 0, 0.2)'
  },
  footer: {
    width: '100%',
    // margin: '3rem auto',
    fontWeight: '900',
    position: 'absolute',
    textTransform: 'uppercase',
    textShadow: '-1px 2px 3px rgba(0, 0, 0, 0.62)',
    color: 'rgba(255, 68, 62, 0.8)',
  }
};
