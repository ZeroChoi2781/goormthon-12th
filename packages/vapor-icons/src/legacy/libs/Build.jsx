import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Build(props) {
    return (
        <IconBase
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm5.15564,10.37366a3.90842,3.90842,0,0,1-3.93195.96661,1.8443,1.8443,0,0,1-.14429.16315L6.81768,15.7651a1.82627,1.82627,0,0,1-2.58276-2.5827L8.49663,8.92074a1.84392,1.84392,0,0,1,.16315-.14435,3.90953,3.90953,0,0,1,4.97443-4.87415L11.55913,5.97732l.64838,1.81512,1.81519.64844,2.075-2.07507A3.909,3.909,0,0,1,15.15563,10.37362Z" />
            </g>
        </IconBase>
    );
}

Build.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Build.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Build;
