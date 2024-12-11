import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Cards(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g>
                <path d="M8.6667,9.167v4.3327A.50031.50031,0,0,0,9.167,14h4.3327A.50031.50031,0,0,0,14,13.4997V9.167a.50031.50031,0,0,0-.5003-.5003H9.167A.50031.50031,0,0,0,8.6667,9.167Zm0-6.6696V6.8359a.49741.49741,0,0,0,.4974.4974h4.3385A.49741.49741,0,0,0,14,6.8359V2.4974A.49741.49741,0,0,0,13.5026,2H9.1641A.49741.49741,0,0,0,8.6667,2.4974ZM2.5036,14H6.8297a.50364.50364,0,0,0,.5036-.5036V9.1703a.50364.50364,0,0,0-.5036-.5036H2.5036A.50364.50364,0,0,0,2,9.1703v4.3261A.50364.50364,0,0,0,2.5036,14ZM2,2.5V6.8333a.50005.50005,0,0,0,.5.5H6.8333a.50005.50005,0,0,0,.5-.5V2.5a.50005.50005,0,0,0-.5-.5H2.5A.50005.50005,0,0,0,2,2.5Z" />
                <path style={{ fill: 'none' }} d="M0,0H16V16H0Z" />
            </g>
        </IconBase>
    );
}

Cards.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Cards.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Cards;
