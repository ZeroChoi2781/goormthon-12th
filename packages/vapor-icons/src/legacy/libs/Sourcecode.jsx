import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Sourcecode(props) {
    return (
        <IconBase
            {...props}
            id="b2e994b7-70d1-4214-ba50-88c71f256e19"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.00003 16"
        >
            <path d="M0,0H16V16H0Z" fill="none" />
            <path d="M6.26673,11.0667,3.2,8,6.26673,4.9333,5.3333,4l-4,4,4,4Zm3.4666,0L12.8,8,9.73333,4.9333,10.66673,4l4,4-4,4Z" />
        </IconBase>
    );
}

Sourcecode.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Sourcecode.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Sourcecode;
