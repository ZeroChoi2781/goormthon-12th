import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Save(props) {
    return (
        <IconBase
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M11.33,2h-8A1.33,1.33,0,0,0,2,3.33v9.34A1.33,1.33,0,0,0,3.33,14h9.34A1.34,1.34,0,0,0,14,12.67v-8ZM8,12.67a2,2,0,1,1,2-2A2,2,0,0,1,8,12.67ZM10,6H3.33V3.33H10Z" />
        </IconBase>
    );
}

Save.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Save.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Save;
