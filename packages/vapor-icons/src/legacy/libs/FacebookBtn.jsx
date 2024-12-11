import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function FacebookBtn(props) {
    return (
        <IconBase
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="btn_facebook" fill="none">
                <rect
                    id="Base"
                    stroke="#90929E"
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                />
                <path
                    d="M12.715539,16.8 L12.715539,12.4208575 L14.132342,12.4208575 L14.3428996,10.7151796 L12.715539,10.7151796 L12.715539,9.62502897 C12.715539,9.13186559 12.8475836,8.79443801 13.5292193,8.79443801 L14.4,8.79443801 L14.4,7.26674392 C14.2501115,7.24449594 13.7326394,7.2 13.1330855,7.2 C11.8768773,7.2 11.0203717,7.997219 11.0203717,9.45816918 L11.0203717,10.7188876 L9.6,10.7188876 L9.6,12.4245655 L11.0203717,12.4245655 L11.0203717,16.8 L12.715539,16.8 Z"
                    id="Facebook"
                    fill="#90929E"
                />
            </g>
        </IconBase>
    );
}

FacebookBtn.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

FacebookBtn.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default FacebookBtn;
