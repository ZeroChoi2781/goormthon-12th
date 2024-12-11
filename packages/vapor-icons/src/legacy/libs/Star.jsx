import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function StarFull(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M3.89864,15.29835a.6.6,0,0,1-.89088-.64726l1.038-4.64949L.4731,6.85021A.6.6,0,0,1,.81339,5.80293l4.7427-.44955L7.44921.98172a.6.6,0,0,1,1.10118,0l1.89312,4.37166,4.7427.44955a.6.6,0,0,1,.34029,1.04729L11.95381,10.0016l1.038,4.64949a.6.6,0,0,1-.89088.64726l-4.10116-2.424Z" />
            </g>
        </IconBase>
    );
}

StarFull.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

StarFull.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default StarFull;
