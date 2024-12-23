import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Setting(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path style={{ fill: 'none' }} d="M0,0H16V16H0Z" />
                <path d="M12.9533,8.6534A5.19053,5.19053,0,0,0,13,8a5.18893,5.18893,0,0,0-.0467-.6533l1.4067-1.1a.33645.33645,0,0,0,.08-.4267L13.1066,3.5134A.335.335,0,0,0,12.7,3.3667l-1.66.6667A4.87119,4.87119,0,0,0,9.9133,3.38L9.66,1.6134a.32509.32509,0,0,0-.3267-.28H6.6666a.32506.32506,0,0,0-.3266.28L6.0866,3.38A5.123,5.123,0,0,0,4.96,4.0334L3.3,3.3667a.3252.3252,0,0,0-.4067.1467L1.56,5.82a.32863.32863,0,0,0,.08.4267l1.4066,1.1A5.299,5.299,0,0,0,3,8a5.30206,5.30206,0,0,0,.0466.6534L1.64,9.7534a.33622.33622,0,0,0-.08.4266l1.3333,2.3067a.33513.33513,0,0,0,.4067.1467l1.66-.6667a4.8666,4.8666,0,0,0,1.1266.6533L6.34,14.3867a.32506.32506,0,0,0,.3266.28H9.3333a.32509.32509,0,0,0,.3267-.28L9.9133,12.62a5.11937,5.11937,0,0,0,1.1267-.6533l1.66.6667a.32511.32511,0,0,0,.4066-.1467L14.44,10.18a.33634.33634,0,0,0-.08-.4266ZM8,10.3334A2.33335,2.33335,0,1,1,10.3333,8,2.336,2.336,0,0,1,8,10.3334Z" />
            </g>
        </IconBase>
    );
}

Setting.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Setting.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Setting;
