import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Cancel(props) {
    return (
        <IconBase
            {...props}
            id="52893147-86f9-432f-a655-2a8d753b0f46"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M0,0H16V16H0Z" fill="none" />
            <path d="M8,1.3333A6.66665,6.66665,0,1,0,14.66669,8,6.66908,6.66908,0,0,0,8,1.3333Zm3.7699,9.4965-.94.94L8,8.9401,5.17029,11.7698l-.9401-.94L7.06,8,4.23019,5.1702l.9401-.9401L8,7.0599l2.8299-2.8298.94.9401L8.94009,8Z" />
        </IconBase>
    );
}

Cancel.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Cancel.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Cancel;
