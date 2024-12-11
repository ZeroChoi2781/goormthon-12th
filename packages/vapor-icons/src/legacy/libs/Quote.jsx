import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Quote(props) {
    return (
        <IconBase
            {...props}
            id="a9fe01a8-d57d-4658-8b32-ba0503084730"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <rect width="16" height="16" fill="none" opacity="0.3" />
            <path d="M12.52077,9.527A5.22128,5.22128,0,0,1,9.8343,10.98421c-.13578.03316-.35986.0539-.43979-.09046a.34468.34468,0,0,1,.12446-.41933c1.561-.8861,1.61534-1.68938,1.5873-1.94618-.03155.00114-.06106.00938-.09286.00938a2.55354,2.55354,0,1,1,1.83523-4.32193,2.95734,2.95734,0,0,1,.79664,1.74949A4.70436,4.70436,0,0,1,12.52077,9.527ZM7.51412,5.96517a2.95734,2.95734,0,0,0-.79664-1.74949A2.5511,2.5511,0,1,0,4.88226,8.53761c.0318,0,.06131-.00823.09286-.00938.028.25681-.02633,1.06008-1.5873,1.94618a.34468.34468,0,0,0-.12446.41933c.07993.14436.304.12362.43979.09046A5.22128,5.22128,0,0,0,6.38961,9.527,4.70436,4.70436,0,0,0,7.51412,5.96517Z" />
        </IconBase>
    );
}

Quote.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Quote.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Quote;
