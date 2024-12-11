import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Show(props) {
    return (
        <IconBase
            {...props}
            id="81b46e45-cd04-4a4d-930d-c592cd1f8372"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M0,0H16V16H0Z" fill="none" />
            <path
                d="M8,10.07145a2,2,0,1,1,2-2,2.00009,2.00009,0,0,1-2,2m0,2a4,4,0,1,0-4-4,4.00018,4.00018,0,0,0,4,4m-7.5-4q3.36-4.9995,7.5-5,4.1415,0,7.5,5-3.3585,4.9995-7.5,5-4.14,0-7.5-5"
                fillRule="evenodd"
            />
        </IconBase>
    );
}

Show.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Show.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Show;
