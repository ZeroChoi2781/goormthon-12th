# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.22.0](https://github.com/goorm-dev/gds/compare/v0.21.4...v0.22.0) (2024-11-28)


### Code Refactoring

* **Button:** useStyles제거 및 docs linkbutton 수정 ([#581](https://github.com/goorm-dev/gds/issues/581)) ([e8ebc78](https://github.com/goorm-dev/gds/commit/e8ebc7898fcbe0b0dd6886034e61468e7da09c4f)), closes [#588](https://github.com/goorm-dev/gds/issues/588)


### Bug Fix

* **Button:** React component의 경우 확인에서 제외 ([#614](https://github.com/goorm-dev/gds/issues/614)) ([b719a6f](https://github.com/goorm-dev/gds/commit/b719a6f5752e97c1526a297c774e39fb4b733012))
* **Text:** 컴포넌트 ref 타입 추론 버그 수정 ([#601](https://github.com/goorm-dev/gds/issues/601)) ([d7e30eb](https://github.com/goorm-dev/gds/commit/d7e30eb324a71f3dd565ab7be0a69ff19cf79dbb))


### Documentation

* 사용성 개선하기 ([#593](https://github.com/goorm-dev/gds/issues/593)) ([98d1ca0](https://github.com/goorm-dev/gds/commit/98d1ca0e8deab390b2fc564c492075e51e705ea4)), closes [#613](https://github.com/goorm-dev/gds/issues/613) [#594](https://github.com/goorm-dev/gds/issues/594) [#598](https://github.com/goorm-dev/gds/issues/598)


### Styling

* **IconButton:** icon 중앙정렬 Flex로 설정 변경 ([#608](https://github.com/goorm-dev/gds/issues/608)) ([6b998a1](https://github.com/goorm-dev/gds/commit/6b998a12e4ee1b8d5991b5122e1777710d6431e4))


### New Features

* **Alert, Badge:** gap 형태 추가 ([#589](https://github.com/goorm-dev/gds/issues/589)) ([1f25786](https://github.com/goorm-dev/gds/commit/1f2578666d9e38427704f525346b8e101846df1e))
* **IconButton:** IconButton forwardRef 추가, useStyle 제거 ([#609](https://github.com/goorm-dev/gds/issues/609)) ([ee1cce6](https://github.com/goorm-dev/gds/commit/ee1cce6453f4c54f51cf700abff1637b1bba4906))
* **Switch:** Switch 컴포넌트 제작 ([#533](https://github.com/goorm-dev/gds/issues/533)) ([9383054](https://github.com/goorm-dev/gds/commit/9383054baa1cb346b889b5c6c684e266d99e879e))
* **Text:** Vapor Core의 Text 컴포넌트 추가 ([#566](https://github.com/goorm-dev/gds/issues/566)) ([7f33058](https://github.com/goorm-dev/gds/commit/7f3305880094698650a8fcc97eef6ce1ab7d0dd9))


### Build System

* **core:** 테스트 코드 환경 구축 및 alert,button,badge 테스트 ([#556](https://github.com/goorm-dev/gds/issues/556)) ([0e90a22](https://github.com/goorm-dev/gds/commit/0e90a22cdf179313dd02a18348e50631f15e8ec7)), closes [#559](https://github.com/goorm-dev/gds/issues/559)



### [0.21.4](https://github.com/goorm-dev/gds/compare/v0.21.3...v0.21.4) (2024-11-27)

**Note:** Version bump only for package @goorm-dev/vapor-core





### [0.21.3](https://github.com/goorm-dev/gds/compare/v0.21.2...v0.21.3) (2024-11-22)

**Note:** Version bump only for package @goorm-dev/vapor-core





### [0.21.2](https://github.com/goorm-dev/gds/compare/v0.21.1...v0.21.2) (2024-11-19)


### Bug Fix

* **core-tabs:** 누락된 className 추가 ([#590](https://github.com/goorm-dev/gds/issues/590)) ([0d6317e](https://github.com/goorm-dev/gds/commit/0d6317e6dfab60ed2163044156e2c782225d1ae4))



### [0.21.1](https://github.com/goorm-dev/gds/compare/v0.21.0...v0.21.1) (2024-11-18)


### Bug Fix

* **IconButton:** IconButton className 안 넘겨 주는 문제 수정 ([#583](https://github.com/goorm-dev/gds/issues/583)) ([b4bc2d7](https://github.com/goorm-dev/gds/commit/b4bc2d7b0fc4e3e5738d81f2b5c40725e4659fec))



## [0.21.0](https://github.com/goorm-dev/gds/compare/v0.20.0...v0.21.0) (2024-11-14)


### Styling

* **IconButton:** IconButton 디자인 QA ([#540](https://github.com/goorm-dev/gds/issues/540)) ([653564a](https://github.com/goorm-dev/gds/commit/653564ac0c3e90287ce507dbc8267b0410b034af))
* **Nav:** NavItem 중 href가 적용되지 않은 item 스타일 수정 ([#562](https://github.com/goorm-dev/gds/issues/562)) ([52f6151](https://github.com/goorm-dev/gds/commit/52f61511209bf12e3b098722426c31526cab2958))



## [0.20.0](https://github.com/goorm-dev/gds/compare/v0.19.1...v0.20.0) (2024-11-06)


### Other

* **vapor-core:** 공용 size token을 이용한 타입 추출 ([#548](https://github.com/goorm-dev/gds/issues/548)) ([e74f4ae](https://github.com/goorm-dev/gds/commit/e74f4ae9f0b0c624d82fd12640ce3d40b15a7ffd))


### New Features

* **lint:** eslint 분리 및 import sort rule 추가 ([#549](https://github.com/goorm-dev/gds/issues/549)) ([7945a18](https://github.com/goorm-dev/gds/commit/7945a18d9cce7db7d6db61e28dbb92cb43c4255a))
* **search-input:** SearchInput 컴포넌트 추가 ([#520](https://github.com/goorm-dev/gds/issues/520)) ([c87ad39](https://github.com/goorm-dev/gds/commit/c87ad3992f07377d6566d138952096feab7e8648))
* **TextInput:** vapor-core TextInput 컴포넌트 추가 ([#488](https://github.com/goorm-dev/gds/issues/488)) ([f29cc66](https://github.com/goorm-dev/gds/commit/f29cc66b6105486f9b0ecbe3a2ab7f77e0315b12))


### Bug Fix

* **search-input:** import 구문에 불필요한 type 키워드 제거 ([#558](https://github.com/goorm-dev/gds/issues/558)) ([077acb4](https://github.com/goorm-dev/gds/commit/077acb48dec7bc682e5908e4244cc30332b2cc11)), closes [#560](https://github.com/goorm-dev/gds/issues/560)



### [0.19.1](https://github.com/goorm-dev/gds/compare/v0.19.0...v0.19.1) (2024-10-28)


### Bug Fix

* **Nav:** isolatedModules 플래그 활성화 시 타입 내보내기 수정 ([17e94a2](https://github.com/goorm-dev/gds/commit/17e94a2946e9add5748d1356ec39ee571e8e5ff6))
* **Tabs:** isolatedModules 플래그 활성화 시 타입 내보내기 수정 ([e96af34](https://github.com/goorm-dev/gds/commit/e96af344f1c9cf4d1432699ea82af28435faa91f))



## [0.19.0](https://github.com/goorm-dev/gds/compare/v0.18.1...v0.19.0) (2024-10-28)


### Styling

* **Checkbox:** Checkbox 디자인 QA ([#517](https://github.com/goorm-dev/gds/issues/517)) ([8348085](https://github.com/goorm-dev/gds/commit/8348085aea6bd09e255a91b58fbcd434c4936a46))


### New Features

* **Button:** Core Button shape property 추가 ([#525](https://github.com/goorm-dev/gds/issues/525)) ([ecba09f](https://github.com/goorm-dev/gds/commit/ecba09f035bcc2bd4488ac3cc5dcd2d24c66c183)), closes [#536](https://github.com/goorm-dev/gds/issues/536)
* **nav:** 네비게이션 컴포넌트 추가 ([#527](https://github.com/goorm-dev/gds/issues/527)) ([01fadb5](https://github.com/goorm-dev/gds/commit/01fadb563e602ff6321547383c182da518635767))
* **tabs:** Tabs 컴포넌트 추가 ([#529](https://github.com/goorm-dev/gds/issues/529)) ([1c3f8c6](https://github.com/goorm-dev/gds/commit/1c3f8c63a3b80aace317c5109c1fbc61bc4e4a3a))



### [0.18.1](https://github.com/goorm-dev/gds/compare/v0.18.0...v0.18.1) (2024-10-25)


### New Features

* **IconButton:** core IconButton 추가 ([#528](https://github.com/goorm-dev/gds/issues/528)) ([6195941](https://github.com/goorm-dev/gds/commit/6195941776129e9a231dd0091ed9b7bc5ad9484f))


### Styling

* **Breadcrumb:** Breadcrumb 디자인 QA 수정 ([#518](https://github.com/goorm-dev/gds/issues/518)) ([3a3ffb0](https://github.com/goorm-dev/gds/commit/3a3ffb02f34a3870f863b0bab2cfc12f1317db63))


### Bug Fix

* **Breadcrumbs:** build 오류 수정 ([#535](https://github.com/goorm-dev/gds/issues/535)) ([51222bc](https://github.com/goorm-dev/gds/commit/51222bc0cfdeb570da172ee0c761a77dbdd7c991))



## [0.18.0](https://github.com/goorm-dev/gds/compare/v0.17.0...v0.18.0) (2024-10-18)


### Code Refactoring

* **avatar:** Avatar 컴포넌트 구조 변경 ([#480](https://github.com/goorm-dev/gds/issues/480)) ([a3d3e16](https://github.com/goorm-dev/gds/commit/a3d3e16ce6d19c7698ffe5997cab84941fce8381))


### New Features

* **foundation:** text-secondary 컬러 변경, scroll 스타일링 ([#514](https://github.com/goorm-dev/gds/issues/514)) ([86709ae](https://github.com/goorm-dev/gds/commit/86709ae25e7788cb6121b894aa5a1f1c79b8a7ab))
* **label:** 코어 Label 컴포넌트 추가 ([#515](https://github.com/goorm-dev/gds/issues/515)) ([8fe9bb9](https://github.com/goorm-dev/gds/commit/8fe9bb965275fe5aa6be398b6d2b13795acfe6a3))
* **vapor-docs:** 404 페이지 추가 ([#505](https://github.com/goorm-dev/gds/issues/505)) ([54c5374](https://github.com/goorm-dev/gds/commit/54c5374e5da1d5b6da58e4a628f74db63f28085a))


### Bug Fix

* **avatar:** children 타입 및 컨텍스트 공유 문제 해결 ([#521](https://github.com/goorm-dev/gds/issues/521)) ([f87d783](https://github.com/goorm-dev/gds/commit/f87d7833d359acde938cd8e9b0dd6affe46a7e08))



## [0.17.0](https://github.com/goorm-dev/gds/compare/v0.16.1...v0.17.0) (2024-10-11)


### Bug Fix

* **dropdown.trigger:** 명시적으로 타입 export ([#513](https://github.com/goorm-dev/gds/issues/513)) ([0861f74](https://github.com/goorm-dev/gds/commit/0861f742551173ecc25385ebc0e835a08c8ecd60))


### New Features

* **dropdown:** Dropdown 컴포넌트 추가 ([#492](https://github.com/goorm-dev/gds/issues/492)) ([f7c70bc](https://github.com/goorm-dev/gds/commit/f7c70bc1f96a42b992bc36b3f361811afdf77c43))
* **Icon:** 아이콘 리뉴얼 반영 ([#503](https://github.com/goorm-dev/gds/issues/503)) ([c75524b](https://github.com/goorm-dev/gds/commit/c75524b0f8212709a8593879f530d65f3ff47fc0)), closes [#509](https://github.com/goorm-dev/gds/issues/509)



### [0.16.1](https://github.com/goorm-dev/gds/compare/v0.16.0...v0.16.1) (2024-10-07)

**Note:** Version bump only for package @goorm-dev/vapor-core





## [0.16.0](https://github.com/goorm-dev/gds/compare/v0.15.0...v0.16.0) (2024-10-04)


### Other

* **release:** publish v0.15.1 ([0573a5f](https://github.com/goorm-dev/gds/commit/0573a5fec0475554df86b88bf18c0cd36d41b2d5))


### New Features

* **Core:** Card, Badge, Button Core Component 추가 ([#486](https://github.com/goorm-dev/gds/issues/486)) ([1072dcf](https://github.com/goorm-dev/gds/commit/1072dcf2e20f6a4a97841b4e097561957528afb2)), closes [#487](https://github.com/goorm-dev/gds/issues/487) [#495](https://github.com/goorm-dev/gds/issues/495)



### [0.15.1](https://github.com/goorm-dev/gds/compare/v0.15.0...v0.15.1) (2024-09-26)

**Note:** Version bump only for package @goorm-dev/vapor-core





## [0.15.0](https://github.com/goorm-dev/gds/compare/v0.14.0...v0.15.0) (2024-09-24)

**Note:** Version bump only for package @goorm-dev/vapor-core





## [0.14.0](https://github.com/goorm-dev/gds/compare/v0.13.1...v0.14.0) (2024-09-20)

**Note:** Version bump only for package @goorm-dev/vapor-core





### [0.13.1](https://github.com/goorm-dev/gds/compare/v0.13.0...v0.13.1) (2024-09-10)

**Note:** Version bump only for package @goorm-dev/vapor-core

## [0.13.0](https://github.com/goorm-dev/gds/compare/v0.12.3...v0.13.0) (2024-09-10)

### Bug Fix

-   **checkbox:** checkbox 빌드 에러 수정 ([#472](https://github.com/goorm-dev/gds/issues/472)) ([eb8ad11](https://github.com/goorm-dev/gds/commit/eb8ad1178c09940c325aadc7a62b1dee2a6af23b))

### New Features

-   **avatar:** 코어 Avatar 컴포넌트 추가 ([#455](https://github.com/goorm-dev/gds/issues/455)) ([cfe8e1e](https://github.com/goorm-dev/gds/commit/cfe8e1e325c3e7c50c12c417d17243161d9e60fa))
-   **Breadcrumbs:** core Breadcrumbs 추가 ([#461](https://github.com/goorm-dev/gds/issues/461)) ([f0aa8c6](https://github.com/goorm-dev/gds/commit/f0aa8c6d6f32ed2d2f74c9c33974a7a4a716a1e2))
-   **Checkbox:** core Checkbox 추가 ([#470](https://github.com/goorm-dev/gds/issues/470)) ([70f9178](https://github.com/goorm-dev/gds/commit/70f91787d3a9558c16d0d3b6ba54b4c3ff54b118))
-   **dialog:** Core Dialog 컴포넌트 추가 ([#432](https://github.com/goorm-dev/gds/issues/432)) ([e24f888](https://github.com/goorm-dev/gds/commit/e24f8886114bd4f127374c9b8b4cde6c494c399c))
-   **useStyles:** 동적 스타일링을 위한 커스텀 훅 추가 ([#451](https://github.com/goorm-dev/gds/issues/451)) ([87be624](https://github.com/goorm-dev/gds/commit/87be62407afcfbb724e5eaddff86396c244ec34c))
-   **vapor-core:** Alert 컴포넌트 생성 ([#471](https://github.com/goorm-dev/gds/issues/471)) ([b90630a](https://github.com/goorm-dev/gds/commit/b90630a0707b90ba0ff9752cff7b359ce9b9c6b2))

### Documentation

-   **Breadcrumb:** Breadcrumbs docs 업데이트, 빌드 오류 수정 ([#473](https://github.com/goorm-dev/gds/issues/473)) ([37fc6ed](https://github.com/goorm-dev/gds/commit/37fc6ed426dede70804ba398ceb4a44c3ed6255b))

### [0.12.3](https://github.com/goorm-dev/gds/compare/v0.12.2...v0.12.3) (2024-09-03)

**Note:** Version bump only for package @goorm-dev/vapor-core

### [0.12.2](https://github.com/goorm-dev/gds/compare/v0.12.1...v0.12.2) (2024-08-30)

**Note:** Version bump only for package @goorm-dev/vapor-core

### [0.12.1](https://github.com/goorm-dev/gds/compare/v0.12.0...v0.12.1) (2024-08-30)

**Note:** Version bump only for package @goorm-dev/vapor-core

## [0.12.0](https://github.com/goorm-dev/gds/compare/v0.11.0...v0.12.0) (2024-08-28)

**Note:** Version bump only for package @goorm-dev/vapor-core

## [0.11.0](https://github.com/goorm-dev/gds/compare/v0.10.0...v0.11.0) (2024-08-16)

**Note:** Version bump only for package @goorm-dev/vapor-core

## [0.10.0](https://github.com/goorm-dev/gds/compare/v0.9.0...v0.10.0) (2024-08-16)

**Note:** Version bump only for package @goorm-dev/vapor-core
