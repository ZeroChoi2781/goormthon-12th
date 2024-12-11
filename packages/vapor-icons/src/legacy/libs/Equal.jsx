import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Equal(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <rect
                    style={{ fill: '#fff', opacity: 0 }}
                    width="16"
                    height="16"
                />
                <polygon
                    style={{ fillRule: 'evenodd' }}
                    points="8.858 10.75 7.144 10.75 7.144 10.747 2 10.747 2 9.033 7.144 9.033 7.144 9.03 8.858 9.03 8.858 9.033 14 9.03 14 10.747 8.858 10.747 8.858 10.75"
                />
                <polygon
                    style={{ fillRule: 'evenodd' }}
                    points="8.858 6.97 7.144 6.97 7.144 6.967 2 6.967 2 5.253 7.144 5.253 7.144 5.25 8.858 5.25 8.858 5.253 14 5.25 14 6.967 8.858 6.967 8.858 6.97"
                />
            </g>
        </IconBase>
    );
}

Equal.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Equal.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Equal;
