import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';

const SbomIcon = (props) => (
    <IconBase
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 1.50538C1 0.674038 1.63483 0 2.41935 0H10.5806C11.3652 0 12 0.674038 12 1.50538V6.80724L10.4291 6.15088L5.90335 8.04179V10.9501C5.90335 12.3376 6.44326 13.655 7.32578 14.6672L2.41935 14.6774C1.63483 14.6774 1 14.0034 1 13.172V1.50538ZM3.94957 4.54911V2.30034H4.78777C5.05195 2.30034 5.2509 2.34262 5.38462 2.44911C5.51671 2.53367 5.58357 2.66052 5.58357 2.83121C5.58357 2.95806 5.53954 3.06454 5.45148 3.14911C5.36342 3.23367 5.25253 3.29788 5.12044 3.34016C5.27536 3.36208 5.40745 3.42472 5.51834 3.50929C5.62924 3.61578 5.67326 3.7207 5.67326 3.86947C5.67326 4.08088 5.6064 4.22965 5.45311 4.35649C5.29819 4.48334 5.09924 4.54754 4.83506 4.54754C4.8318 4.54911 3.94957 4.54911 3.94957 4.54911ZM4.45673 2.66208V3.21331H4.69971C4.8106 3.21331 4.89866 3.19139 4.96389 3.12875C5.03075 3.06454 5.05195 3.0019 5.05195 2.91734C5.05195 2.74821 4.91986 2.66365 4.65405 2.66365C4.65568 2.66208 4.45673 2.66208 4.45673 2.66208ZM4.45673 3.57349V4.18736H4.74374C4.87583 4.18736 4.96389 4.16544 5.03075 4.1028C5.09761 4.03859 5.14164 3.97595 5.14164 3.86947C5.14164 3.7849 5.09761 3.70034 5.03075 3.65806C4.96389 3.61578 4.85463 3.57349 4.72091 3.57349H4.45673ZM5.86896 3.46701C5.86896 3.10683 5.97985 2.83121 6.2 2.59788C6.42015 2.38647 6.70716 2.25806 7.06103 2.25806C7.39207 2.25806 7.67908 2.36454 7.87804 2.57595C8.07699 2.78736 8.18788 3.06298 8.18788 3.4028C8.18788 3.74262 8.07699 4.03859 7.87804 4.25157C7.65788 4.46298 7.39207 4.56947 7.03983 4.56947C6.70879 4.56947 6.42178 4.46298 6.22283 4.25157C5.97985 4.06052 5.86896 3.7849 5.86896 3.46701ZM6.39895 3.42472C6.39895 3.63613 6.46581 3.82718 6.57507 3.95403C6.68596 4.1028 6.83925 4.16544 7.0382 4.16544C7.23715 4.16544 7.39207 4.10123 7.50133 3.97439C7.61222 3.84754 7.65625 3.65649 7.65625 3.44508C7.65625 3.21175 7.61222 3.0207 7.50133 2.89385C7.39044 2.76701 7.23715 2.68244 7.0594 2.68244C6.86045 2.68244 6.70553 2.74665 6.59627 2.89385C6.48701 3.04262 6.39895 3.21331 6.39895 3.42472ZM10.6601 4.54911V3.19296V3.19294C10.6601 3.0661 10.6601 2.91733 10.6829 2.72629H10.6601C10.6373 2.87506 10.6161 2.95962 10.5932 3.02383L10.0192 4.57103H9.6213L9.02445 3.04419C9.00162 3.0019 8.98042 2.91734 8.95759 2.74665H8.93476C8.95759 2.9377 8.95759 3.12875 8.95759 3.3198V4.59139H8.49446V2.30034H9.2234L9.73057 3.65649C9.7746 3.76298 9.79743 3.8679 9.81862 3.97439C9.83315 3.89372 9.85624 3.82128 9.87658 3.75748L9.87659 3.75746L9.87659 3.75745L9.8766 3.75744C9.88823 3.72094 9.89897 3.68726 9.90669 3.65649L10.4138 2.30034H11.12V4.54754C11.1249 4.54911 10.6601 4.54911 10.6601 4.54911ZM2.00571 4.24217L2.2699 3.93837C2.4346 4.08401 2.65149 4.18267 2.8537 4.18267C3.09342 4.18267 3.22062 4.08401 3.22062 3.92897C3.22062 3.77107 3.09129 3.71859 2.9005 3.64117L2.87653 3.63143L2.56832 3.50616C2.33513 3.41376 2.10193 3.23524 2.10193 2.91264C2.10193 2.55246 2.43134 2.27372 2.89773 2.27372C3.16518 2.27372 3.43262 2.37551 3.61852 2.55716L3.38533 2.83434C3.23856 2.71846 3.0869 2.65269 2.89773 2.65269C2.69552 2.65269 2.56506 2.73882 2.56506 2.88602C2.56506 3.0378 2.71673 3.09584 2.90191 3.16671L2.92546 3.17573L3.22714 3.29788C3.506 3.4075 3.69028 3.57819 3.69028 3.89765C3.69028 4.25783 3.37717 4.56633 2.84555 4.56633C2.53734 4.5632 2.22913 4.44732 2.00571 4.24217ZM6.65714 8.5865L10.4286 7.01074L14.2 8.5865V10.9501C14.2 13.1365 12.5909 15.181 10.4286 15.6774C8.26622 15.181 6.65714 13.1365 6.65714 10.9501V8.5865ZM10.4286 9.59471C10.0505 9.59471 9.74249 9.91115 9.74249 10.3009V10.6219H11.114V10.3009C11.114 9.91115 10.8066 9.59471 10.4286 9.59471ZM11.5195 10.3009V10.6219H12.1429V13.5107H8.71429V10.6219H9.33766V10.3009C9.33766 9.68005 9.82589 9.17741 10.4286 9.17741C11.0312 9.17741 11.5195 9.68005 11.5195 10.3009Z"
        />
    </IconBase>
);

export default SbomIcon;