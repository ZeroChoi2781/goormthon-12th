import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Operation(props) {
    return (
        <IconBase
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm.45,14.03882a6.88727,6.88727,0,0,1-.945-.504,4.3883,4.3883,0,0,0,.126,2.709,3.99705,3.99705,0,0,1-2.394-4.536,11.34286,11.34286,0,0,1-3.276-7.371.29764.29764,0,0,1,.315-.315,11.114,11.114,0,0,1,7.371,3.339,3.89559,3.89559,0,0,1,4.536,2.394,4.38874,4.38874,0,0,0-2.709-.126,4.01771,4.01771,0,0,1,.504.882.28126.28126,0,0,1,0,.315l-3.15,3.15A.29681.29681,0,0,1,10.45,14.03878Zm3.465,2.394a.609.609,0,0,1-.882,0l-1.323-1.323a.62368.62368,0,0,1,.882-.882l1.323,1.323A.6091.6091,0,0,1,13.915,16.43277Zm1.701-.693a.609.609,0,0,1-.882,0l-1.827-1.827a.62364.62364,0,1,1,.882-.882l1.827,1.827A.609.609,0,0,1,15.616,15.73977Zm.756-1.764a.6091.6091,0,0,1-.882,0l-1.323-1.323a.62368.62368,0,1,1,.882-.882l1.323,1.323A.609.609,0,0,1,16.372,13.9758Zm-7.119-6.426a1.24732,1.24732,0,0,1-1.764,1.764,1.24732,1.24732,0,1,1,1.764-1.764Z" />
            </g>
        </IconBase>
    );
}

Operation.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Operation.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Operation;
