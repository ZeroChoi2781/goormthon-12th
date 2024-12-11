import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Stop(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path style={{ fill: '#fff', opacity: 0 }} d="M0,0H16V16H0Z" />
                <path d="M4,4h8v8H4Z" />
            </g>
        </IconBase>
    );
}

Stop.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Stop.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Stop;
