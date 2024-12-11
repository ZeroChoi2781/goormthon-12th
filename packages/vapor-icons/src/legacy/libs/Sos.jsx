import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Sos(props) {
    return (
        <IconBase
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M9.96556,8.07339A1.2878,1.2878,0,0,0,8.6793,9.35977v1.54608A1.28777,1.28777,0,0,0,9.96556,12.1921h.00006a1.28782,1.28782,0,0,0,1.28632-1.28625V9.35977A1.28786,1.28786,0,0,0,9.96556,8.07339Zm.30212,2.83246a.30212.30212,0,0,1-.60425,0V9.35977a.30212.30212,0,0,1,.60425,0Zm4.11432-.00006a1.28641,1.28641,0,0,1-2.54047.28656.49207.49207,0,1,1,.95953-.21869.30224.30224,0,0,0,.59674-.06787c0-.13348-.02435-.18848-.50415-.36353-.40558-.14789-1.08429-.39551-1.08429-1.18256a1.28642,1.28642,0,0,1,2.52881-.33356.49209.49209,0,0,1-.95062.25482.30223.30223,0,0,0-.594.07874.07348.07348,0,0,0,.0401.08063,1.79529,1.79529,0,0,0,.39728.17737C13.66142,9.77475,14.382,10.03756,14.382,10.90579Zm-6.19141,0a1.28635,1.28635,0,0,1-2.54034.28662.4921.4921,0,0,1,.95959-.21869.30222.30222,0,0,0,.59668-.06787c0-.13348-.02448-.18854-.50421-.36353C6.29679,10.39444,5.618,10.14675,5.618,9.35977a1.28637,1.28637,0,0,1,2.52869-.33362.492.492,0,1,1-.9505.25482.30224.30224,0,0,0-.594.0788.0741.0741,0,0,0,.04.08057,1.79225,1.79225,0,0,0,.39728.17737C7.47007,9.77475,8.19059,10.03762,8.19059,10.90579ZM10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm5.761,15.37494a.31478.31478,0,0,1-.3855.38556l-1.64673-.44116a6.50921,6.50921,0,1,1,1.591-1.59106Z" />
            </g>
        </IconBase>
    );
}

Sos.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Sos.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Sos;