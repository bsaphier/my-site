import React      from 'react';
import { styles } from '../styles';


const IconButton = ({ url, name, icon, style, target }) => {
    const iconStyle = { ...styles.iconStyle, ...style };
    return (
        <a
            className="icon-button"
            title={name}
            href={url || null}
            target={target || '_blank'}>
            <i className={`icon-${icon}`} style={iconStyle} />
        </a>
    );
};

export default IconButton;
