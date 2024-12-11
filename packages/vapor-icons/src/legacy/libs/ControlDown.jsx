import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function ControlDown(props) {
    return (
        <IconBase
            {...props}
            id="3b1d72ea-27b0-4d08-a273-f33ed7fd4422"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 12"
        >
            <path d="M0,4,4,0,8,4Z" fill="#313338" />
            <path d="M0,8l4,4L8,8Z" fill="#ced0da" />
        </IconBase>
    );
}

ControlDown.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

ControlDown.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default ControlDown;
