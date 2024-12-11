import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Eraser(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M1.7072,10.9904,4.7169,14H7.887l6.40569-6.4057a.99964.99964,0,0,0,0-1.4138L10.4049,2.2928a.99961.99961,0,0,0-1.4137,0L1.7072,9.5767A.99977.99977,0,0,0,1.7072,10.9904ZM6.3178,6.9031l3.3647,3.3647L7.26339,12.687,5.3407,12.6868,2.9374,10.2836Z" />
            </g>
        </IconBase>
    );
}

Eraser.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Eraser.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Eraser;
