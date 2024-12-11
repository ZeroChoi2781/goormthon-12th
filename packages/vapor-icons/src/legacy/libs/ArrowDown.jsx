import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function ArrowDown(props) {
    return (
        <IconBase
            {...props}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <polygon points="11.06 9.148 8.87 11.333 8.87 2.15 7.13 2.15 7.13 11.333 4.94 9.148 3.788 10.3 8 14.512 12.212 10.3 11.06 9.148" />
        </IconBase>
    );
}

ArrowDown.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

ArrowDown.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default ArrowDown;
