import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

const defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
    className: '',
};

const propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
    className: PropTypes.string,
};

function ChevronUp(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M4.94,10.2733,8,7.22l3.06,3.0533.94-.94-4-4-4,4Z" />
                <path style={{ fill: 'none' }} d="M0,0H16V16H0Z" />
            </g>
        </IconBase>
    );
}

ChevronUp.defaultProps = defaultProps;
ChevronUp.propTypes = propTypes;

export default ChevronUp;
