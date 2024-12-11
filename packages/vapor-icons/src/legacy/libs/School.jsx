import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function School(props) {
    const { color } = props;
    const schoolStyle = {
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
                style={schoolStyle}
                points="38.06 13.79 25.01 13.79 25.01 6.54 38.06 6.54 34.44 10.16 38.06 13.79"
            />
            <line style={schoolStyle} x1="25" y1="6.54" x2="25" y2="18.95" />
            <circle style={schoolStyle} cx="25.21" cy="29.09" r="4.5" />
            <polyline
                style={schoolStyle}
                points="25.21 26.5 25.21 29.09 22.81 29.09"
            />
            <path
                style={schoolStyle}
                d="M35.2,27l-9.45-7.72a1.18,1.18,0,0,0-1.5,0L14.8,27H9.31a1.18,1.18,0,0,0-1.18,1.18V42.28a1.18,1.18,0,0,0,1.18,1.18H40.69a1.18,1.18,0,0,0,1.18-1.18V28.21A1.18,1.18,0,0,0,40.69,27Z"
            />
            <rect
                style={schoolStyle}
                x="19.38"
                y="37.72"
                width="11.23"
                height="5.74"
            />
            <line style={schoolStyle} x1="25" y1="37.72" x2="25" y2="43.46" />
        </IconBase>
    );
}

School.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

School.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default School;
