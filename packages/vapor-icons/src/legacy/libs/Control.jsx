import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Control(props) {
    return (
        <IconBase
            {...props}
            id="e1eefde0-87de-4d06-84ce-492402d8ff76"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 12"
        >
            <path d="M0,4,4,0,8,4Z" fill="#ced0da" />
            <path d="M0,8l4,4L8,8Z" fill="#ced0da" />
        </IconBase>
    );
}

Control.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Control.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Control;
