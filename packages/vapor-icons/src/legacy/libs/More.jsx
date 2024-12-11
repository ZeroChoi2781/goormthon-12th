import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function More(props) {
    const { color } = props;
    return (
        <IconBase
            {...props}
            id="abae7265-d86f-4afc-bc36-ad71c61cb971"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
        >
            <path
                d="M9,4.25a2,2,0,1,1,2-2A2,2,0,0,1,9,4.25ZM11,9a2,2,0,1,0-2,2A2,2,0,0,0,11,9Zm0,6.75a2,2,0,1,0-2,2A2,2,0,0,0,11,15.75Z"
                fill={color === 'currentColor' ? '#90929e' : color}
            />
        </IconBase>
    );
}

More.defaultProps = {
    size: '1rem',
    color: '#90929e',
    onClick: () => {},
    style: {},
};

More.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default More;
