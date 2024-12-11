import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function HelpCircle(props) {
    return (
        <IconBase
            {...props}
            id="b7a96494-c03c-4173-9aeb-a7701d3c76fd"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M0,0H16V16H0Z" fill="none" />
            <path d="M8,1.3333A6.66665,6.66665,0,1,0,14.6667,8,6.66916,6.66916,0,0,0,8,1.3333Zm.6667,11.3333H7.3333V11.3333H8.6667ZM10.0467,7.5l-.6.6133A2.26963,2.26963,0,0,0,8.6667,10H7.3333V9.6666a2.68316,2.68316,0,0,1,.78-1.8866L8.94,6.94A1.30348,1.30348,0,0,0,9.3333,6,1.3333,1.3333,0,1,0,6.6667,6H5.3333a2.6667,2.6667,0,0,1,5.3334,0A2.12148,2.12148,0,0,1,10.0467,7.5Z" />
        </IconBase>
    );
}

HelpCircle.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

HelpCircle.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default HelpCircle;
