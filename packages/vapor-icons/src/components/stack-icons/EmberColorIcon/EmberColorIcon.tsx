import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';

const EmberColorIcon = (props) => (
    <IconBase
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6257 9.1947C15.6257 9.1947 15.2413 9.49217 14.903 9.45888C14.5647 9.42559 14.671 8.67063 14.671 8.67063C14.671 8.67063 14.744 7.97689 14.5454 7.91889C14.3467 7.8609 14.1008 8.09931 14.1008 8.09931C13.9054 8.32681 13.7526 8.58764 13.6497 8.8693L13.61 8.88219C13.61 8.88219 13.6562 8.13045 13.6036 7.95326C13.5638 7.86735 13.1998 7.87486 13.1396 8.02629C13.0795 8.17771 12.7885 9.2398 12.7681 9.6844C12.7681 9.6844 12.1978 10.1687 11.7017 10.2482C11.2055 10.3277 11.0842 10.0162 11.0842 10.0162C11.0842 10.0162 12.4373 9.63822 12.39 8.5568C12.3428 7.47537 11.3 7.87594 11.1819 7.96507C11.0638 8.05421 10.457 8.41934 10.2787 9.43848C10.2787 9.47284 10.2626 9.62426 10.2626 9.62426C10.2626 9.62426 9.73856 9.97543 9.44646 10.0689C9.44646 10.0689 10.2626 8.6964 9.26819 8.07354C8.98897 7.90493 8.7452 8.05958 8.60022 8.20241C8.51109 8.28939 9.80514 6.87398 9.5066 5.60677C9.36484 5.00431 9.06307 4.9388 8.78708 5.0376C8.55845 5.11594 8.35716 5.25833 8.20717 5.44783C7.83856 6.04327 7.60947 6.71439 7.53705 7.41094C7.4114 8.58364 7.22669 10.0023 7.22669 10.0023C7.22669 10.0023 6.96788 10.2546 6.72947 10.2675C6.49106 10.2804 6.6049 9.55768 6.6049 9.55768C6.6049 9.55768 6.79068 8.458 6.7778 8.26899C6.76491 8.07998 6.75095 7.98333 6.53187 7.91782C6.3128 7.85231 6.07439 8.1326 6.07439 8.1326C6.07439 8.1326 5.44508 9.08731 5.39246 9.23336L5.35809 9.2935L5.32587 9.25376C5.32587 9.25376 5.7694 7.95326 5.3452 7.93393C4.92101 7.9146 4.64287 8.39786 4.64287 8.39786C4.64287 8.39786 4.15854 9.20758 4.13813 9.29994L4.10591 9.26021C4.10591 9.26021 4.30459 8.31839 4.26485 8.08642C4.26148 8.0566 4.25189 8.0278 4.2367 8.00191C4.22151 7.97602 4.20107 7.95359 4.17668 7.93609C4.1523 7.91858 4.12451 7.90638 4.09512 7.90028C4.06573 7.89417 4.03538 7.89429 4.00604 7.90064C4.00604 7.90064 3.7279 7.86735 3.65487 8.04669C3.48923 8.61843 3.36258 9.20075 3.27578 9.78964C3.27578 9.78964 2.57989 10.2879 2.12241 10.2933C1.66492 10.2987 1.71217 10.0044 1.71217 10.0044C1.71217 10.0044 3.38962 9.42988 2.93106 8.29691C2.72594 8.00481 2.48753 7.91353 2.14925 7.91997C1.81097 7.92641 1.39752 8.13475 1.12045 8.74258C1.01378 8.98929 0.944987 9.25069 0.916406 9.51794C0.916406 9.51794 0.623229 9.57808 0.463217 9.44599C0.303205 9.3139 0.222662 9.44599 0.222662 9.44599C0.222662 9.44599 -0.0511848 9.79394 0.222662 9.90026C0.449212 9.97527 0.682696 10.0274 0.919628 10.056C0.983896 10.357 1.15571 10.6243 1.40289 10.8077C1.90011 11.1857 2.85374 10.7733 2.85374 10.7733L3.24464 10.5586C3.24464 10.5586 3.2586 10.9183 3.54319 10.9699C3.82777 11.0214 3.94805 10.9699 4.44527 9.76279C4.7363 9.14637 4.7567 9.17966 4.7567 9.17966C4.78999 9.17215 4.56447 10.3524 4.64931 10.6702C4.73415 10.9881 5.11324 10.9559 5.11324 10.9559C5.11324 10.9559 5.31943 10.9956 5.48481 10.4125C5.6144 9.98979 5.77707 9.57793 5.97129 9.18074C6.00995 9.18074 5.87142 10.3867 6.07868 10.7712C6.28595 11.1557 6.84116 10.9011 6.84116 10.9011C6.99474 10.8265 7.14326 10.7418 7.28576 10.6477C7.59849 10.8901 7.99135 11.0052 8.38544 10.9699C9.82448 10.6864 10.3367 10.303 10.3367 10.303C10.4275 10.4983 10.5696 10.6653 10.748 10.786C10.9264 10.9067 11.1343 10.9766 11.3494 10.9881C11.5967 11.0123 11.8463 10.9814 12.0803 10.8977C12.3142 10.8139 12.5268 10.6794 12.7025 10.5038C12.7025 10.5038 12.695 10.8625 13 10.9881C13.305 11.1138 13.5112 10.4061 13.5112 10.4061L14.0213 8.99925C14.0675 8.99925 14.0943 9.91422 14.598 10.0603C15.1017 10.2063 15.7578 9.71769 15.7578 9.71769C15.7578 9.71769 15.9168 9.6307 15.891 9.36545C15.8927 9.33345 15.886 9.30156 15.8714 9.27302C15.8568 9.24447 15.8349 9.2203 15.808 9.20296C15.7811 9.18561 15.75 9.17571 15.718 9.17426C15.686 9.17281 15.6541 9.17986 15.6257 9.1947ZM2.35115 8.53639C2.52942 8.70822 2.45854 9.07979 2.12563 9.31175C1.79272 9.54372 1.63485 9.49754 1.63485 9.49754C1.65526 8.70285 2.17288 8.35812 2.35115 8.53639ZM8.94709 5.81189C9.05448 6.40791 7.96017 8.18522 7.96017 8.18522C7.97306 7.7868 8.36396 6.4412 8.36396 6.4412C8.36396 6.4412 8.83433 5.20728 8.94709 5.80652V5.81189ZM7.8603 10.3341C7.8603 10.3341 7.77331 10.042 8.01924 9.22691C8.26516 8.41182 8.84077 8.7297 8.84077 8.7297C8.84077 8.7297 9.23919 9.03469 8.92776 9.84978C8.61633 10.6649 7.8603 10.3341 7.8603 10.3341ZM11.2141 8.73614C11.4858 8.23892 11.6984 8.51062 11.6984 8.51062C11.6984 8.51062 11.9304 8.76299 11.6652 9.141C11.5943 9.24868 11.4979 9.33711 11.3845 9.3984C11.2711 9.45968 11.1443 9.4919 11.0154 9.49217C11.0154 9.49217 10.9435 9.23336 11.2141 8.73614Z"
            fill="url(#paint0_linear_3648_542)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_3648_542"
                x1="8.00098"
                y1="10.9989"
                x2="8.00098"
                y2="5.00001"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#DF4E69" />
                <stop offset="0.57" stopColor="#DF4E39" />
                <stop offset="1" stopColor="#DF773F" />
            </linearGradient>
        </defs>
    </IconBase>
);

export default EmberColorIcon;
