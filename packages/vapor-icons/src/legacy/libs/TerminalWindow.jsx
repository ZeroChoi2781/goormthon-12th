import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function TerminalWindow(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <polygon points="4.9 11.1 7.3 9.3 7.3 8.3 4.9 6.4 4.3 7.4 6 8.8 4.3 10.1" />
            <rect x="8.2" y="10.1" width="3.5" height="1" />
            <path d="m13.4 1.8h-10.8c-0.9 0-1.6 0.7-1.6 1.5v9.3c0 0.9 0.7 1.6 1.6 1.6h10.9c0.9 0 1.6-0.7 1.6-1.6v-9.3c-0.1-0.8-0.8-1.5-1.7-1.5zm0 10.9h-10.8v-7.8h10.9v7.8z" />
            <defs>
                <filter id="b" filterUnits="userSpaceOnUse">
                    <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
                </filter>
            </defs>
            <mask id="a" maskUnits="userSpaceOnUse">
                <g filter="url(#b)">
                    <path d="m4.9 11.1-0.6-1 1.7-1.3-1.7-1.4 0.6-1 2.3 1.8v1l-2.3 1.9zm3.3 0v-1h3.5v1h-3.5zm-5.6 1.6h10.9v-7.8h-10.9v7.8zm10.8-10.9h-10.8c-0.9 0-1.6 0.7-1.6 1.5v9.3c0 0.9 0.7 1.6 1.6 1.6h10.9c0.9 0 1.6-0.7 1.6-1.6v-9.3c-0.1-0.8-0.8-1.5-1.7-1.5z" />
                </g>
            </mask>
        </IconBase>
    );
}

TerminalWindow.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

TerminalWindow.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default TerminalWindow;
