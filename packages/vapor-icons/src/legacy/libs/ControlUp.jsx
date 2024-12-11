import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function ControlUp(props) {
    return (
        <IconBase
            {...props}
            id="b6d430ab-300f-4acc-b6bc-011d95aa4464"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 12"
        >
            <path d="M0,4,4,0,8,4Z" fill="#ced0da" />
            <path d="M0,8l4,4L8,8Z" fill="#313338" />
        </IconBase>
    );
}

ControlUp.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

ControlUp.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default ControlUp;
