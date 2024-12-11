import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Facebook(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M11.2,8.6l0.3-2.5H9.1V4.5c0-0.4,0.1-0.7,0.3-0.9c0.2-0.2,0.5-0.3,1-0.3l1.3,0V1.1C11.2,1,10.5,1,9.7,1C8.8,1,8,1.3,7.4,1.8C6.8,2.4,6.5,3.2,6.5,4.3v1.8H4.4v2.5h2.2V15h2.6V8.6H11.2z" />
                <path style={{ fill: 'none', opacity: 0 }} d="M0,0H16V16H0Z" />
            </g>
        </IconBase>
    );
}

Facebook.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Facebook.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Facebook;
