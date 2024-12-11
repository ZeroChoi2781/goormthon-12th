import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Qna(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <rect
                    style={{ fill: '#fff', opacity: 0 }}
                    width="16"
                    height="16"
                />
                <path
                    style={{ fillRule: 'evenodd' }}
                    d="M10.248,7.89519l.18-.594c.144-.48.282-.966.408-1.47h.024c.138.498.27.99.42,1.47l.174.594Zm1.746,1.806h.738l-1.464-4.416h-.804L9,9.70119h.708l.378-1.26h1.536ZM3.16,7.27519c0-1.038.474-1.668,1.206-1.668s1.212.63,1.212,1.668c0,1.068-.48,1.734-1.212,1.734S3.16,8.34319,3.16,7.27519Zm3.132,2.736a1.62,1.62,0,0,1-.468.066,1.13049,1.13049,0,0,1-1.05-.54,2.0821,2.0821,0,0,0,1.512-2.262c0-1.422-.792-2.274-1.926-2.274s-1.92.852-1.92,2.274a2.06565,2.06565,0,0,0,1.59,2.28,1.7821,1.7821,0,0,0,1.716,1.092,1.75223,1.75223,0,0,0,.678-.114Zm5.20776-7.42a7.51977,7.51977,0,0,1,2.22691.31786A4.35241,4.35241,0,0,1,15,3.54571v9.29038a.342.342,0,0,1-.31881.31786.28716.28716,0,0,1-.15845-.0315,6.48,6.48,0,0,0-3.023-.66817,7.672,7.672,0,0,0-3.50024.95452,5.91919,5.91919,0,0,0-3.49928-.95452,7.77239,7.77239,0,0,0-3.023.69967c-.063,0-.09545.03245-.15941.03245A.3426.3426,0,0,1,1,12.86855V3.54571a5.92031,5.92031,0,0,1,3.50024-.95452,5.91923,5.91923,0,0,1,3.49928.95452A5.92222,5.92222,0,0,1,11.49976,2.59119Zm2.22691,8.90857a7.401,7.401,0,0,0-2.22691-.31786,7.66017,7.66017,0,0,0-3.50024.95452V4.8181a7.672,7.672,0,0,1,3.50024-.95452,7.40105,7.40105,0,0,1,2.22691.31786Z"
                />
            </g>
        </IconBase>
    );
}

Qna.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Qna.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Qna;
