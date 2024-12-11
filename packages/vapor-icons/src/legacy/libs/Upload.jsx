import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Upload(props) {
    return (
        <IconBase
            {...props}
            id="b75b376f-0d01-4e20-a408-08edb9e77677"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M8,2,3.3333,6.6667H6v4h4v-4h2.6667ZM3.3333,12v1.3333h9.3334V12Z" />
            <path d="M0,0H16V16H0Z" fill="none" />
            <path d="M0,0H16V16H0Z" fill="none" />
        </IconBase>
    );
}

Upload.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Upload.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Upload;
