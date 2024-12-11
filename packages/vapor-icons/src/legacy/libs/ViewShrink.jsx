import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function ViewShrink(props) {
    return (
        <IconBase
            {...props}
            id="1b8681ff-8e2b-490e-8963-270f872f5f47"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <defs>
                <clipPath id="a01c8a00-4a69-4f09-833f-e8b7199aa5b6">
                    <rect width="16" height="16" fill="none" />
                </clipPath>
            </defs>
            <g clipPath="url(#a01c8a00-4a69-4f09-833f-e8b7199aa5b6)">
                <path d="M13.6066,6.3933,12.0733,4.86,14,2.9467,13.0533,2,11.14,3.9267,9.6066,2.3933v4Zm-7.2133-4L4.86,3.9267,2.9466,2,2,2.9467,3.9266,4.86,2.3933,6.3933h4Zm-4,7.2134L3.9266,11.14,2,13.0533,2.9466,14,4.86,12.0733l1.5333,1.5334v-4Zm7.2133,4L11.14,12.0733,13.0533,14,14,13.0533,12.0733,11.14l1.5333-1.5333h-4Z" />
            </g>
            <g clipPath="url(#a01c8a00-4a69-4f09-833f-e8b7199aa5b6)">
                <path d="M0,0H16V16H0Z" fill="none" />
            </g>
        </IconBase>
    );
}

ViewShrink.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

ViewShrink.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default ViewShrink;
