import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Indeterminate(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <rect
                    width="16"
                    height="16"
                    style={{ fill: '#fff', opacity: 0 }}
                />
                <path d="M4,8a1.00281,1.00281,0,0,1,.997-1H11.003a1,1,0,0,1,0,2H4.997A.99606.99606,0,0,1,4,8Z" />
            </g>
        </IconBase>
    );
}

Indeterminate.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Indeterminate.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Indeterminate;
