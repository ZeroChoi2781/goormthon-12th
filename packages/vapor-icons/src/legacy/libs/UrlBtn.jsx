import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function UrlBtn(props) {
    return (
        <IconBase
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="btn_url" fill="none">
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
                    d="M6.972,15.612 C5.532,15.612 4.668,14.804 4.668,12.836 L4.668,9.58 L5.852,9.58 L5.852,12.94 C5.852,14.172 6.276,14.588 6.972,14.588 C7.676,14.588 8.124,14.172 8.124,12.94 L8.124,9.58 L9.26,9.58 L9.26,12.836 C9.26,14.804 8.42,15.612 6.972,15.612 Z M11.868,10.516 L11.868,12.324 L12.636,12.324 C13.396,12.324 13.812,12.004 13.812,11.372 C13.812,10.732 13.396,10.516 12.636,10.516 L11.868,10.516 Z M15.228,15.5 L13.908,15.5 L12.692,13.26 L11.868,13.26 L11.868,15.5 L10.684,15.5 L10.684,9.58 L12.748,9.58 C13.988,9.58 14.972,10.012 14.972,11.372 C14.972,12.26 14.524,12.812 13.844,13.076 L15.228,15.5 Z M16.14,15.5 L16.14,9.58 L17.324,9.58 L17.324,14.508 L19.724,14.508 L19.724,15.5 L16.14,15.5 Z"
                    id="URL"
                    fill="#90929E"
                />
            </g>
        </IconBase>
    );
}

UrlBtn.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

UrlBtn.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default UrlBtn;
