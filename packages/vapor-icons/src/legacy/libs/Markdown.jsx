import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Markdown(props) {
    return (
        <IconBase
            {...props}
            id="6a179eed-aa65-49c3-afc6-18f91a14c1b1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <rect width="16" height="16" fill="none" opacity="0.3" />
            <path d="M5.92328,7.47074,7.10214,6H8.281V9.99526H7.11351V7.70576L5.92328,9.16892,4.733,7.70576v2.2895H3.56554V6H4.74441Zm5.5937.57938V6H10.36079V8.05012H9.16234L10.9389,9.99525l1.77656-1.94513ZM13.71167,2.5H2.28833A1.2883,1.2883,0,0,0,1,3.78833v8.42334A1.28834,1.28834,0,0,0,2.28833,13.5H13.71167A1.28834,1.28834,0,0,0,15,12.21167V3.78833A1.2883,1.2883,0,0,0,13.71167,2.5Zm.14447,9.90234H2.14386V3.5976H13.85614Z" />
        </IconBase>
    );
}

Markdown.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Markdown.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Markdown;
