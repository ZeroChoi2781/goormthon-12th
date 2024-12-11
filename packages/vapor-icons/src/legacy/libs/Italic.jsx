import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Italic(props) {
    return (
        <IconBase
            {...props}
            id="db71f06e-daf8-40f1-a996-56b250082e01"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M6.5791,2.271l.09863-.33008h5.916l-.11621.33008a1.8583,1.8583,0,0,0-1.22852.35742A3.10936,3.10936,0,0,0,10.502,4.12061L8.28613,11.87842A4.97,4.97,0,0,0,8.04492,12.978a.57917.57917,0,0,0,.25.5,2.30283,2.30283,0,0,0,1.21582.25l-.08984.33105H3.40625l.09863-.33105a2.07306,2.07306,0,0,0,1.32227-.34375,3.15509,3.15509,0,0,0,.75977-1.50586L7.82129,4.12061a4.32006,4.32006,0,0,0,.20508-1.08105.61244.61244,0,0,0-.25-.51855A2.66669,2.66669,0,0,0,6.5791,2.271Z" />
            <rect width="16" height="16" fill="none" />
        </IconBase>
    );
}

Italic.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Italic.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Italic;
