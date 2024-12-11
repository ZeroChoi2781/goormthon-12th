import React from 'react';

import IconBase from '@vapor-icons/src/components/IconBase';

const ExpressColorIcon = (props) => (
    <IconBase
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0.168073 9.28643V7.51915H2.37718V7.41649H0.168073V5.80514H2.50713V5.70248H0.0654144V9.38909H2.53442V9.28643H0.168073ZM4.52132 6.73426L3.61169 7.93758L2.71765 6.73426H2.5877L3.55321 8.01555L2.49544 9.38909H2.62538L3.62208 8.08962L4.62398 9.38909H4.75393L3.69096 8.01555L4.66167 6.73426H4.52132ZM5.04891 10.2974V8.64969H5.05931C5.11326 8.87876 5.24225 9.08322 5.42576 9.23056C5.62543 9.38233 5.87166 9.45997 6.12228 9.45017C6.28468 9.454 6.44563 9.41869 6.59151 9.34721C6.73739 9.27574 6.86393 9.17021 6.96044 9.03953C7.05878 8.90557 7.13228 8.75504 7.17745 8.59511C7.22846 8.4226 7.25385 8.24352 7.25282 8.06363C7.25475 7.87666 7.22846 7.69047 7.17485 7.51135C7.12836 7.35204 7.05208 7.203 6.95004 7.07213C6.85485 6.9498 6.7331 6.85071 6.59399 6.78234C6.44647 6.71175 6.28449 6.6766 6.12098 6.67968C5.99388 6.67871 5.86747 6.69846 5.74673 6.73816C5.63553 6.77638 5.53178 6.83353 5.44005 6.90709C5.34966 6.98129 5.2712 7.06895 5.20745 7.16699C5.14299 7.26356 5.09308 7.36908 5.05931 7.48016H5.04891V6.73426H4.94495V10.2974H5.04891ZM6.12228 9.34751C5.97578 9.35332 5.82983 9.32649 5.69498 9.26896C5.56013 9.21142 5.43977 9.12462 5.34259 9.01484C5.1468 8.7922 5.04891 8.47296 5.04891 8.05713C5.04775 7.89072 5.07185 7.7251 5.12038 7.56593C5.16538 7.41859 5.23622 7.28043 5.3296 7.15789C5.42088 7.04143 5.53667 6.94649 5.66876 6.8798C5.80939 6.80924 5.96495 6.77358 6.12228 6.77584C6.27932 6.77236 6.43474 6.80809 6.5745 6.8798C6.70185 6.94714 6.81175 7.04325 6.89547 7.16049C6.98256 7.28479 7.04843 7.42267 7.09039 7.56853C7.13385 7.72772 7.15527 7.89212 7.15406 8.05713C7.1524 8.2134 7.13101 8.36883 7.09039 8.51974C7.05302 8.66705 6.99061 8.80683 6.90586 8.93298C6.82356 9.05516 6.71529 9.15766 6.58879 9.23316C6.4463 9.31361 6.28454 9.3536 6.12098 9.34881L6.12228 9.34751ZM7.82199 9.38909V7.8869C7.82177 7.74338 7.84279 7.60063 7.88437 7.46327C7.92204 7.33002 7.9871 7.20609 8.07539 7.09941C8.16356 6.99213 8.27574 6.90711 8.40286 6.85121C8.55193 6.78756 8.7144 6.76167 8.87587 6.77584V6.67319C8.73541 6.66696 8.59489 6.68409 8.46004 6.72387C8.34918 6.75776 8.24499 6.81051 8.15206 6.8798C8.06905 6.94196 7.99888 7.01963 7.94544 7.10851C7.8944 7.19658 7.85633 7.29156 7.83239 7.3905H7.82199V6.74076H7.71804V9.39559L7.82199 9.38909ZM9.00452 8.08962H11.2253C11.2324 7.91205 11.214 7.73439 11.1707 7.56203C11.1311 7.40037 11.061 7.24776 10.9641 7.11241C10.8688 6.97868 10.7438 6.86882 10.599 6.79144C10.4334 6.70869 10.2499 6.66808 10.0649 6.67319C9.91253 6.67356 9.76197 6.70618 9.62312 6.76889C9.48426 6.8316 9.36024 6.92299 9.25922 7.03704C9.14591 7.16495 9.05774 7.31308 8.99932 7.47366C8.93098 7.66227 8.89752 7.86174 8.90056 8.06233C8.89964 8.24768 8.92235 8.43239 8.96813 8.61201C9.00869 8.77173 9.07877 8.92246 9.17475 9.05643C9.26849 9.18152 9.3917 9.28152 9.53341 9.34751C9.7004 9.42008 9.88167 9.45384 10.0636 9.44627C10.3412 9.45374 10.6122 9.36154 10.8277 9.18637C11.0404 9.00442 11.1722 8.7455 11.1941 8.46646H11.0915C11.0662 8.72196 10.9427 8.95768 10.7471 9.124C10.5783 9.24145 10.3826 9.31425 10.1781 9.33561C9.97357 9.35697 9.76698 9.3262 9.57759 9.24615C9.45057 9.18407 9.34079 9.09169 9.25792 8.97716C9.1715 8.85687 9.10927 8.72094 9.07469 8.57692C9.03362 8.41414 9.01182 8.24709 9.00972 8.07922L9.00452 8.08962ZM11.1214 7.98566H9.00452C9.0117 7.81447 9.04636 7.64555 9.10718 7.48536C9.16058 7.34616 9.23848 7.21765 9.33718 7.10591C9.42891 7.00271 9.54198 6.92068 9.66855 6.86551C9.79623 6.80923 9.93446 6.78088 10.074 6.78234C10.2305 6.77921 10.3857 6.81211 10.5275 6.8785C10.6551 6.93962 10.7674 7.0284 10.8563 7.1384C10.9461 7.25491 11.0135 7.3871 11.0551 7.52824C11.0997 7.67837 11.122 7.83424 11.1214 7.99086V7.98566ZM13.3682 7.52564H13.4721C13.4721 7.23066 13.3851 7.01495 13.2122 6.8759C13.0073 6.73136 12.7596 6.66037 12.5092 6.67449C12.3673 6.67121 12.2258 6.69186 12.0908 6.73556C11.9885 6.77074 11.8941 6.82547 11.8127 6.8967C11.745 6.95554 11.692 7.02942 11.658 7.11241C11.6284 7.18462 11.6125 7.26176 11.6113 7.33982C11.6055 7.46039 11.6324 7.58027 11.6892 7.68678C11.7471 7.77727 11.8315 7.84764 11.9309 7.8882C12.0153 7.92495 12.1022 7.95578 12.1908 7.98046C12.287 8.00775 12.3988 8.03764 12.5261 8.06882L12.8627 8.15069C12.9641 8.17515 13.062 8.21271 13.1537 8.26245C13.2351 8.30549 13.3058 8.36635 13.3604 8.44047C13.4173 8.52365 13.4456 8.62309 13.4409 8.72376C13.444 8.82628 13.4159 8.92733 13.3604 9.01354C13.3073 9.09221 13.2377 9.1583 13.1563 9.20717C13.071 9.25791 12.978 9.29435 12.8809 9.31502C12.7832 9.33744 12.6834 9.34877 12.5833 9.34881C12.3261 9.36648 12.071 9.29234 11.8634 9.13959C11.6962 9.00012 11.6126 8.78094 11.6126 8.48206H11.5086C11.5086 8.81559 11.5991 9.05989 11.7802 9.21496C11.9613 9.37003 12.229 9.44757 12.5833 9.44757C12.6987 9.44731 12.8138 9.43424 12.9263 9.40859C13.0367 9.38395 13.1419 9.33995 13.2369 9.27864C13.3268 9.22014 13.4027 9.14248 13.4591 9.05123C13.5182 8.94725 13.5474 8.82899 13.5436 8.70947C13.5484 8.60147 13.5227 8.49431 13.4695 8.40019C13.4192 8.32126 13.3522 8.25429 13.2733 8.20397C13.1883 8.15051 13.0959 8.10979 12.9991 8.08312C12.8965 8.05323 12.7951 8.02464 12.6911 7.99735L12.3117 7.89859C12.2091 7.87314 12.1083 7.84057 12.0102 7.80113C11.9255 7.76707 11.8515 7.71099 11.7958 7.6387C11.737 7.54912 11.7087 7.4429 11.7152 7.33592C11.7186 7.29211 11.7256 7.24865 11.736 7.20597C11.7539 7.13636 11.7877 7.07186 11.8348 7.01755C11.9001 6.94347 11.9814 6.88525 12.0726 6.84732C12.2114 6.79092 12.3608 6.76521 12.5105 6.77195C12.6283 6.77098 12.7458 6.78496 12.8601 6.81353C12.9582 6.83764 13.0502 6.8819 13.1304 6.94348C13.2069 7.00448 13.2672 7.0835 13.3058 7.17348C13.3502 7.28136 13.3714 7.39735 13.3682 7.51395V7.52564ZM15.7592 7.52564H15.8632C15.8632 7.23066 15.7761 7.01495 15.6033 6.8759C15.3984 6.73136 15.1506 6.66037 14.9002 6.67449C14.7587 6.67111 14.6177 6.69176 14.4831 6.73556C14.3803 6.77043 14.2854 6.82519 14.2037 6.8967C14.136 6.95554 14.0831 7.02942 14.0491 7.11241C14.0194 7.18462 14.0035 7.26176 14.0023 7.33982C13.9965 7.46039 14.0235 7.58027 14.0803 7.68678C14.1381 7.77727 14.2225 7.84764 14.322 7.8882C14.4064 7.92495 14.4932 7.95578 14.5819 7.98046C14.678 8.00775 14.7898 8.03764 14.9171 8.06882L15.2537 8.15069C15.3552 8.17515 15.453 8.21271 15.5448 8.26245C15.6262 8.30549 15.6968 8.36635 15.7514 8.44047C15.8083 8.52365 15.8366 8.62309 15.832 8.72376C15.8351 8.82628 15.807 8.92733 15.7514 9.01354C15.6983 9.09221 15.6287 9.1583 15.5474 9.20717C15.4621 9.25791 15.369 9.29435 15.2719 9.31502C15.1743 9.33744 15.0745 9.34877 14.9743 9.34881C14.7171 9.36648 14.4621 9.29234 14.2544 9.13959C14.0863 9.00012 14.0027 8.78094 14.0036 8.48206H13.8996C13.8996 8.81559 13.9902 9.05989 14.1712 9.21496C14.3523 9.37003 14.62 9.44757 14.9743 9.44757C15.0898 9.44744 15.2048 9.43437 15.3174 9.40859C15.4278 9.38395 15.5329 9.33995 15.628 9.27864C15.7179 9.22014 15.7938 9.14248 15.8502 9.05123C15.9092 8.94725 15.9385 8.82899 15.9346 8.70947C15.9394 8.60147 15.9137 8.49431 15.8606 8.40019C15.8102 8.32126 15.7433 8.25429 15.6643 8.20397C15.5793 8.15051 15.487 8.10979 15.3901 8.08312C15.2875 8.05323 15.1861 8.02464 15.0835 7.99735L14.7027 7.89859C14.6001 7.87314 14.4994 7.84057 14.4012 7.80113C14.3166 7.76707 14.2425 7.71099 14.1868 7.6387C14.128 7.54912 14.0997 7.4429 14.1063 7.33592C14.1097 7.29211 14.1166 7.24865 14.1271 7.20597C14.1449 7.13636 14.1787 7.07186 14.2258 7.01755C14.2911 6.94347 14.3724 6.88525 14.4636 6.84732C14.6025 6.79092 14.7518 6.76521 14.9015 6.77195C15.0194 6.77098 15.1368 6.78496 15.2511 6.81353C15.3493 6.83735 15.4414 6.88163 15.5214 6.94348C15.598 7.00448 15.6582 7.0835 15.6968 7.17348C15.7412 7.28136 15.7624 7.39735 15.7592 7.51395V7.52564Z"
            fill="#313338"
        />
        <path
            d="M5.11387 10.3624H4.88126V6.66933H5.11517V7.18912C5.12816 7.16703 5.14116 7.14494 5.15545 7.12415C5.22295 7.02083 5.30577 6.92838 5.40105 6.84996C5.49882 6.7714 5.60967 6.71069 5.72852 6.67063C5.85423 6.62883 5.9859 6.60777 6.11837 6.60825C6.29175 6.60546 6.46342 6.64282 6.61996 6.71741C6.76777 6.79 6.8971 6.89533 6.99811 7.02538C7.10587 7.1607 7.1874 7.31495 7.23852 7.4802C7.29361 7.66574 7.32076 7.85844 7.31908 8.05197C7.31989 8.23801 7.29362 8.42317 7.24112 8.60165C7.19299 8.76878 7.11603 8.92622 7.01371 9.06686C6.9116 9.20659 6.77719 9.31952 6.62195 9.396C6.46672 9.47249 6.29527 9.51026 6.12226 9.50609C5.85703 9.51547 5.59671 9.43283 5.38546 9.27218C5.275 9.1843 5.18275 9.07572 5.11387 8.95251V10.3624ZM6.12226 6.84086C5.97499 6.83863 5.8293 6.8716 5.69734 6.93702C5.57443 6.99966 5.46667 7.08835 5.38156 7.19692C5.29222 7.31374 5.22485 7.44584 5.18274 7.58676C5.13643 7.73969 5.11322 7.89868 5.11387 8.05847C5.11387 8.45611 5.20743 8.76408 5.39196 8.9681C5.48268 9.07124 5.59539 9.15269 5.72179 9.20644C5.84819 9.2602 5.98505 9.28488 6.12226 9.27868C6.27398 9.28369 6.42415 9.24682 6.55629 9.17212C6.67505 9.10176 6.77669 9.00589 6.85387 8.89143C6.93359 8.7723 6.99248 8.64047 7.028 8.50159C7.0656 8.35599 7.08481 8.20625 7.08518 8.05587C7.0862 7.89694 7.06521 7.73863 7.0228 7.58546C6.98569 7.44601 6.92457 7.31409 6.84217 7.19562C6.76449 7.08707 6.66261 6.99809 6.5446 6.93572C6.41379 6.86978 6.26871 6.83719 6.12226 6.84086ZM5.01121 8.58086H5.0476C5.0333 8.52628 5.02161 8.4691 5.01121 8.41063V8.58086ZM5.01121 7.54128V7.7453C5.02353 7.67721 5.04002 7.60994 5.06059 7.54388L5.01121 7.54128ZM10.035 9.50869C9.8535 9.51311 9.6733 9.47716 9.5074 9.40343C9.35292 9.33452 9.2187 9.22714 9.11756 9.09155C9.01633 8.95167 8.94268 8.79379 8.90055 8.62634C8.85319 8.44126 8.83004 8.25081 8.83168 8.05977C8.82835 7.85131 8.86269 7.64397 8.93303 7.44771C8.99449 7.28004 9.08609 7.12502 9.20333 6.9903C9.31182 6.86842 9.44461 6.7706 9.59317 6.70311C9.73805 6.63897 9.89473 6.60577 10.0532 6.60565C10.249 6.6018 10.4428 6.64644 10.6172 6.7356C10.7712 6.81524 10.9047 6.92957 11.007 7.06957C11.1079 7.21204 11.1814 7.37198 11.224 7.54128C11.2683 7.71966 11.2871 7.90341 11.2799 8.08706V8.14943H9.07078C9.0759 8.2902 9.09594 8.43003 9.13055 8.56656C9.1644 8.70218 9.223 8.83037 9.30338 8.94471C9.38103 9.0498 9.48259 9.13489 9.59966 9.19291C9.74132 9.25786 9.89613 9.289 10.0519 9.28388C10.2856 9.29183 10.5149 9.21935 10.7016 9.07856C10.8837 8.92166 10.9982 8.70055 11.0213 8.46131L11.0304 8.40673H11.2617L11.2539 8.4795C11.2289 8.77502 11.0889 9.04892 10.8641 9.24229C10.6361 9.4251 10.3505 9.5209 10.0584 9.51258L10.035 9.50869ZM9.07598 7.91163H11.0564C11.0518 7.78344 11.0308 7.65636 10.994 7.53348C10.9544 7.40176 10.891 7.27843 10.8069 7.16963C10.7243 7.06738 10.62 6.98481 10.5015 6.92792C10.3682 6.86583 10.2223 6.83515 10.0753 6.83826C9.94486 6.83742 9.81568 6.86353 9.69583 6.91493C9.57811 6.96735 9.47274 7.04394 9.38655 7.13974C9.29337 7.24683 9.2199 7.36958 9.16954 7.50229C9.11827 7.63433 9.08632 7.77307 9.07468 7.91423L9.07598 7.91163ZM14.9756 9.50869C14.6066 9.50869 14.3259 9.42552 14.1309 9.26049C13.936 9.09545 13.8373 8.83036 13.8373 8.4808V8.41582H14.0699V8.4808C14.06 8.59272 14.0752 8.70543 14.1146 8.81067C14.1539 8.91591 14.2164 9.011 14.2973 9.08895C14.4939 9.23058 14.7338 9.29907 14.9756 9.28258C15.0709 9.2822 15.1658 9.27175 15.2589 9.25139C15.3507 9.23262 15.4385 9.19834 15.5188 9.15003C15.5925 9.1064 15.6555 9.04692 15.7033 8.9759C15.7524 8.89839 15.7764 8.80765 15.7722 8.716C15.7761 8.62906 15.7524 8.54311 15.7046 8.4704C15.6549 8.40468 15.5915 8.35057 15.5188 8.31187C15.432 8.26486 15.3393 8.22947 15.2433 8.20661L14.9067 8.12344C14.7768 8.09226 14.6663 8.06367 14.5689 8.03508C14.4801 8.00899 14.3933 7.97686 14.309 7.93892C14.1967 7.8937 14.1016 7.81409 14.0374 7.71151C13.9744 7.5953 13.9443 7.46411 13.9503 7.33206C13.9516 7.24605 13.9688 7.16102 14.001 7.08126C14.039 6.98869 14.0977 6.90602 14.1725 6.83956C14.2609 6.76367 14.3627 6.70504 14.4727 6.66673C14.6148 6.62046 14.7638 6.59849 14.9132 6.60175C15.178 6.58777 15.4399 6.66329 15.6565 6.81617C15.8437 6.96301 15.9398 7.19692 15.9398 7.51269V7.57766H15.7059V7.51269C15.7092 7.40513 15.6902 7.29806 15.65 7.19822C15.6147 7.11825 15.5608 7.04786 15.4928 6.9929C15.4194 6.93677 15.3354 6.8961 15.2459 6.87335C15.1371 6.84621 15.0253 6.83311 14.9132 6.83436C14.773 6.82815 14.6331 6.85162 14.5026 6.90323C14.4208 6.93753 14.3476 6.98944 14.2882 7.05527C14.2475 7.10212 14.2182 7.1577 14.2024 7.21771C14.1924 7.25513 14.1858 7.29342 14.1829 7.33206C14.1778 7.42361 14.2015 7.51447 14.2505 7.59196C14.2952 7.65565 14.3556 7.70668 14.4259 7.7401C14.5214 7.77867 14.6196 7.81037 14.7196 7.83496L15.0991 7.93372C15.203 7.96101 15.3057 7.9896 15.4083 8.01948C15.5108 8.04837 15.6084 8.09216 15.6981 8.14943C15.786 8.20376 15.8603 8.27756 15.9151 8.36515C15.9747 8.46988 16.0039 8.58911 15.9996 8.70951C16.0039 8.84112 15.971 8.97128 15.9047 9.08506C15.8443 9.18529 15.7616 9.27023 15.663 9.33326C15.561 9.39551 15.4488 9.43949 15.3317 9.4632C15.2146 9.49193 15.0948 9.50805 14.9743 9.51128L14.9756 9.50869ZM12.5846 9.50869C12.2155 9.50869 11.9348 9.42552 11.7399 9.26049C11.545 9.09545 11.4449 8.83036 11.4449 8.4808V8.41582H11.6788V8.4808C11.6689 8.59272 11.6842 8.70543 11.7236 8.81067C11.7629 8.91591 11.8253 9.011 11.9062 9.08895C12.1029 9.23058 12.3428 9.29907 12.5846 9.28258C12.6798 9.2822 12.7748 9.27175 12.8679 9.25139C12.9596 9.23262 13.0475 9.19834 13.1277 9.15003C13.2014 9.1064 13.2644 9.04692 13.3123 8.9759C13.3614 8.89839 13.3854 8.80765 13.3811 8.716C13.385 8.62906 13.3614 8.54311 13.3136 8.4704C13.2639 8.40468 13.2005 8.35057 13.1277 8.31187C13.0409 8.26486 12.9483 8.22947 12.8523 8.20661L12.517 8.12344C12.387 8.09226 12.2753 8.06367 12.1778 8.03508C12.0868 8.00948 11.9978 7.97735 11.9114 7.93892C11.7996 7.89564 11.7042 7.81838 11.6385 7.71801C11.5755 7.6018 11.5454 7.47061 11.5515 7.33856C11.5527 7.25255 11.5699 7.16751 11.6022 7.08776C11.6387 6.99569 11.6956 6.91307 11.7685 6.84606C11.8569 6.77017 11.9587 6.71154 12.0687 6.67323C12.2108 6.62695 12.3597 6.60499 12.5092 6.60825C12.774 6.59426 13.0358 6.66979 13.2525 6.82267C13.4396 6.96951 13.5358 7.20341 13.5358 7.51919V7.58416H13.3019V7.51919C13.3046 7.41167 13.2856 7.30472 13.246 7.20471C13.2107 7.12474 13.1568 7.05436 13.0888 6.9994C13.0154 6.94327 12.9314 6.9026 12.8419 6.87984C12.7331 6.85271 12.6213 6.83961 12.5092 6.84086C12.369 6.83465 12.2291 6.85812 12.0986 6.90973C12.0168 6.94403 11.9436 6.99594 11.8841 7.06177C11.8435 7.10861 11.8141 7.16419 11.7984 7.2242C11.7884 7.26165 11.7819 7.29993 11.7789 7.33856C11.7738 7.43011 11.7974 7.52097 11.8465 7.59845C11.8956 7.66154 11.9606 7.71043 12.0349 7.7401C12.1304 7.77867 12.2285 7.81037 12.3286 7.83496L12.708 7.93372C12.812 7.96101 12.9146 7.9896 13.0173 8.01948C13.1197 8.04837 13.2174 8.09216 13.3071 8.14943C13.395 8.20376 13.4692 8.27756 13.5241 8.36515C13.5836 8.46988 13.6129 8.58911 13.6086 8.70951C13.6129 8.84112 13.58 8.97128 13.5137 9.08506C13.4525 9.18471 13.37 9.26949 13.272 9.33326C13.1699 9.39551 13.0578 9.43949 12.9406 9.4632C12.8236 9.49193 12.7038 9.50805 12.5833 9.51128L12.5846 9.50869ZM7.88825 9.45151H7.65435V6.66933H7.88825V7.08126C7.94596 6.98369 8.02236 6.89846 8.11306 6.83046C8.21151 6.75714 8.32184 6.70131 8.43923 6.66543C8.58118 6.62313 8.72917 6.60469 8.87716 6.61085H8.94083V6.84606H8.87196C8.72131 6.83383 8.56991 6.85743 8.43014 6.91493C8.3144 6.96627 8.21178 7.04312 8.12996 7.13974C8.04684 7.24011 7.98415 7.35577 7.94543 7.4802C7.90658 7.61184 7.88688 7.74839 7.88695 7.88564L7.88825 9.45151ZM7.7843 7.45291V7.59845C7.79469 7.54907 7.80509 7.50099 7.81938 7.45291H7.7843ZM4.87087 9.45411H4.57719L3.60778 8.19881L2.64356 9.45411H0.000427246V5.63754H2.57859V5.87015H0.233034V7.35025H2.44215V7.58416H0.233034V9.2215H2.53441L3.46353 8.01559L2.44994 6.66933H2.74752L3.60778 7.82976L4.49142 6.66933H4.77731L3.75852 8.01559L4.87087 9.45411Z"
            fill="#313338"
        />
    </IconBase>
);

export default ExpressColorIcon;