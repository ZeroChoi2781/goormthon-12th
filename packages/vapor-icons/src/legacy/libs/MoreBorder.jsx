import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function More(props) {
    return (
        <IconBase
            {...props}
            id="5b257b34-2153-4e23-b70b-70da1e2ae98e"
            data-name="레이어 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
        >
            <circle
                cx="9"
                cy="2.25"
                r="2"
                fill="#fff"
                stroke="#ced0da"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
            <circle
                cx="9"
                cy="9"
                r="2"
                fill="#fff"
                stroke="#ced0da"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
            <circle
                cx="9"
                cy="15.75"
                r="2"
                fill="#fff"
                stroke="#ced0da"
                strokeMiterlimit="10"
                strokeWidth="0.5"
            />
        </IconBase>
    );
}

More.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

More.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default More;
