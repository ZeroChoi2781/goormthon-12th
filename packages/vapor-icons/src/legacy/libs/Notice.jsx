import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Notice(props) {
    return (
        <IconBase
            {...props}
            id="0a56a0d6-72cf-4405-a8de-ff907a059323"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M16,16H0V0H16Z" fill="none" />
            <path d="M8,14.6666A6.66665,6.66665,0,1,0,1.3333,8,6.669,6.669,0,0,0,8,14.6666Zm-.6667-10H8.6666v4H7.3333Zm0,5.3334H8.6666v1.3333H7.3333Z" />
        </IconBase>
    );
}

Notice.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Notice.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Notice;
