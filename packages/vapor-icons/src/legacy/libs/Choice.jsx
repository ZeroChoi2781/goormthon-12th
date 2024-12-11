import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Choice(props) {
    return (
        <IconBase
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm6.0249,14.42346-1.60181,1.602a.55146.55146,0,0,1-.78009,0L10.3606,12.7427,9.00806,15.08462a.55171.55171,0,0,1-.99011-.07159L3.85291,4.56881a.55156.55156,0,0,1,.71674-.71661L15.01257,8.018a.55158.55158,0,0,1,.07153.98993l-2.34186,1.35272,3.28259,3.28271A.5517.5517,0,0,1,16.0249,14.42343Z" />
            </g>
        </IconBase>
    );
}

Choice.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Choice.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Choice;
