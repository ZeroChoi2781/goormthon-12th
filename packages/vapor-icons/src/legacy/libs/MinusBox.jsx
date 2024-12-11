import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function MinusBox(props) {
    return (
        <IconBase
            {...props}
            id="70c54830-c11a-4654-ba9a-0b00c467a3ee"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <defs>
                <clipPath id="98adeda2-3cf6-4d48-9d65-fcfdf6c5796b">
                    <rect width="16" height="16" fill="none" />
                </clipPath>
            </defs>
            <g clipPath="url(#98adeda2-3cf6-4d48-9d65-fcfdf6c5796b)">
                <path d="M12.6667,2H3.3333A1.33724,1.33724,0,0,0,2,3.3333v9.3334A1.33724,1.33724,0,0,0,3.3333,14h9.3334A1.33724,1.33724,0,0,0,14,12.6667V3.3333A1.33724,1.33724,0,0,0,12.6667,2ZM11.3333,8.6667H4.6667V7.3333h6.6666Z" />
            </g>
        </IconBase>
    );
}

MinusBox.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

MinusBox.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default MinusBox;
