import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function PlusBox(props) {
    return (
        <IconBase
            {...props}
            id="c9672637-bf34-45d1-99a3-98199d8f1412"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <defs>
                <clipPath id="980beffd-be14-4396-84ab-e5c48eef1b0f">
                    <rect width="16" height="16" fill="none" />
                </clipPath>
            </defs>
            <g clipPath="url(#980beffd-be14-4396-84ab-e5c48eef1b0f)">
                <rect
                    x="8.667"
                    y="7.333"
                    width="2.667"
                    height="1.333"
                    fill="none"
                />
                <rect
                    x="4.667"
                    y="7.333"
                    width="2.667"
                    height="1.333"
                    fill="none"
                />
                <path d="M12.6666,2.0001H3.3333A1.337,1.337,0,0,0,2.0001,3.3334v9.3332a1.3372,1.3372,0,0,0,1.3332,1.3335h9.3333a1.33745,1.33745,0,0,0,1.3335-1.3335V3.3334A1.33728,1.33728,0,0,0,12.6666,2.0001ZM11.3333,8.6666H8.6666v2.6668H7.3333V8.6666H4.6666V7.3334H7.3333V4.6666H8.6666V7.3334h2.6667Z" />
            </g>
        </IconBase>
    );
}

PlusBox.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

PlusBox.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default PlusBox;
