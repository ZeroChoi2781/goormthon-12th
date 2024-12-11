import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Pen(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M2,11.5V14h2.5l7.4-7.4L9.4,4.1L2,11.5z M13.8,4.7c0.3-0.3,0.3-0.7,0-0.9l-1.6-1.6c-0.3-0.3-0.7-0.3-0.9,0l-1.2,1.2l2.5,2.5L13.8,4.7z" />
                <path style={{ fill: 'none' }} d="M0,0h16v16H0V0z" />
            </g>
        </IconBase>
    );
}

Pen.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Pen.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Pen;
