import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function University(props) {
    const { color } = props;
    const univStyle = {
        fill: 'none',
        stroke: color,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    };
    return (
        <IconBase
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                style={univStyle}
                d="M13.13,25.8v9.42a1.11,1.11,0,0,0,.59,1L24.5,41.78a1.1,1.1,0,0,0,1,0L36.28,36.2a1.11,1.11,0,0,0,.59-1V25.8"
            />
            <polyline
                style={univStyle}
                points="13.13 25.8 13.13 32.67 25 38.81 36.87 32.67 36.87 25.8"
            />
            <line style={univStyle} x1="25" y1="31.96" x2="25" y2="41.9" />
            <path
                style={univStyle}
                d="M24.37,8.25,4.15,18.73a1.36,1.36,0,0,0,0,2.42L24.37,31.62a1.34,1.34,0,0,0,1.26,0L45.85,21.15a1.36,1.36,0,0,0,0-2.42L25.63,8.25A1.4,1.4,0,0,0,24.37,8.25Z"
            />
            <line style={univStyle} x1="6.45" y1="22.34" x2="6.45" y2="30.01" />
            <polyline
                style={univStyle}
                points="5.68 34.19 3.93 38.34 6.45 38.34 6.48 38.34 9 38.34 7.25 34.19"
            />
            <line style={univStyle} x1="6.46" y1="32.33" x2="6.45" y2="32.3" />
            <circle style={univStyle} cx="6.45" cy="32.3" r="2.04" />
        </IconBase>
    );
}

University.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

University.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default University;
