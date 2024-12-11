import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Underline(props) {
    return (
        <IconBase
            {...props}
            id="ba7c74fd-25c4-45fc-b886-9538063976d0"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <rect width="16" height="16" fill="none" opacity="0.3" />
            <path d="M2.55268,1.95424H8.067v.29133H7.79142a1.936,1.936,0,0,0-.85478.13009.739.739,0,0,0-.331.35829,3.85407,3.85407,0,0,0-.0981,1.14227V9.10686a5.31545,5.31545,0,0,0,.21668,1.89895,1.80474,1.80474,0,0,0,.71232.77118,2.34574,2.34574,0,0,0,1.25317.30711,2.69088,2.69088,0,0,0,1.47668-.389A2.39857,2.39857,0,0,0,11.08,10.61937a6.5276,6.5276,0,0,0,.3037-2.38691V3.87622a2.52184,2.52184,0,0,0-.15014-1.02412.89867.89867,0,0,0-.37791-.42526A2.241,2.241,0,0,0,9.855,2.24556V1.95424h3.69468v.29133H13.3296a1.42627,1.42627,0,0,0-.749.18128,1.02948,1.02948,0,0,0-.43336.54341,2.7261,2.7261,0,0,0-.10237.906V7.933a10.53354,10.53354,0,0,1-.24825,2.7179,3.02422,3.02422,0,0,1-1.20881,1.53554,4.36713,4.36713,0,0,1-2.62321.70123,4.97969,4.97969,0,0,1-2.14293-.37024A3.15012,3.15012,0,0,1,4.36461,11.2259a4.4818,4.4818,0,0,1-.42569-2.119V3.87622a3.70479,3.70479,0,0,0-.10237-1.14611.76481.76481,0,0,0-.354-.35829,2.154,2.154,0,0,0-.92985-.12626ZM2.17477,14.04576v-.64464H13.82523v.64464Z" />
        </IconBase>
    );
}

Underline.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Underline.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Underline;
