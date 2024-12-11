import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Hide(props) {
    return (
        <IconBase
            {...props}
            id="98ab2c5a-0b95-4d43-ac6f-51530ba318fb"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path
                d="M8.57809,6.16284A2.00528,2.00528,0,0,1,9.934,7.56694ZM5.9193,3.40957A6.65444,6.65444,0,0,1,8,3.0779q4.1415,0,7.5,5a15.45288,15.45288,0,0,1-2.36,2.80885l-1.38319-1.4323a4.00284,4.00284,0,0,0-5.0014-5.1791Zm4.43431,7.90284L8.9369,9.8453A2.00028,2.00028,0,0,1,6.2666,7.08012L4.8497,5.61289a4.00018,4.00018,0,0,0,5.50391,5.69952Zm.8992.93111A6.81149,6.81149,0,0,1,8,13.0779q-4.14,0-7.5-5A13.80907,13.80907,0,0,1,3.7878,4.51325L1.9306,2.59014l.86319-.83359L14.0473,13.40986l-.8632.83359Z"
                fillRule="evenodd"
            />
            <path d="M0,0H16V16H0Z" fill="none" />
        </IconBase>
    );
}

Hide.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Hide.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Hide;
