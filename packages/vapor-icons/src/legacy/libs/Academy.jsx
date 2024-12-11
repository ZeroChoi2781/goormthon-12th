import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Academy(props) {
    const { color } = props;
    const academyStyle = {
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
            <polygon
                style={academyStyle}
                points="20.34 35.45 11.05 37.48 13.08 28.19 28.74 12.53 36 19.79 20.34 35.45"
            />
            <path
                style={academyStyle}
                d="M30.59,11.83h7.15a1.56,1.56,0,0,1,1.56,1.56V16.9a0,0,0,0,1,0,0H29a0,0,0,0,1,0,0V13.39A1.56,1.56,0,0,1,30.59,11.83Z"
                transform="translate(20.17 -19.95) rotate(45)"
            />
            <line
                style={academyStyle}
                x1="13.08"
                y1="28.19"
                x2="20.34"
                y2="35.45"
            />
            <line
                style={academyStyle}
                x1="11.06"
                y1="40.41"
                x2="32.61"
                y2="40.41"
            />
        </IconBase>
    );
}

Academy.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Academy.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Academy;
