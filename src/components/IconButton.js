import React from 'react';


const styles = {

  iconStyle: {
    width: '1.5em',
    height: '1.5em',
    lineHeight: '1.5em',
    borderRadius: '50%',
    color: 'rgb(255, 255, 255)',
    background: 'rgba(45, 45, 45, 1)',

/* -~- styling & comments from the fontello.com package -~- */
    fontFamily: 'fontello',
    fontStyle: 'normal',
    fontWeight: 'normal',
    speak: 'none',
    display: 'block',
    textDecoration: 'inherit',
    textAlign: 'center',
    fontVariant: 'normal',
    textTransform: 'none',
    fontSize: '200%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }
};


const IconButton = ({ url, name, icon, style, target }) => {

  const iconStyle = { ...styles.iconStyle, ...style };

  return (
    <a
      className="icon-button"
      title={name}
      href={url || null}
      target={target || '_blank'}
      >
      <i className={`icon-${icon}`} style={iconStyle} />
    </a>
  );
};

export default IconButton;
