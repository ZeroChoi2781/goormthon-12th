import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';
import PropTypes from 'prop-types';

function Profile(props) {
    return (
        <IconBase
            width="56"
            height="56"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="학생-페이지" fill="none" fillRule="evenodd">
                <g id="과목신청후_과목정보" transform="translate(-180 -1764)">
                    <g id="contents" transform="translate(0 335)">
                        <g id="box_과목후기" transform="translate(150 1135)">
                            <g
                                id="27-box/03-review-copy"
                                transform="translate(0 264)"
                            >
                                <g
                                    id="img_profile"
                                    transform="translate(30 30)"
                                >
                                    <circle
                                        id="Pic"
                                        fill="#494E5F"
                                        cx="28"
                                        cy="28"
                                        r="28"
                                    />
                                    <g
                                        id="04-Icon/avatar"
                                        transform="translate(14 14)"
                                        fill="#FFF"
                                    >
                                        <path
                                            d="M14.0011484,17.0627871 C9.91283866,17.0627871 1.75,19.1161292 1.75,23.1883613 L1.75,26.25 L26.25,26.25 L26.25,23.1883613 C26.25,19.1161292 18.0871613,17.0627871 14.0011484,17.0627871 M14.0011484,14.0011484 C17.3843396,14.0011484 20.1244258,11.2610622 20.1244258,7.8755742 C20.1244258,4.49238305 17.3843396,1.75 14.0011484,1.75 C10.6156604,1.75 7.8755742,4.49238305 7.8755742,7.8755742 C7.8755742,11.2610622 10.6156604,14.0011484 14.0011484,14.0011484"
                                            id="Fill-1"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </IconBase>
    );
}

Profile.defaultProps = {
    size: '1rem',
    color: 'currentColor',
    onClick: () => {},
    style: {},
};

Profile.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string),
};

export default Profile;
