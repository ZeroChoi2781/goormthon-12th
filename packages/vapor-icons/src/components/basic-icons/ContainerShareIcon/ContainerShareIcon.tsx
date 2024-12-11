import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';

const ContainerShareIcon = (props) => (
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
            d="M2.39167 13.6083C2.65278 13.8694 2.96667 14 3.33333 14H5.93704C5.84785 13.6825 5.80259 13.3481 5.80259 13C5.80259 12.0121 6.16695 11.1358 6.86539 10.4374L7.35019 9.95257L7.3502 4.675C7.3502 4.30221 7.6524 4 8.0252 4C8.39799 4 8.7002 4.30221 8.7002 4.675V8.60916C8.8306 8.4514 8.96548 8.3239 9.09557 8.20094C9.15327 8.14639 9.21004 8.09273 9.26505 8.03771L10.2935 7.00928C10.3448 6.95796 10.3971 6.90845 10.4503 6.86075V4.675C10.4503 4.30221 10.7525 4 11.1253 4C11.4981 4 11.8003 4.30221 11.8003 4.675V6.09709C12.1344 5.99721 12.4874 5.94648 12.8561 5.94648C13.2573 5.94648 13.6401 6.00658 14 6.12474V3.33333C14 2.96667 13.8694 2.65278 13.6083 2.39167C13.3472 2.13056 13.0333 2 12.6667 2H3.33333C2.96667 2 2.65278 2.13056 2.39167 2.39167C2.13056 2.65278 2 2.96667 2 3.33333V12.6667C2 13.0333 2.13056 13.3472 2.39167 13.6083ZM14 8.6715V8.67162C13.9645 8.62768 13.926 8.58495 13.8845 8.54343C13.7354 8.39437 13.5708 8.28419 13.3906 8.21291C13.3824 8.20965 13.3742 8.20649 13.3659 8.2034C13.3532 8.19868 13.3405 8.19414 13.3277 8.1898C13.1805 8.13991 13.0233 8.11496 12.8562 8.11496C12.4562 8.11496 12.1134 8.2578 11.8278 8.54348L10.7993 9.5719C10.7022 9.66903 10.5879 9.7176 10.4565 9.7176C10.3951 9.7176 10.3374 9.70698 10.2834 9.68574C10.2767 9.6831 10.27 9.68029 10.2634 9.67732C10.2096 9.6531 10.1597 9.61795 10.1136 9.57186C10.0165 9.47473 9.96789 9.36046 9.96789 9.22905C9.96789 9.20744 9.9692 9.18629 9.97183 9.16561C9.98518 9.06052 10.0324 8.9674 10.1136 8.88624L10.4503 8.54953V8.54971L11.1421 7.85786C11.3439 7.65606 11.5633 7.4972 11.8003 7.38128V7.38117C12.1202 7.22471 12.4721 7.14648 12.8561 7.14648C13.0778 7.14648 13.2889 7.17259 13.4893 7.22479C13.5259 7.23431 13.5621 7.24469 13.5979 7.25595C13.9579 7.36899 14.282 7.56963 14.5702 7.85786C15.0445 8.33208 15.2816 8.90343 15.2816 9.5719C15.2816 10.2404 15.0445 10.8117 14.5702 11.286L13.5418 12.3144C13.4447 12.4115 13.3304 12.4601 13.199 12.4601C13.1446 12.4601 13.0931 12.4517 13.0445 12.4351C13.0402 12.4336 13.0359 12.4321 13.0317 12.4305C13.0288 12.4294 13.0259 12.4282 13.023 12.4271C12.9627 12.4029 12.907 12.3653 12.8561 12.3143C12.7885 12.2468 12.7444 12.1709 12.7239 12.0867C12.7149 12.0499 12.7104 12.0115 12.7104 11.9715C12.7104 11.9499 12.7117 11.9288 12.7143 11.9081C12.7277 11.803 12.7749 11.7099 12.8561 11.6287L13.8845 10.6003C13.926 10.5588 13.9645 10.516 14 10.4721V10.4723C14.2088 10.2139 14.3131 9.91379 14.3131 9.5719C14.3131 9.23002 14.2088 8.92988 14 8.6715ZM10.485 14H10.4848L11.4848 13C11.566 12.9188 11.6591 12.8715 11.7642 12.8582C11.7849 12.8556 11.806 12.8543 11.8276 12.8543C11.8676 12.8543 11.906 12.8588 11.9428 12.8678C11.9556 12.8709 11.9682 12.8745 11.9806 12.8787C12.0499 12.9022 12.1132 12.9426 12.1706 13C12.2677 13.0971 12.3163 13.2114 12.3163 13.3428C12.3163 13.4742 12.2677 13.5885 12.1706 13.6856L11.1421 14.714C10.6679 15.1883 10.0966 15.4254 9.4281 15.4254C8.75962 15.4254 8.18827 15.1883 7.71405 14.714C7.49648 14.4965 7.32882 14.2585 7.21107 14H7.21096C7.07204 13.6951 7.00259 13.3618 7.00259 13C7.00259 12.486 7.14274 12.0295 7.42305 11.6304L7.42312 11.6305C7.50742 11.5105 7.60439 11.3956 7.71405 11.286L8.7002 10.2998V10.2996L8.74234 10.2575C8.8235 10.1763 8.91662 10.1291 9.02171 10.1157C9.04239 10.1131 9.06354 10.1118 9.08515 10.1118C9.13141 10.1118 9.17554 10.1178 9.21755 10.1298C9.2188 10.1302 9.22005 10.1306 9.22129 10.1309C9.22746 10.1327 9.23357 10.1347 9.23964 10.1368C9.30835 10.1603 9.37117 10.2006 9.4281 10.2575C9.52522 10.3547 9.57379 10.4689 9.57379 10.6003C9.57379 10.7317 9.52523 10.846 9.4281 10.9431L8.39967 11.9716C8.11399 12.2572 7.97116 12.6001 7.97116 13C7.97116 13.3999 8.11399 13.7428 8.39967 14.0284C8.68534 14.3141 9.02815 14.4569 9.4281 14.4569C9.82804 14.4569 10.1708 14.3141 10.4565 14.0284L10.485 14ZM10.4503 11.292V11.2922L11.8003 9.94218V9.94201L11.8276 9.91467C11.9248 9.81754 12.039 9.76898 12.1704 9.76898C12.2104 9.76897 12.2488 9.77347 12.2857 9.78247C12.2994 9.78582 12.3128 9.78979 12.3261 9.79439C12.3944 9.818 12.4568 9.85811 12.5134 9.91471C12.6105 10.0118 12.6591 10.1261 12.6591 10.2575C12.6591 10.3889 12.6105 10.5032 12.5134 10.6003L10.4565 12.6572C10.3594 12.7543 10.2451 12.8029 10.1137 12.8029C10.0622 12.8029 10.0134 12.7954 9.9672 12.7805C9.95981 12.7782 9.95248 12.7756 9.94522 12.7728C9.94308 12.772 9.94095 12.7712 9.93883 12.7703C9.87804 12.7461 9.82202 12.7084 9.77077 12.6571C9.7032 12.5896 9.65913 12.5137 9.63857 12.4295C9.62958 12.3927 9.62508 12.3543 9.62508 12.3143C9.62508 12.1829 9.67364 12.0687 9.77077 11.9715L10.4503 11.292ZM4.9251 4C5.29789 4 5.6001 4.30221 5.6001 4.675L5.6001 11.325C5.6001 11.6978 5.29789 12 4.9251 12C4.55231 12 4.2501 11.6978 4.2501 11.325L4.2501 4.675C4.2501 4.30221 4.55231 4 4.9251 4Z"
        />
    </IconBase>
);

export default ContainerShareIcon;
