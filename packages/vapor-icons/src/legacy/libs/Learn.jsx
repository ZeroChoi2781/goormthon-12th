import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Learn(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="m13.7 11.5c-0.7-0.2-1.5-0.3-2.2-0.3-1.1 0-2.6 0.4-3.5 1v-7.4c0.9-0.5 2.4-1 3.5-1 0.8 0 1.5 0.1 2.2 0.3v7.4zm0-8.6c-0.7-0.2-1.5-0.3-2.2-0.3-1.2 0-2.6 0.3-3.5 1-0.9-0.7-2.3-1-3.5-1s-2.6 0.3-3.5 1v9.3c0 0.2 0.2 0.3 0.3 0.3h0.2c0.9-0.4 2.1-0.7 3-0.7 1.2 0 2.6 0.3 3.5 1 0.9-0.5 2.4-1 3.5-1 1 0 2.1 0.2 3 0.7h0.2c0.2 0 0.3-0.2 0.3-0.3v-9.4c-0.4-0.2-0.8-0.4-1.3-0.6z" />
        </IconBase>
    );
}

Learn.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Learn.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Learn;
