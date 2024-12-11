import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function NewMessage(props) {
    return (
        <IconBase
            {...props}
            id="79c6ee1d-2080-41ee-92c8-e79c56e15f2e"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M13.3333,1.3333H2.66668A1.33155,1.33155,0,0,0,1.34,2.6667l-.0067,12L4,12h9.3333a1.33724,1.33724,0,0,0,1.33338-1.3333v-8A1.33726,1.33726,0,0,0,13.3333,1.3333ZM6,7.3333H4.66668V6H6Zm2.66668,0H7.3333V6H8.66668Zm2.66662,0H10V6h1.3333Z" />
            <path d="M0,0H16V16H0Z" fill="none" />
        </IconBase>
    );
}

NewMessage.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

NewMessage.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default NewMessage;
