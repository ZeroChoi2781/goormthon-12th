# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.22.0](https://github.com/goorm-dev/gds/compare/v0.21.4...v0.22.0) (2024-11-28)


### Code Refactoring

* **Button:** useStyles제거 및 docs linkbutton 수정 ([#581](https://github.com/goorm-dev/gds/issues/581)) ([e8ebc78](https://github.com/goorm-dev/gds/commit/e8ebc7898fcbe0b0dd6886034e61468e7da09c4f)), closes [#588](https://github.com/goorm-dev/gds/issues/588)


### Other

* **scripts:** yarn workspace 명령을 간단하게 실행하는 스크립트 추가 ([#602](https://github.com/goorm-dev/gds/issues/602)) ([18b34c2](https://github.com/goorm-dev/gds/commit/18b34c2962126c92a77ca7219d3525ff12cfe993))


### Documentation

* **color:** semantic color token 업데이트 ([#572](https://github.com/goorm-dev/gds/issues/572)) ([73c28f9](https://github.com/goorm-dev/gds/commit/73c28f96da420c270c9e8c1027d3d7d9cb97be6b))
* core all-components 페이지 추출 ([#582](https://github.com/goorm-dev/gds/issues/582)) ([0ea18fb](https://github.com/goorm-dev/gds/commit/0ea18fb6bfac25a8f78c704b77594a752be17c43))
* 사용성 개선하기 ([#593](https://github.com/goorm-dev/gds/issues/593)) ([98d1ca0](https://github.com/goorm-dev/gds/commit/98d1ca0e8deab390b2fc564c492075e51e705ea4)), closes [#613](https://github.com/goorm-dev/gds/issues/613) [#594](https://github.com/goorm-dev/gds/issues/594) [#598](https://github.com/goorm-dev/gds/issues/598)


### Styling

* **IconButton:** icon 중앙정렬 Flex로 설정 변경 ([#608](https://github.com/goorm-dev/gds/issues/608)) ([6b998a1](https://github.com/goorm-dev/gds/commit/6b998a12e4ee1b8d5991b5122e1777710d6431e4))


### New Features

* **Alert, Badge:** gap 형태 추가 ([#589](https://github.com/goorm-dev/gds/issues/589)) ([1f25786](https://github.com/goorm-dev/gds/commit/1f2578666d9e38427704f525346b8e101846df1e))
* **IconButton:** IconButton forwardRef 추가, useStyle 제거 ([#609](https://github.com/goorm-dev/gds/issues/609)) ([ee1cce6](https://github.com/goorm-dev/gds/commit/ee1cce6453f4c54f51cf700abff1637b1bba4906))
* **icon:** chrome symbol icon 추가 ([#619](https://github.com/goorm-dev/gds/issues/619)) ([f921937](https://github.com/goorm-dev/gds/commit/f9219370b7dddd6f387ffed326ab1be4bfa7b5d1))
* **icon:** UserSearchIcon, AccessibilityIcon 추가 ([#592](https://github.com/goorm-dev/gds/issues/592)) ([3500580](https://github.com/goorm-dev/gds/commit/3500580974de5b7cc4ab04225ac9b16cd857e63e))
* **Switch:** Switch 컴포넌트 제작 ([#533](https://github.com/goorm-dev/gds/issues/533)) ([9383054](https://github.com/goorm-dev/gds/commit/9383054baa1cb346b889b5c6c684e266d99e879e))
* **Text:** Vapor Core의 Text 컴포넌트 추가 ([#566](https://github.com/goorm-dev/gds/issues/566)) ([7f33058](https://github.com/goorm-dev/gds/commit/7f3305880094698650a8fcc97eef6ce1ab7d0dd9))
* **ThemeProvider:** 테마 변경시스템 개발 ([#568](https://github.com/goorm-dev/gds/issues/568)) ([b38026f](https://github.com/goorm-dev/gds/commit/b38026f666ba2753ce006e4656155345fe0650fe))


### Build System

* **core:** 테스트 코드 환경 구축 및 alert,button,badge 테스트 ([#556](https://github.com/goorm-dev/gds/issues/556)) ([0e90a22](https://github.com/goorm-dev/gds/commit/0e90a22cdf179313dd02a18348e50631f15e8ec7)), closes [#559](https://github.com/goorm-dev/gds/issues/559)


### Bug Fix

* **Button:** React component의 경우 확인에서 제외 ([#614](https://github.com/goorm-dev/gds/issues/614)) ([b719a6f](https://github.com/goorm-dev/gds/commit/b719a6f5752e97c1526a297c774e39fb4b733012))
* npm config 설정 스텝 추가 ([#626](https://github.com/goorm-dev/gds/issues/626)) ([7552959](https://github.com/goorm-dev/gds/commit/7552959ea8c7e0f9a9e0c38ee6bb34ec0bd462b9))
* **Text:** 컴포넌트 ref 타입 추론 버그 수정 ([#601](https://github.com/goorm-dev/gds/issues/601)) ([d7e30eb](https://github.com/goorm-dev/gds/commit/d7e30eb324a71f3dd565ab7be0a69ff19cf79dbb))
* **Toastify:** react-toastify 버전 수정 ([#580](https://github.com/goorm-dev/gds/issues/580)) ([3017724](https://github.com/goorm-dev/gds/commit/301772437310e4903edbf11754f3df1f1d8d4cdb))



### [0.21.4](https://github.com/goorm-dev/gds/compare/v0.21.3...v0.21.4) (2024-11-27)


### New Features

* **plop:** 서브 컴포넌트 추가를 위한 plop prompt 추가 ([#569](https://github.com/goorm-dev/gds/issues/569)) ([3357665](https://github.com/goorm-dev/gds/commit/335766541e4deaaa0f79a0544f55f64dd90a65d8))


### Other

* console.log 제거 ([#616](https://github.com/goorm-dev/gds/issues/616)) ([74004b2](https://github.com/goorm-dev/gds/commit/74004b243c2befdd5d2df33e2bb6ded12a6b6553))



### [0.21.3](https://github.com/goorm-dev/gds/compare/v0.21.2...v0.21.3) (2024-11-22)


### Bug Fix

* **ButtonToggleGroup:** vapor-components에서 이전 버전 스타일 또는 gds-components 스타일이 동시에 불려지는 오류 해결 ([#612](https://github.com/goorm-dev/gds/issues/612)) ([9193a73](https://github.com/goorm-dev/gds/commit/9193a731c5e27dd8e56c9def05d7c55629e75c59))
* **DropdownToggle:** direction="right", "left", "up" 일 때, caret 중복되어 생기는 이슈 해결 ([#611](https://github.com/goorm-dev/gds/issues/611)) ([ae9e9be](https://github.com/goorm-dev/gds/commit/ae9e9bec9d047b10c26bf8565d29203c36189465))


### Documentation

* import 오타 수정 ([#597](https://github.com/goorm-dev/gds/issues/597)) ([ec01d90](https://github.com/goorm-dev/gds/commit/ec01d909a3ac708a4a218a8bf220af574a1fffcd))
* 빌드오류나는 goorm-lader, progress 페이지 임시 제거 ([d856037](https://github.com/goorm-dev/gds/commit/d856037315863b8b3755c8915d47bd492844edff))



### [0.21.2](https://github.com/goorm-dev/gds/compare/v0.21.1...v0.21.2) (2024-11-19)


### Bug Fix

* **Checkbox:** invalid formfeedback bug수정 ([#586](https://github.com/goorm-dev/gds/issues/586)) ([e14325f](https://github.com/goorm-dev/gds/commit/e14325f062f81f37f8346501952ee6756d0702d9))
* **core-tabs:** 누락된 className 추가 ([#590](https://github.com/goorm-dev/gds/issues/590)) ([0d6317e](https://github.com/goorm-dev/gds/commit/0d6317e6dfab60ed2163044156e2c782225d1ae4))
* **FileInput:** 내부적으로 관리되는 value 안 쓰는 값으로 변경 ([#585](https://github.com/goorm-dev/gds/issues/585)) ([b4ec250](https://github.com/goorm-dev/gds/commit/b4ec25024cd22a3950b19c24f490e43ef142079a))
* **foundation:** code foundation수정 ([#587](https://github.com/goorm-dev/gds/issues/587)) ([9e1238f](https://github.com/goorm-dev/gds/commit/9e1238f91bd6e714d810e663c914f309016c966f))
* **PageSizeSelect:** import 경로 수정 ([#596](https://github.com/goorm-dev/gds/issues/596)) ([0d63c09](https://github.com/goorm-dev/gds/commit/0d63c09e7405d78f99fa6986655ed1ca22815937))



### [0.21.1](https://github.com/goorm-dev/gds/compare/v0.21.0...v0.21.1) (2024-11-18)


### Bug Fix

* **IconButton:** IconButton className 안 넘겨 주는 문제 수정 ([#583](https://github.com/goorm-dev/gds/issues/583)) ([b4bc2d7](https://github.com/goorm-dev/gds/commit/b4bc2d7b0fc4e3e5738d81f2b5c40725e4659fec))



## [0.21.0](https://github.com/goorm-dev/gds/compare/v0.20.0...v0.21.0) (2024-11-14)


### Other

* **build:** build script 복구 ([84980dc](https://github.com/goorm-dev/gds/commit/84980dcecdc73c769d99a3ba6011ebeb02507d6e))


### Documentation

* Color Prop 치환값 업데이트 ([#546](https://github.com/goorm-dev/gds/issues/546)) ([f0bf6ec](https://github.com/goorm-dev/gds/commit/f0bf6ecfe7803fc2e8c3e6ed5afc1f318101effc))


### New Features

* **DropdownToggle:** dropdown-toggle 유틸리티 클래스 추가 ([#564](https://github.com/goorm-dev/gds/issues/564)) ([cf5338d](https://github.com/goorm-dev/gds/commit/cf5338dae017879c4f4dfdbce50e94b275b56e10))
* **HardBreakOutlineIcon:** 아이콘 추출 스크립트 실행 ([#570](https://github.com/goorm-dev/gds/issues/570)) ([ebb0385](https://github.com/goorm-dev/gds/commit/ebb0385faf2479432545fb5c18f8a4f64b3fcb65))


### Styling

* **ButtonToggleGroup:** ButtonToggleGroup border 추가 ([#571](https://github.com/goorm-dev/gds/issues/571)) ([7c809ff](https://github.com/goorm-dev/gds/commit/7c809ffa968ac3367696f367811c6c14a48968e5))
* **IconButton:** IconButton 디자인 QA ([#540](https://github.com/goorm-dev/gds/issues/540)) ([653564a](https://github.com/goorm-dev/gds/commit/653564ac0c3e90287ce507dbc8267b0410b034af))
* **Nav:** NavItem 중 href가 적용되지 않은 item 스타일 수정 ([#562](https://github.com/goorm-dev/gds/issues/562)) ([52f6151](https://github.com/goorm-dev/gds/commit/52f61511209bf12e3b098722426c31526cab2958))


### Bug Fix

* **DropdownToggle:** invalid 효과 추가 ([#574](https://github.com/goorm-dev/gds/issues/574)) ([f26a582](https://github.com/goorm-dev/gds/commit/f26a5826674bf69d2225d3ee4d6a7f123bbc72e2))
* **Icon:** 아이콘추가 및 수정 ([#577](https://github.com/goorm-dev/gds/issues/577)) ([5302de2](https://github.com/goorm-dev/gds/commit/5302de23c338420b2267773fd484d41e1d82de4d))
* **PageSizeSelect:** import DropdownToggle 수정 ([#565](https://github.com/goorm-dev/gds/issues/565)) ([da45710](https://github.com/goorm-dev/gds/commit/da457102fcc5db099fc313e7d5e92b22891f4eea))
* SideNav custom active style 적용 안되는 오류 해결 ([#552](https://github.com/goorm-dev/gds/issues/552)) ([dc11443](https://github.com/goorm-dev/gds/commit/dc1144393dcf3039dd7baadf6d90c796081a68cd))
* TextButton color prop 수정 ([#575](https://github.com/goorm-dev/gds/issues/575)) ([7a0e564](https://github.com/goorm-dev/gds/commit/7a0e56481ab8b3dbfd81058362bbf79871ba1a0c))



## [0.20.0](https://github.com/goorm-dev/gds/compare/v0.19.1...v0.20.0) (2024-11-06)


### Bug Fix

* **build:** CI 환경 Node 20으로 변경 ([#557](https://github.com/goorm-dev/gds/issues/557)) ([0a2bf92](https://github.com/goorm-dev/gds/commit/0a2bf92de7bcd4703bf405403566a3acc0457f9e))
* **build:** ts target es5 -> es6로 변경 ([d607d42](https://github.com/goorm-dev/gds/commit/d607d421ed5d5715da946c360b282601e3cd3c04))
* **Footer:** 구름FORUM 제거 ([#553](https://github.com/goorm-dev/gds/issues/553)) ([7ab4cdd](https://github.com/goorm-dev/gds/commit/7ab4cddf8cd667bbebe5ad1647cd01a50b9b6b8b))
* **popovers, tooltips:** fade z-index 버그 수정 ([#551](https://github.com/goorm-dev/gds/issues/551)) ([e225ed6](https://github.com/goorm-dev/gds/commit/e225ed64424b94d69a19782405544b8a43a1fcbf))
* **search-input:** import 구문에 불필요한 type 키워드 제거 ([#558](https://github.com/goorm-dev/gds/issues/558)) ([077acb4](https://github.com/goorm-dev/gds/commit/077acb48dec7bc682e5908e4244cc30332b2cc11)), closes [#560](https://github.com/goorm-dev/gds/issues/560)


### Styling

* **foundation:** secondary 토큰 수정 ([#554](https://github.com/goorm-dev/gds/issues/554)) ([428468a](https://github.com/goorm-dev/gds/commit/428468a023fd0679fe1c13e5d4d74692d0ad710d))


### New Features

* **icon:** icon 스크립트 실행 ([#563](https://github.com/goorm-dev/gds/issues/563)) ([b15ff8d](https://github.com/goorm-dev/gds/commit/b15ff8dc5ae9871556fa24a2e3b54ee216437eb1))
* **lint:** eslint 분리 및 import sort rule 추가 ([#549](https://github.com/goorm-dev/gds/issues/549)) ([7945a18](https://github.com/goorm-dev/gds/commit/7945a18d9cce7db7d6db61e28dbb92cb43c4255a))
* **search-input:** SearchInput 컴포넌트 추가 ([#520](https://github.com/goorm-dev/gds/issues/520)) ([c87ad39](https://github.com/goorm-dev/gds/commit/c87ad3992f07377d6566d138952096feab7e8648))
* **TextInput:** vapor-core TextInput 컴포넌트 추가 ([#488](https://github.com/goorm-dev/gds/issues/488)) ([f29cc66](https://github.com/goorm-dev/gds/commit/f29cc66b6105486f9b0ecbe3a2ab7f77e0315b12))
* **Vapor Theme:** Vapor Theme 스캘폴딩 및 tsup 설치 ([#547](https://github.com/goorm-dev/gds/issues/547)) ([8f58705](https://github.com/goorm-dev/gds/commit/8f587054326451ce7baca179f6e7ebaa41b4501d))


### Other

* **CI:** 알람 채널로 알람 전송 ([#561](https://github.com/goorm-dev/gds/issues/561)) ([ce4d2ec](https://github.com/goorm-dev/gds/commit/ce4d2ec821db6c8450aa5c3955704a9efafccae3))
* **test:** 빌드 스크립트 삭제 ([d1b9c92](https://github.com/goorm-dev/gds/commit/d1b9c92587863e99e8d6c513306e1ab021e21cac))
* **vapor-core:** 공용 size token을 이용한 타입 추출 ([#548](https://github.com/goorm-dev/gds/issues/548)) ([e74f4ae](https://github.com/goorm-dev/gds/commit/e74f4ae9f0b0c624d82fd12640ce3d40b15a7ffd))
* **vapor-icons:** AssignmentOutlineIcon 시안 수정 반영 ([#550](https://github.com/goorm-dev/gds/issues/550)) ([05f9106](https://github.com/goorm-dev/gds/commit/05f910671a4c6ad1e361c4237b2dc17234120ba9))



### [0.19.1](https://github.com/goorm-dev/gds/compare/v0.19.0...v0.19.1) (2024-10-28)


### Other

* **release:** update external CSS ([05f2a92](https://github.com/goorm-dev/gds/commit/05f2a92a051b851ecb16059f961fba6cfc5bcf1f))


### Bug Fix

* **Nav:** isolatedModules 플래그 활성화 시 타입 내보내기 수정 ([17e94a2](https://github.com/goorm-dev/gds/commit/17e94a2946e9add5748d1356ec39ee571e8e5ff6))
* **Tabs:** isolatedModules 플래그 활성화 시 타입 내보내기 수정 ([e96af34](https://github.com/goorm-dev/gds/commit/e96af344f1c9cf4d1432699ea82af28435faa91f))



## [0.19.0](https://github.com/goorm-dev/gds/compare/v0.18.1...v0.19.0) (2024-10-28)


### Documentation

* **toast:** toast import 문 수정 ([#531](https://github.com/goorm-dev/gds/issues/531)) ([0264dc2](https://github.com/goorm-dev/gds/commit/0264dc2606c1154c0d6d201e1873b5c791ee3c35))


### Styling

* **Checkbox:** Checkbox 디자인 QA ([#517](https://github.com/goorm-dev/gds/issues/517)) ([8348085](https://github.com/goorm-dev/gds/commit/8348085aea6bd09e255a91b58fbcd434c4936a46))
* **DatePicker:** 최신 스타일 반영 ([#544](https://github.com/goorm-dev/gds/issues/544)) ([5b9987e](https://github.com/goorm-dev/gds/commit/5b9987e46276faff1534a572aabd7e8134b86647))
* **vapor-foundation:** kid 테마 typography 변경 ([#537](https://github.com/goorm-dev/gds/issues/537)) ([c5c656f](https://github.com/goorm-dev/gds/commit/c5c656f1bb86ffc0265497a4efd44a97e03174ec))


### New Features

* **Button:** Core Button shape property 추가 ([#525](https://github.com/goorm-dev/gds/issues/525)) ([ecba09f](https://github.com/goorm-dev/gds/commit/ecba09f035bcc2bd4488ac3cc5dcd2d24c66c183)), closes [#536](https://github.com/goorm-dev/gds/issues/536)
* **nav:** 네비게이션 컴포넌트 추가 ([#527](https://github.com/goorm-dev/gds/issues/527)) ([01fadb5](https://github.com/goorm-dev/gds/commit/01fadb563e602ff6321547383c182da518635767))
* **resource:** resource script 실행 ([#530](https://github.com/goorm-dev/gds/issues/530)) ([ab7469e](https://github.com/goorm-dev/gds/commit/ab7469ed3537640a67e11290262ebd399be509ad))
* **tabs:** Tabs 컴포넌트 추가 ([#529](https://github.com/goorm-dev/gds/issues/529)) ([1c3f8c6](https://github.com/goorm-dev/gds/commit/1c3f8c63a3b80aace317c5109c1fbc61bc4e4a3a))



### [0.18.1](https://github.com/goorm-dev/gds/compare/v0.18.0...v0.18.1) (2024-10-25)


### Styling

* **Breadcrumb:** Breadcrumb 디자인 QA 수정 ([#518](https://github.com/goorm-dev/gds/issues/518)) ([3a3ffb0](https://github.com/goorm-dev/gds/commit/3a3ffb02f34a3870f863b0bab2cfc12f1317db63))


### Documentation

* **SideNav:** sidenav 타입 표기 오류 수정 ([#541](https://github.com/goorm-dev/gds/issues/541)) ([4a765a8](https://github.com/goorm-dev/gds/commit/4a765a86ab120ab4fd10e6d38a6964c86f1748c1))


### New Features

* **IconButton:** core IconButton 추가 ([#528](https://github.com/goorm-dev/gds/issues/528)) ([6195941](https://github.com/goorm-dev/gds/commit/6195941776129e9a231dd0091ed9b7bc5ad9484f))
* **Icon:** HardBreak,Heading 아이콘 추가 ([eef1a26](https://github.com/goorm-dev/gds/commit/eef1a2648c868e9ae05bab6409bc205cc04fc71b))


### Bug Fix

* **Breadcrumbs:** build 오류 수정 ([#535](https://github.com/goorm-dev/gds/issues/535)) ([51222bc](https://github.com/goorm-dev/gds/commit/51222bc0cfdeb570da172ee0c761a77dbdd7c991))
* **DropdownToggle:** select 지원 ([428a12d](https://github.com/goorm-dev/gds/commit/428a12d190305fba93dea69f7a0eccd8dbc04d49))
* **DropdownToggle:** 열려있을 때 primary효과 추가 ([bb003e6](https://github.com/goorm-dev/gds/commit/bb003e698a5462c012dc77c0f7b6e9059531130b))
* **Icon:** 아이콘 수정 ([4effa35](https://github.com/goorm-dev/gds/commit/4effa35235309bcdef2b336539184f7138ce3e1b))


### Other

* github Action 테스트용 코드 제거 ([f309651](https://github.com/goorm-dev/gds/commit/f3096513d87355c63e5da82f67f152e5463c496a))
* **githubAction:** auto-reviewer 로직 수정 ([#542](https://github.com/goorm-dev/gds/issues/542)) ([e40bd97](https://github.com/goorm-dev/gds/commit/e40bd97e96d1ef7243360d97473ebd5335f94b72))
* **storybook:** 스토리북 컬러값 업데이트 ([b16d40b](https://github.com/goorm-dev/gds/commit/b16d40b7837c6cea5481509070506569f1f51913))
* 모든 패키지 배포하는 깃헙 액션 추가 ([80744ab](https://github.com/goorm-dev/gds/commit/80744abca5a132b14f4231b1920ee41e1abecc73))
* 핫픽스 브랜치 배포되게 수정 ([d0631a9](https://github.com/goorm-dev/gds/commit/d0631a9b581b8dd731639d039180779263f59290))



## [0.18.0](https://github.com/goorm-dev/gds/compare/v0.17.0...v0.18.0) (2024-10-18)


### Code Refactoring

* **avatar:** Avatar 컴포넌트 구조 변경 ([#480](https://github.com/goorm-dev/gds/issues/480)) ([a3d3e16](https://github.com/goorm-dev/gds/commit/a3d3e16ce6d19c7698ffe5997cab84941fce8381))


### New Features

* **date:** Date 패키지 생성 ([#507](https://github.com/goorm-dev/gds/issues/507)) ([e8c534e](https://github.com/goorm-dev/gds/commit/e8c534e3d98e416637b09633a1e3dc7f74b8c066))
* **foundation:** text-secondary 컬러 변경, scroll 스타일링 ([#514](https://github.com/goorm-dev/gds/issues/514)) ([86709ae](https://github.com/goorm-dev/gds/commit/86709ae25e7788cb6121b894aa5a1f1c79b8a7ab))
* **icons:** symbol icon 추가 스크립트 실행 ([#522](https://github.com/goorm-dev/gds/issues/522)) ([fc43d21](https://github.com/goorm-dev/gds/commit/fc43d218af4bcc9769bf12b0791f85cbbefe0d72))
* **label:** 코어 Label 컴포넌트 추가 ([#515](https://github.com/goorm-dev/gds/issues/515)) ([8fe9bb9](https://github.com/goorm-dev/gds/commit/8fe9bb965275fe5aa6be398b6d2b13795acfe6a3))
* **Tools:** 패키지 기본 세팅 ([#511](https://github.com/goorm-dev/gds/issues/511)) ([4bc1fcd](https://github.com/goorm-dev/gds/commit/4bc1fcd5ac05014ff891d35c46189fa39a8a09f1))
* **vapor-docs:** 404 페이지 추가 ([#505](https://github.com/goorm-dev/gds/issues/505)) ([54c5374](https://github.com/goorm-dev/gds/commit/54c5374e5da1d5b6da58e4a628f74db63f28085a))


### Styling

* **Footer:** Footer 로고 다크모드 대응 ([#506](https://github.com/goorm-dev/gds/issues/506)) ([2abd539](https://github.com/goorm-dev/gds/commit/2abd5391113f39a0895d9a810967bf84cbb35984))
* **Nav:** Nav pills 상태 Item background 수정 ([#524](https://github.com/goorm-dev/gds/issues/524)) ([2e82323](https://github.com/goorm-dev/gds/commit/2e8232316b0bad18216b02b97e0430784d1b3d90))


### Bug Fix

* **AlertAvatar:** 색상 오류 수정 ([#519](https://github.com/goorm-dev/gds/issues/519)) ([d5ac0b1](https://github.com/goorm-dev/gds/commit/d5ac0b1858118df3f364a7588f91c30dffa02e48))
* **avatar:** children 타입 및 컨텍스트 공유 문제 해결 ([#521](https://github.com/goorm-dev/gds/issues/521)) ([f87d783](https://github.com/goorm-dev/gds/commit/f87d7833d359acde938cd8e9b0dd6affe46a7e08))
* **Checkbox:** label 구조 변경 ([#523](https://github.com/goorm-dev/gds/issues/523)) ([1738f9d](https://github.com/goorm-dev/gds/commit/1738f9dab36d67695928354bd0886a8439763578))



## [0.17.0](https://github.com/goorm-dev/gds/compare/v0.16.1...v0.17.0) (2024-10-11)


### Documentation

* Example 파운데이션 영향 받기 최소화 ([#500](https://github.com/goorm-dev/gds/issues/500)) ([1e7b26a](https://github.com/goorm-dev/gds/commit/1e7b26acc0d83ef4abf830faab826282809d1745))
* Live Demo Control 버그 해결 ([#502](https://github.com/goorm-dev/gds/issues/502)) ([9deaec1](https://github.com/goorm-dev/gds/commit/9deaec1e3ae782b2b42326dbfe01d974d42e5213))
* 문서 사이트 자잘한 문제들 수정 ([#512](https://github.com/goorm-dev/gds/issues/512)) ([d9a91f8](https://github.com/goorm-dev/gds/commit/d9a91f86d159c8e72881df44bece61cc5f0ab05e))


### Bug Fix

* **dropdown.trigger:** 명시적으로 타입 export ([#513](https://github.com/goorm-dev/gds/issues/513)) ([0861f74](https://github.com/goorm-dev/gds/commit/0861f742551173ecc25385ebc0e835a08c8ecd60))


### New Features

* **dropdown:** Dropdown 컴포넌트 추가 ([#492](https://github.com/goorm-dev/gds/issues/492)) ([f7c70bc](https://github.com/goorm-dev/gds/commit/f7c70bc1f96a42b992bc36b3f361811afdf77c43))
* **icons:** KeyboardOutlineIcon, PresentScreenOutlineIcon 아이콘 추가 ([#516](https://github.com/goorm-dev/gds/issues/516)) ([d0bda7f](https://github.com/goorm-dev/gds/commit/d0bda7f724349a8c92b204bf789a7fae16b65402))
* **Icon:** 아이콘 리뉴얼 반영 ([#503](https://github.com/goorm-dev/gds/issues/503)) ([c75524b](https://github.com/goorm-dev/gds/commit/c75524b0f8212709a8593879f530d65f3ff47fc0)), closes [#509](https://github.com/goorm-dev/gds/issues/509)
* **plop:** 컴포넌트 템플릿 생성 도구를 plop으로 변경 ([#497](https://github.com/goorm-dev/gds/issues/497)) ([4aa99a9](https://github.com/goorm-dev/gds/commit/4aa99a9bef5a8536720226164e2948bf83897bba))



### [0.16.1](https://github.com/goorm-dev/gds/compare/v0.16.0...v0.16.1) (2024-10-07)


### Bug Fix

* a 태그 스타일 오류 수정 ([b536dc4](https://github.com/goorm-dev/gds/commit/b536dc47a39ccc67f5b1248d342610e925bc933b))
* **CD:** slack alarm ^H 문자 처리하도록 수정 ([#510](https://github.com/goorm-dev/gds/issues/510)) ([ecce231](https://github.com/goorm-dev/gds/commit/ecce2315c5d87e34f1313f4fd8d0792c9b4619bd))


### Other

* vapor foundation 최신화 ([cdb7ad2](https://github.com/goorm-dev/gds/commit/cdb7ad2cb44766c8eed44f9bffa24660173e31f0))



## [0.16.0](https://github.com/goorm-dev/gds/compare/v0.15.0...v0.16.0) (2024-10-04)


### Documentation

* **plop:** iframe route 추가할 때 따옴표 추가 ([#491](https://github.com/goorm-dev/gds/issues/491)) ([0777dac](https://github.com/goorm-dev/gds/commit/0777dacf3699ed601352c4ad02de68c97f9fa423))


### Styling

* **FileInput:** FileInput 다크모드 대응 ([#499](https://github.com/goorm-dev/gds/issues/499)) ([2e00f06](https://github.com/goorm-dev/gds/commit/2e00f06fea6df3f5ed67214cafe00a426fbb5137))


### New Features

* **Core:** Card, Badge, Button Core Component 추가 ([#486](https://github.com/goorm-dev/gds/issues/486)) ([1072dcf](https://github.com/goorm-dev/gds/commit/1072dcf2e20f6a4a97841b4e097561957528afb2)), closes [#487](https://github.com/goorm-dev/gds/issues/487) [#495](https://github.com/goorm-dev/gds/issues/495)
* **icons:** 신규 아이콘 추가 ([#504](https://github.com/goorm-dev/gds/issues/504)) ([5dc75ba](https://github.com/goorm-dev/gds/commit/5dc75baf79e576956e42e073e932ccbd6c0ad0a8))


### Other

* **Footer:** Footer 개인정보보호책임자 이름 수정 ([#501](https://github.com/goorm-dev/gds/issues/501)) ([26c89c5](https://github.com/goorm-dev/gds/commit/26c89c5c8628caf5befb8660b6ee02fae044ed24))
* **foundation:** foundation 명칭을 단수화 ([#498](https://github.com/goorm-dev/gds/issues/498)) ([46c759b](https://github.com/goorm-dev/gds/commit/46c759b31d202a4903cc5f4136ee8858bab075fa))
* PR assignees, Labels 자동화 ([#496](https://github.com/goorm-dev/gds/issues/496)) ([2c82d95](https://github.com/goorm-dev/gds/commit/2c82d9588418b9ab581e149f4723881014af7082))
* **release:** publish v0.15.1 ([0573a5f](https://github.com/goorm-dev/gds/commit/0573a5fec0475554df86b88bf18c0cd36d41b2d5))
* 특정 태그만 Push 되도록 변경 ([#494](https://github.com/goorm-dev/gds/issues/494)) ([9920caf](https://github.com/goorm-dev/gds/commit/9920caf62728070869f8530afc61386f4e8af30a))



### [0.15.1](https://github.com/goorm-dev/gds/compare/v0.15.0...v0.15.1) (2024-09-26)


### Documentation

* **plop:** iframe route 추가할 때 따옴표 추가 ([#491](https://github.com/goorm-dev/gds/issues/491)) ([0777dac](https://github.com/goorm-dev/gds/commit/0777dacf3699ed601352c4ad02de68c97f9fa423))


### Styling

* **FileInput:** FileInput 다크모드 대응 ([#499](https://github.com/goorm-dev/gds/issues/499)) ([2e00f06](https://github.com/goorm-dev/gds/commit/2e00f06fea6df3f5ed67214cafe00a426fbb5137))


### Other

* **Footer:** Footer 개인정보보호책임자 이름 수정 ([#501](https://github.com/goorm-dev/gds/issues/501)) ([26c89c5](https://github.com/goorm-dev/gds/commit/26c89c5c8628caf5befb8660b6ee02fae044ed24))
* 특정 태그만 Push 되도록 변경 ([#494](https://github.com/goorm-dev/gds/issues/494)) ([9920caf](https://github.com/goorm-dev/gds/commit/9920caf62728070869f8530afc61386f4e8af30a))



## [0.15.0](https://github.com/goorm-dev/gds/compare/v0.14.0...v0.15.0) (2024-09-24)


### Documentation

* **typography:** typography 관련 문서화 사이트 개발 완료 ([#481](https://github.com/goorm-dev/gds/issues/481)) ([aa44c49](https://github.com/goorm-dev/gds/commit/aa44c492e0a4f92bb7e1dca40a8d59297f20d6f7))


### Bug Fix

* **Alert:** icon 및 text 정렬을 상단으로 수정 ([#484](https://github.com/goorm-dev/gds/issues/484)) ([c1f7ed9](https://github.com/goorm-dev/gds/commit/c1f7ed9126d9223074b18ea16272d750555ea531))
* **FileInput:** FileInput 타입 오류 수정 ([#489](https://github.com/goorm-dev/gds/issues/489)) ([cb90f1f](https://github.com/goorm-dev/gds/commit/cb90f1fefa206b3a5417ed041a2bd3e29e89b7ed))
* git tag push 되도록 변경 ([#483](https://github.com/goorm-dev/gds/issues/483)) ([2d8f80b](https://github.com/goorm-dev/gds/commit/2d8f80b555c285df143b70632729ed558ac94dff))
* **vapor-foundation:** color=select 미대응 사항 반영 ([#490](https://github.com/goorm-dev/gds/issues/490)) ([2ebdce2](https://github.com/goorm-dev/gds/commit/2ebdce2ff46ded9eb433dc4a340b5afe2410d201))
* **vapor-foundation:** 다크 테마 오류 해결 ([#485](https://github.com/goorm-dev/gds/issues/485)) ([eccf00f](https://github.com/goorm-dev/gds/commit/eccf00f53cacd96038a3bc69decdf5abe2bdf605))


### New Features

* **XIcon:** XIcon 추가 ([#493](https://github.com/goorm-dev/gds/issues/493)) ([864440d](https://github.com/goorm-dev/gds/commit/864440d3ec99160c79462a58e2f19640299ae2c2))



## [0.14.0](https://github.com/goorm-dev/gds/compare/v0.13.1...v0.14.0) (2024-09-20)


### New Features

* **CD:** 구버전 Goormstrap배포 워크플로 추가 ([#468](https://github.com/goorm-dev/gds/issues/468)) ([6cfb807](https://github.com/goorm-dev/gds/commit/6cfb8073e340b40b681a489fa78c14f0c8e6a4eb))
* **foundation:** radio 타입에도 포커스 효과 추가 ([#469](https://github.com/goorm-dev/gds/issues/469)) ([4be27ef](https://github.com/goorm-dev/gds/commit/4be27ef8b4176c8cbc4c4081e6f19534a8cd74d4))
* **Text:** Typography 토큰 추가 적용 ([#459](https://github.com/goorm-dev/gds/issues/459)) ([45f1416](https://github.com/goorm-dev/gds/commit/45f1416b64e3174ea26cd99804bdc4706d93f333))


### Documentation

* docs change log update ([c8cb5bb](https://github.com/goorm-dev/gds/commit/c8cb5bbb5be7a5ddae3ea60ea8d1ac3452b14f73))
* how-to-migrate 수정 ([be1e0c5](https://github.com/goorm-dev/gds/commit/be1e0c5d22447e80cecb2e0458d0532adce6fac6))
* how-to-migrate 수정 ([55c8fbc](https://github.com/goorm-dev/gds/commit/55c8fbc99e8632f9d6fffad6e3f41949f915fc7a))
* how-to-migrate 추가 ([637aa31](https://github.com/goorm-dev/gds/commit/637aa3126cff82079599c98189a1634c1cb121e9))
* **vapor-core:** Avatar, Dialog Props Table 추가 ([#476](https://github.com/goorm-dev/gds/issues/476)) ([392a6f0](https://github.com/goorm-dev/gds/commit/392a6f076abfd5e79e5acd3536ca0f44d5586bbe))
* **vapor-docs:** border-radius 잘못 표현되어 있는 것 수정 ([#478](https://github.com/goorm-dev/gds/issues/478)) ([e90bc60](https://github.com/goorm-dev/gds/commit/e90bc60f399b97da5276034fbe8867c0813f8f0a))


### Build System

* canary 배포 빌드 속도 개선 ([#479](https://github.com/goorm-dev/gds/issues/479)) ([8109635](https://github.com/goorm-dev/gds/commit/8109635dbcab0a20d4cbfce6404e27ac69d982ce))


### Other

* yarn version 시 해야하는 작업들 자동화 ([#460](https://github.com/goorm-dev/gds/issues/460)) ([4f38fa2](https://github.com/goorm-dev/gds/commit/4f38fa29dc138eb9c2446a18d5d01e7613eb470f))


### Bug Fix

* **Button:** color=secondary, outline 스타일 오류 해결 ([#482](https://github.com/goorm-dev/gds/issues/482)) ([af2859d](https://github.com/goorm-dev/gds/commit/af2859d62f9a134ebbc4c8836c01b7c1cad34dfa))
* **CD:** 슬랙 알림 오류 수정 ([ee4ac68](https://github.com/goorm-dev/gds/commit/ee4ac688e239ded014e349cbe2ea5fc05456ad81))
* **Chart:** className optional하게 변경 ([#477](https://github.com/goorm-dev/gds/issues/477)) ([37873c6](https://github.com/goorm-dev/gds/commit/37873c6274e18f6bb20853b1129c0a71f5003657))



### [0.13.1](https://github.com/goorm-dev/gds/compare/v0.13.0...v0.13.1) (2024-09-10)

### Documentation

-   docs change log update ([de44724](https://github.com/goorm-dev/gds/commit/de447247119f644082f81f2b88dda550cb759761))
-   **overview:** core overview 대체 텍스트 교체 ([#475](https://github.com/goorm-dev/gds/issues/475)) ([fb6185a](https://github.com/goorm-dev/gds/commit/fb6185a1064e79729637b2e4725c429439cb72db))

### Bug Fix

-   **CD:** changelog 알림 workflows 이름 수정 ([#474](https://github.com/goorm-dev/gds/issues/474)) ([0f5e290](https://github.com/goorm-dev/gds/commit/0f5e29038ecf89e0b5a82ed64d0e9925a9a8489a))

## [0.13.0](https://github.com/goorm-dev/gds/compare/v0.12.3...v0.13.0) (2024-09-10)

### Styling

-   **Popover:** Popover z-index 수정 ([#462](https://github.com/goorm-dev/gds/issues/462)) ([8a8ebfd](https://github.com/goorm-dev/gds/commit/8a8ebfd2c0ce8a64de657acb462060fb582ea2dc))

### Build System

-   **root:** build:all 커맨드에 vapor-core 추가 ([1a598e4](https://github.com/goorm-dev/gds/commit/1a598e4c383cd3dbb146d1cea9899437d49ca589))

### New Features

-   **avatar:** 코어 Avatar 컴포넌트 추가 ([#455](https://github.com/goorm-dev/gds/issues/455)) ([cfe8e1e](https://github.com/goorm-dev/gds/commit/cfe8e1e325c3e7c50c12c417d17243161d9e60fa))
-   **Breadcrumbs:** core Breadcrumbs 추가 ([#461](https://github.com/goorm-dev/gds/issues/461)) ([f0aa8c6](https://github.com/goorm-dev/gds/commit/f0aa8c6d6f32ed2d2f74c9c33974a7a4a716a1e2))
-   **CD:** ChangeLog 알림 배포 성공시 동작하도록 수정 ([#454](https://github.com/goorm-dev/gds/issues/454)) ([ac0a24f](https://github.com/goorm-dev/gds/commit/ac0a24fc488de0e9c9f5ccda296222be94c7366f))
-   **Checkbox:** core Checkbox 추가 ([#470](https://github.com/goorm-dev/gds/issues/470)) ([70f9178](https://github.com/goorm-dev/gds/commit/70f91787d3a9558c16d0d3b6ba54b4c3ff54b118))
-   **dialog:** Core Dialog 컴포넌트 추가 ([#432](https://github.com/goorm-dev/gds/issues/432)) ([e24f888](https://github.com/goorm-dev/gds/commit/e24f8886114bd4f127374c9b8b4cde6c494c399c))
-   **useStyles:** 동적 스타일링을 위한 커스텀 훅 추가 ([#451](https://github.com/goorm-dev/gds/issues/451)) ([87be624](https://github.com/goorm-dev/gds/commit/87be62407afcfbb724e5eaddff86396c244ec34c))
-   **vapor-core:** Alert 컴포넌트 생성 ([#471](https://github.com/goorm-dev/gds/issues/471)) ([b90630a](https://github.com/goorm-dev/gds/commit/b90630a0707b90ba0ff9752cff7b359ce9b9c6b2))
-   **vapor-docs:** introduction, install, usage 페이지 개발 ([#463](https://github.com/goorm-dev/gds/issues/463)) ([8a2aa3d](https://github.com/goorm-dev/gds/commit/8a2aa3d7dde67b4ea4a24e1fac2eb2db5974b3e4))

### Documentation

-   **Breadcrumb:** Breadcrumbs docs 업데이트, 빌드 오류 수정 ([#473](https://github.com/goorm-dev/gds/issues/473)) ([37fc6ed](https://github.com/goorm-dev/gds/commit/37fc6ed426dede70804ba398ceb4a44c3ed6255b))
-   release 노트 반영 ([7352def](https://github.com/goorm-dev/gds/commit/7352def5c012993ff77f142cdfedcccb329fe042))
-   **toc:** toc 경로 파싱 문제 해결 ([#464](https://github.com/goorm-dev/gds/issues/464)) ([3344ea7](https://github.com/goorm-dev/gds/commit/3344ea7cab1d56dcaaa083ddf43b9f03f859adf6))
-   vapor-core 메뉴 등록, plop 코드 추가 ([#465](https://github.com/goorm-dev/gds/issues/465)) ([8e8847a](https://github.com/goorm-dev/gds/commit/8e8847a1003b86217e981679a269040246d41e22)), closes [#467](https://github.com/goorm-dev/gds/issues/467)

### Bug Fix

-   **Alert:** storybook Alert import 오류 수정 ([2a9f614](https://github.com/goorm-dev/gds/commit/2a9f614a3330e4b0bd33f4d69e6d733c8e5369e4))
-   **checkbox:** checkbox 빌드 에러 수정 ([#472](https://github.com/goorm-dev/gds/issues/472)) ([eb8ad11](https://github.com/goorm-dev/gds/commit/eb8ad1178c09940c325aadc7a62b1dee2a6af23b))

### [0.12.3](https://github.com/goorm-dev/gds/compare/v0.12.2...v0.12.3) (2024-09-03)

### Build System

-   **foundation:** 각 파운데이션 빌드 구조 개선 ([#450](https://github.com/goorm-dev/gds/issues/450)) ([0ed7c15](https://github.com/goorm-dev/gds/commit/0ed7c153660dd9c12298aac635631cdaea9afd0b))

### Bug Fix

-   **components:** style 파일을 제대로 부르지 못하던 버그 수정 ([#457](https://github.com/goorm-dev/gds/issues/457)) ([04a6a5c](https://github.com/goorm-dev/gds/commit/04a6a5c93c0f8aad29f049e1bf927c93eb9f2709))

### Documentation

-   **changelog:** docs changelog 업데이트 ([80ec36b](https://github.com/goorm-dev/gds/commit/80ec36bb6e2aaaaff72851328d6e02980e301e97))
-   toast 비정상 동작 수정 ([#458](https://github.com/goorm-dev/gds/issues/458)) ([2493b32](https://github.com/goorm-dev/gds/commit/2493b3270bac5da0e99e3f0fba58340c12e4e6d0))

### [0.12.2](https://github.com/goorm-dev/gds/compare/v0.12.1...v0.12.2) (2024-08-30)

### Documentation

-   **changelog:** docs changelog 업데이트 ([5fa2fe9](https://github.com/goorm-dev/gds/commit/5fa2fe9a41b5a9b453c9f04187ab3715249d9bc4))

### Bug Fix

-   **vapor-components:** type build error 수정 ([#453](https://github.com/goorm-dev/gds/issues/453)) ([4b3be9a](https://github.com/goorm-dev/gds/commit/4b3be9a542c9f777c576db06eff8d2f9ab3cdb97))

### Styling

-   **checkbox:** checkbox input 스타일 수정 ([#444](https://github.com/goorm-dev/gds/issues/444)) ([4b769ea](https://github.com/goorm-dev/gds/commit/4b769ea5d84be5c0589ec6af163e6219f625adc9))

### [0.12.1](https://github.com/goorm-dev/gds/compare/v0.12.0...v0.12.1) (2024-08-30)

### Other

-   docs에 changelog 반영 ([0be4926](https://github.com/goorm-dev/gds/commit/0be492613d9bfd3c35cbc8d6c0d3b3f8df8e8f44))
-   **package.json:** 릴리즈 에러 수정 ([55274f2](https://github.com/goorm-dev/gds/commit/55274f2bbeb5808fbf6b23bd2154492851600c74))
-   **package.json:** 릴리즈 에러 수정 ([f0e85a6](https://github.com/goorm-dev/gds/commit/f0e85a68c4e316e79671000961d0168a96244c19))

### Documentation

-   독스 빌드 에러 수정 ([a0d75ff](https://github.com/goorm-dev/gds/commit/a0d75ff9fa838789d1131d47b8f0517b87153d16))

### Code Refactoring

-   **FileInput:** fileinput type 수정 ([#404](https://github.com/goorm-dev/gds/issues/404)) ([04e1a4b](https://github.com/goorm-dev/gds/commit/04e1a4bc6af99e0e9f132ed675524a6ec1248f6f))

### Bug Fix

-   **vapor-foundation:** renewal color 대응되지 않은 것 반영 ([#449](https://github.com/goorm-dev/gds/issues/449)) ([a32663c](https://github.com/goorm-dev/gds/commit/a32663c026bfc6c1170a8c758e4894ddbf4507e1))

### New Features

-   **CD:** Changelog 본문 슬랙 알림 가도록 수정 ([#448](https://github.com/goorm-dev/gds/issues/448)) ([051e871](https://github.com/goorm-dev/gds/commit/051e871545817edb3350b6b0be666ceca00cb114))

## [0.12.0](https://github.com/goorm-dev/gds/compare/v0.11.0...v0.12.0) (2024-08-28)

### Other

-   gds-alarm -> vapor-alarm ([04eb0d7](https://github.com/goorm-dev/gds/commit/04eb0d71c3768a6b5385c24e0164dfc435458f33))

### Documentation

-   **changelog:** docs changelog update ([029f568](https://github.com/goorm-dev/gds/commit/029f5686c2cf75a327a1d86d4982840a6a46a4fb))
-   shadowDom to iframe ([#422](https://github.com/goorm-dev/gds/issues/422)) ([007482d](https://github.com/goorm-dev/gds/commit/007482d0e4a5759bab330747427eb32df9d3b948))
-   빌드에러 수정 ([#446](https://github.com/goorm-dev/gds/issues/446)) ([44f7eef](https://github.com/goorm-dev/gds/commit/44f7eef13c9c3e696b72ad325dc15a7553adc745))
-   스타일 버그 수정 ([#447](https://github.com/goorm-dev/gds/issues/447)) ([07ec4f5](https://github.com/goorm-dev/gds/commit/07ec4f5b8f9d5fc931fa02b4d7dac963109d04c9))

### New Features

-   git fetch-depth 옵션 추가 ([#439](https://github.com/goorm-dev/gds/issues/439)) ([66fe7f3](https://github.com/goorm-dev/gds/commit/66fe7f3bc09a761068899d38433fba366e1ebffc))
-   **Icon:** DashboardIcon, AiSmartieIcon 추가 ([#445](https://github.com/goorm-dev/gds/issues/445)) ([478ba98](https://github.com/goorm-dev/gds/commit/478ba983befc62c03b3be647e4ede751134fd9d7))
-   **vapor-foundation, vapor-components:** semantic color 토큰 리뉴얼 및 컴포넌트 대응 작업 ([#431](https://github.com/goorm-dev/gds/issues/431)) ([05884d8](https://github.com/goorm-dev/gds/commit/05884d836b7a899307c9a9d9b91bc09efa55ed04))

## [0.11.0](https://github.com/goorm-dev/gds/compare/v0.10.0...v0.11.0) (2024-08-16)

### Documentation

-   **changelog:** changelog docs에도 배포 시 반영되도록 수정 ([#424](https://github.com/goorm-dev/gds/issues/424)) ([8fe4c1e](https://github.com/goorm-dev/gds/commit/8fe4c1e11999bb63096ef4dc2121dd3752bb97ee))

### New Features

-   Github Action 이름 변경 및 기능 추가 ([#441](https://github.com/goorm-dev/gds/issues/441)) ([1a53551](https://github.com/goorm-dev/gds/commit/1a53551c976157f3fd8eb197aac296a41711c970))
-   **package:** 타입 추가 ([#420](https://github.com/goorm-dev/gds/issues/420)) ([53f3d53](https://github.com/goorm-dev/gds/commit/53f3d5325770b06b73bc3960a9f024463f0c2019))

### Bug Fix

-   github action 들여쓰기 오류 수정 ([e1f7c14](https://github.com/goorm-dev/gds/commit/e1f7c14c04a0cb477cad890282f9d42516c1bb60))

## [0.10.0](https://github.com/goorm-dev/gds/compare/v0.9.0...v0.10.0) (2024-08-16)

### Styling

-   **vapor-foundation:** dark hint color 변경 ([#423](https://github.com/goorm-dev/gds/issues/423)) ([917e5c8](https://github.com/goorm-dev/gds/commit/917e5c8f07cdc46bdef60862da3955a89ecb52c4))

### Documentation

-   vapor-docs markdown 스타일 수정 ([#421](https://github.com/goorm-dev/gds/issues/421)) ([ca513eb](https://github.com/goorm-dev/gds/commit/ca513ebb55c6fee2471fe1c6cbefa498bec0b393))

### Other

-   **changeLog:** changeLog 수정 ([#425](https://github.com/goorm-dev/gds/issues/425)) ([959a16f](https://github.com/goorm-dev/gds/commit/959a16fe591a24b2dc8e1d79188bf9b5ced68d71))
-   **CI:** eslint watch 에러 수정 및 Noah PR 리뷰어 등록 ([#428](https://github.com/goorm-dev/gds/issues/428)) ([a4ebe0c](https://github.com/goorm-dev/gds/commit/a4ebe0cfc1902f1859525882e7d483ee4a853aa1))
-   inject 옵션 수정 (GDS 작업 [#427](https://github.com/goorm-dev/gds/issues/427), vapor 복사작업) ([#430](https://github.com/goorm-dev/gds/issues/430)) ([62f77e8](https://github.com/goorm-dev/gds/commit/62f77e83103545227704336bcd8d03a0b9123de6))
-   **workflow:** workflow 문법 오류 수정 ([#419](https://github.com/goorm-dev/gds/issues/419)) ([9527b2f](https://github.com/goorm-dev/gds/commit/9527b2ff37f968c9e7fb8c8d974c19047aaaeb94))
-   **workflow:** workflow_dispatch 옵션 추가 ([39fbb11](https://github.com/goorm-dev/gds/commit/39fbb11c8bbe021c35871de7975e63265f14dbfb))
-   이슈에 비가시 문자 포함시에도 슬랙알람이 오게 수정 ([#437](https://github.com/goorm-dev/gds/issues/437)) ([d7e1a91](https://github.com/goorm-dev/gds/commit/d7e1a912de2146a9cd2ebdfa0ed94a510a3366bb))

## [0.9.0](https://github.com/goorm-dev/gds/compare/v0.7.0...v0.8.0) (2024-07-30)

### Documentation

-   **vapor-docs:** introduction 페이지 생성 ([#410](https://github.com/goorm-dev/gds/pull/410)) ([f600917](https://github.com/goorm-dev/gds/commit/f600917e186f8f51f19672ce09ef36faadae8159))
-   **docs:** Breadcrumb 스토리 수정 ([#408](https://github.com/goorm-dev/gds/pull/408)) ([6f14a34](https://github.com/goorm-dev/gds/commit/6f14a343901b2db98f851a52a6a289fa194fca86))
-   **docs:** github links 맞지 않은 페이지들 수정 ([#409](https://github.com/goorm-dev/gds/pull/409)) ([20283f0](https://github.com/goorm-dev/gds/commit/20283f0d8d5e086b5016b56e12d54863ed699eeb))
-   **how-to-contribute:** 최신화 ([#411](https://github.com/goorm-dev/gds/pull/411)) ([a05be3e](https://github.com/goorm-dev/gds/commit/a05be3e929736dfeba0792f1f53ad66d0fc89783))
-   **vapor-docs:** what-is-vapor-docs 페이지 생성 ([#418](https://github.com/goorm-dev/gds/pull/418)) ([aab58f7](https://github.com/goorm-dev/gds/commit/aab58f7fb4bbcdd0817761c0663ef22bac8c5067))

### Styles

-   **Badge:** pill 안 먹는 이슈 수정 ([#412](https://github.com/goorm-dev/gds/pull/412)) ([0b14d25](https://github.com/goorm-dev/gds/commit/0b14d2510b4e45c57aba62f79513389ea237d4c9))
-   **color:** hint color 변경 및 변경 사항 vapor docs 업데이트 ([#416](https://github.com/goorm-dev/gds/pull/416)) ([8544629](https://github.com/goorm-dev/gds/commit/854462943a5e002bfa5807ad8ea192a3a733c7bc))

### Bug Fix

-   **Button:** a 태그일 때 스타일 깨지는 버그 수정 ([#413](https://github.com/goorm-dev/gds/pull/413)) ([7ae152b](https://github.com/goorm-dev/gds/commit/7ae152b9627d4e187cacfa600950741369fe656c))

## [0.8.0](https://github.com/goorm-dev/gds/compare/v0.7.0...v0.8.0) (2024-07-30)

### New Features

-   **github:** github action 수정 ([ad2ae25](https://github.com/goorm-dev/gds/commit/ad2ae2527704b71f9e79f47490ce71d156d2bacb))

### Documentation

-   **docs:** 문서화 사이트 오타, metadata 수정 ([#407](https://github.com/goorm-dev/gds/issues/407)) ([0240362](https://github.com/goorm-dev/gds/commit/024036288299ea95bd8b0679cc89501ce858eab7))
-   **docs:** 빌드 오류 수정 ([240bdcc](https://github.com/goorm-dev/gds/commit/240bdcc32a7d1677d60e70051d69928e624b7c79))
-   template 버그 수정 ([a8ee13f](https://github.com/goorm-dev/gds/commit/a8ee13f126dc3c9bbb337e99af47eb9daeaa57e2))

## [0.7.0](https://github.com/goorm-dev/gds/compare/v0.6.0...v0.7.0) (2024-07-29)

### Styling

-   **TextButton:** TextButton hover, active, disabled 추가 ([#377](https://github.com/goorm-dev/gds/issues/377)) ([5142475](https://github.com/goorm-dev/gds/commit/5142475a49ce8b05a7c4c3ed5507dfecbe3bb588))

### Bug Fix

-   **avatar:** avatar 클래스명 수정 ([#384](https://github.com/goorm-dev/gds/issues/384)) ([dd511f3](https://github.com/goorm-dev/gds/commit/dd511f344796b07d93f97e60dc1d40bebfd527c3))
-   **CD:** github issue 템플릿 겹치는 이슈 해결 ([489cc67](https://github.com/goorm-dev/gds/commit/489cc67bcce3bdf2b54988c6033567f574d07c48))
-   **DatePicker:** 초기화버튼 노출 조건 변경 ([#397](https://github.com/goorm-dev/gds/issues/397)) ([596a2db](https://github.com/goorm-dev/gds/commit/596a2db5ae5903156b55d1c149538f576fd046fb))
-   **SearchInput:** SearchInput disabled props 수정 ([#370](https://github.com/goorm-dev/gds/issues/370)) ([9b91bb1](https://github.com/goorm-dev/gds/commit/9b91bb15a49a2fc78ba79469050a97bfa6521079))

### Documentation

-   기본값 control패널에 반영 ([#395](https://github.com/goorm-dev/gds/issues/395)) ([b85e874](https://github.com/goorm-dev/gds/commit/b85e874d6aa2fd2e0d97747bb60304e8c4112b97))
-   없는 변수 참조 수정 ([43a9717](https://github.com/goorm-dev/gds/commit/43a9717330bf8d583db2a914bfda5cf5bd398cf4))
-   **allComponents:** all-components List href 경로 수정 ([#378](https://github.com/goorm-dev/gds/issues/378)) ([ca1d605](https://github.com/goorm-dev/gds/commit/ca1d60575391fd848e131efe52ad8df4bead73cb))
-   Breadcrumb toc 추가 ([fd52414](https://github.com/goorm-dev/gds/commit/fd5241455fc192332579792206aa1e921fce8a4d))
-   deprecated 재정리 ([#383](https://github.com/goorm-dev/gds/issues/383)) ([a53042b](https://github.com/goorm-dev/gds/commit/a53042b841222b4a8a2aa8fdc0eac4f0ca1cca4a))
-   **foundation:** Color 페이지 관련 vapor feedback 반영 및 renewal color token 반영 ([#399](https://github.com/goorm-dev/gds/issues/399)) ([1da54d5](https://github.com/goorm-dev/gds/commit/1da54d5a0276e28789551f9cf1792eff4726b420))
-   plop 버그 수정 ([#391](https://github.com/goorm-dev/gds/issues/391)) ([7c0fc56](https://github.com/goorm-dev/gds/commit/7c0fc56d260db08c83d291f262388676b119bb36))
-   plop으로 data.ts와 이미지 업데이트 할 수 있는 기능 추가 ([#373](https://github.com/goorm-dev/gds/issues/373)) ([f2538e4](https://github.com/goorm-dev/gds/commit/f2538e45039c7d58911acf1cb72c26ceab374c6a))
-   style 수정, linkbutton 추가 ([#401](https://github.com/goorm-dev/gds/issues/401)) ([234075f](https://github.com/goorm-dev/gds/commit/234075f0bbe19385f760079cbd596108631af4a9))

### Code Refactoring

-   **BasicPagination:** BasicPagination ts 전환 ([#393](https://github.com/goorm-dev/gds/issues/393)) ([c453a7d](https://github.com/goorm-dev/gds/commit/c453a7d75c5523d867b75bd4fa2e38f0cf9d156d))
-   **carousel:** Carousel ts 전환 ([#400](https://github.com/goorm-dev/gds/issues/400)) ([a3d11bc](https://github.com/goorm-dev/gds/commit/a3d11bc118f260893f7db9680e2c4456bd4e5bc1))
-   **charts, tables:** 차트, 테이블 패키지 TS 지원 ([#387](https://github.com/goorm-dev/gds/issues/387)) ([8e385dd](https://github.com/goorm-dev/gds/commit/8e385ddb47e935ec57ab31435a9d9c06ebb4895f))
-   **Gantt:** 간트 패키지 지원 종료 ([#403](https://github.com/goorm-dev/gds/issues/403)) ([c2d4730](https://github.com/goorm-dev/gds/commit/c2d4730b6aaae6399bd6df89555a9d26867c5f1f))
-   **ServiceNav:** ServiceNav ts 전환 ([#392](https://github.com/goorm-dev/gds/issues/392)) ([160b6af](https://github.com/goorm-dev/gds/commit/160b6af8512256ba84031b256c643ea0570b4712))
-   **TopBanner:** TopBanner ts 전환 ([#371](https://github.com/goorm-dev/gds/issues/371)) ([577151c](https://github.com/goorm-dev/gds/commit/577151cad47652b664757e8de878649fd9c85e4c))
-   **Tourtip:** tourtip ts 전환 ([#382](https://github.com/goorm-dev/gds/issues/382)) ([edea145](https://github.com/goorm-dev/gds/commit/edea145ed052b41de1835300c509253410d10190))
-   **UncontrolledBadge:** badges ts 전환 ([#380](https://github.com/goorm-dev/gds/issues/380)) ([a907240](https://github.com/goorm-dev/gds/commit/a907240a8c6cf56a001f4ea31743c57400087c77))

### Other

-   **Avatar:** button, div 태그 모두 가능하도록 변경 ([#398](https://github.com/goorm-dev/gds/issues/398)) ([68f417c](https://github.com/goorm-dev/gds/commit/68f417c9acafd22354743fa94ecbbce428ff188c))
-   **CD:** GDS 패키지 릴리즈 워크플로우 추가 ([9eb47c7](https://github.com/goorm-dev/gds/commit/9eb47c7ebdbaa74301250649371e1d2c6b7b2c50))
-   goorm-saas sync trigger 추가 ([78a0a5f](https://github.com/goorm-dev/gds/commit/78a0a5ffd854671ebb3c0c05305b612b0510dec9))
-   pre-push 로직 임시 제거 ([e28dac6](https://github.com/goorm-dev/gds/commit/e28dac6d56a1b8278439e332c080d56fe4df4854))
-   sqd-gds 채널에서 sqd-gds-internal 로 변경 ([#375](https://github.com/goorm-dev/gds/issues/375)) ([e1b88de](https://github.com/goorm-dev/gds/commit/e1b88de4cbd846f71c6b6db99376c00c2ae457cb))

### New Features

-   **DatePicker:** date prop 삭제, defaultDate가 역할 수행 ([#381](https://github.com/goorm-dev/gds/issues/381)) ([d13a3a5](https://github.com/goorm-dev/gds/commit/d13a3a551d7df763e04d24e125a1fa33ade31d99))
-   **foundation:** color token 리뉴얼 및 컴포넌트단 리뉴얼 color token 대응 ([#376](https://github.com/goorm-dev/gds/issues/376)) ([d5dec4a](https://github.com/goorm-dev/gds/commit/d5dec4ac92d8ef3d27b181cda2c874fb177018ad))
-   github action 이름 수정 및 조건 변경 ([#361](https://github.com/goorm-dev/gds/issues/361)) ([a72b72e](https://github.com/goorm-dev/gds/commit/a72b72ed5927815e3ac30c65b62100db51cd783e))
-   **Icon:** CodeBlockIcon 추가 ([#396](https://github.com/goorm-dev/gds/issues/396)) ([43f700d](https://github.com/goorm-dev/gds/commit/43f700d78041a94f6930f8913de50b9782f40c3a))
-   **kidkit:** 주요 컴포넌트 Kikit 테마 적용 (\*\* gds -> vapor 복사 작업) ([#405](https://github.com/goorm-dev/gds/issues/405)) ([698f6f4](https://github.com/goorm-dev/gds/commit/698f6f4357e0063e8afd6121accd1fd50a85aed3))
-   **SearchInput:** Vapor chltlsghk ([#406](https://github.com/goorm-dev/gds/issues/406)) ([f4b6a8f](https://github.com/goorm-dev/gds/commit/f4b6a8f87fdbda8db9dae0eb6eb3879fefdc74ae))
-   **toast:** toast 패키지 제거 및 components 패키지로 이동 ([#394](https://github.com/goorm-dev/gds/issues/394)) ([4bc2bc2](https://github.com/goorm-dev/gds/commit/4bc2bc2858c3502579503d5dd800619fd31ebde2))
-   **toast:** Toast color 수정 ([#343](https://github.com/goorm-dev/gds/issues/343)) ([c06f5e5](https://github.com/goorm-dev/gds/commit/c06f5e59ebfc134de5cc7b48a0fb0f4800ee7a1e))

## [0.6.0](https://github.com/goorm-dev/gds/compare/v0.5.0...v0.6.0) (2024-07-09)

### Other

-   이슈 템플릿 생성 ([c1fc65f](https://github.com/goorm-dev/gds/commit/c1fc65f59fe87af27a7d345f7dcf16ef645e4766))

### Bug Fix

-   **DatePicker:** container prop 추가 ([#356](https://github.com/goorm-dev/gds/issues/356)) ([9be4266](https://github.com/goorm-dev/gds/commit/9be4266194ec6a0720c05cb6f2d3a527af9e27ee))

### Documentation

-   문법 오류 수정 및 전체 컴포넌트 확인 ([#352](https://github.com/goorm-dev/gds/issues/352)) ([9303a8f](https://github.com/goorm-dev/gds/commit/9303a8f892bb2aa521de9c9485fd710099b4ebc1))
-   피그마 파일 변경 ([#365](https://github.com/goorm-dev/gds/issues/365)) ([faa80ce](https://github.com/goorm-dev/gds/commit/faa80ce18e8172922a2dc68b641cce48895f02da))

### New Features

-   **FileInput:** FileInput props, style 수정 ([#338](https://github.com/goorm-dev/gds/issues/338)) ([914db17](https://github.com/goorm-dev/gds/commit/914db17a3d61290077d828dc728a7223473d4548))
-   **node:** node version 변경 ([#369](https://github.com/goorm-dev/gds/issues/369)) ([bba0f89](https://github.com/goorm-dev/gds/commit/bba0f89daca9c59b084c6c9ba905f2d7d5a219c7))

## [0.5.0](https://github.com/goorm-dev/gds/compare/v0.4.2...v0.5.0) (2024-07-08)

### Other

-   **foundation:** 명령어 수정 및 변경사항 적용 ([e8d83d4](https://github.com/goorm-dev/gds/commit/e8d83d4b110048558692db768e069cbba03a70ea))
-   volta 설정값 추가 ([#354](https://github.com/goorm-dev/gds/issues/354)) ([249df88](https://github.com/goorm-dev/gds/commit/249df881260e3f0dd769bc62d3eb095c09891261))

### Documentation

-   build error 수정 ([2a0524f](https://github.com/goorm-dev/gds/commit/2a0524fdd6c6f37c00f1304e30bd36d15cdb3630))
-   how-to-migrate 문서 최신화 ([#362](https://github.com/goorm-dev/gds/issues/362)) ([c5687a0](https://github.com/goorm-dev/gds/commit/c5687a0c4dcf12e0f92b68b5b9b716962dab7fa1))
-   introduction 변경 및 필요없는 파일 제거 ([#364](https://github.com/goorm-dev/gds/issues/364)) ([02b9f77](https://github.com/goorm-dev/gds/commit/02b9f77a06c92501ca13af09dd3d34a57f8a182d))
-   issue 버튼 생성 ([#358](https://github.com/goorm-dev/gds/issues/358)) ([340e6be](https://github.com/goorm-dev/gds/commit/340e6be7013b8e031de4ae9ae6e0f08de89bdcc1))
-   지우던 중 아예 망가지는 에러 수정 ([#355](https://github.com/goorm-dev/gds/issues/355)) ([a35ab0f](https://github.com/goorm-dev/gds/commit/a35ab0f40a2152f2a58809eaf27340f06103b56a))

### New Features

-   **icons:** BlankIcon, SubdirectoryArrowLeftIcon, KeyboardTabIcon 추가 ([#367](https://github.com/goorm-dev/gds/issues/367)) ([42dc58a](https://github.com/goorm-dev/gds/commit/42dc58a066fc13765c493111c9d1dd91ea445a83))

### Bug Fix

-   **Carousel:** Carousel.Control 컴포넌트에서 Button Icon prop 사용법 오류 수정 ([#350](https://github.com/goorm-dev/gds/issues/350)) ([481259d](https://github.com/goorm-dev/gds/commit/481259db033811b40b4a0a8929b8982e544ec0c9))
-   **DashboardSidebarTemplate:** active 상태 변경 수정 ([#360](https://github.com/goorm-dev/gds/issues/360)) ([7df7575](https://github.com/goorm-dev/gds/commit/7df7575028bd621083ea5b2d1d93ed98659ec6b2))
-   **Dropdown:** Dropdown example 수정 ([#363](https://github.com/goorm-dev/gds/issues/363)) ([c9d8175](https://github.com/goorm-dev/gds/commit/c9d81752fdb0bec8459318789301c5d91de52746))

### [0.4.2](https://github.com/goorm-dev/gds/compare/v0.4.1...v0.4.2) (2024-07-02)

### Bug Fix

-   **DatePicker:** 데이트피커 버그 수정 ([#344](https://github.com/goorm-dev/gds/issues/344)) ([c65fb12](https://github.com/goorm-dev/gds/commit/c65fb12dd02be2bafb07661cece2d1587c5ce5da))

### Other

-   **github-action:** 이슈 등록시 internal로 알림 ([276dbc9](https://github.com/goorm-dev/gds/commit/276dbc943514c462b6846ed0c84ddfb219aa81eb))
-   **github-action:** 이슈 등록시 슬랙 알림 기능 ([#347](https://github.com/goorm-dev/gds/issues/347)) ([5832241](https://github.com/goorm-dev/gds/commit/5832241af8c24eb15fe7afdcdeea2a2f36d8904d))
-   **vapor-foundation:** 스크립트명 수정 및 prepush복구 ([#357](https://github.com/goorm-dev/gds/issues/357)) ([0136af3](https://github.com/goorm-dev/gds/commit/0136af35ad19b0746b124df39b5594290abd34a0))

### Documentation

-   **docs:** figma docs 시안에 있는 모든 컴포넌트들 등록 ([#351](https://github.com/goorm-dev/gds/issues/351)) ([692ae99](https://github.com/goorm-dev/gds/commit/692ae99e02c238de46fd361841cb384cdafcd449))

### Code Refactoring

-   **Progress, Status:** Progress, Status ts 전환 ([#353](https://github.com/goorm-dev/gds/issues/353)) ([0308eec](https://github.com/goorm-dev/gds/commit/0308eec4c5d5dd4c8ff1c82b9cc2a17126f502fb))
-   **Radio:** radio ts 전환 ([#346](https://github.com/goorm-dev/gds/issues/346)) ([a6065bf](https://github.com/goorm-dev/gds/commit/a6065bfb43ac361c26fe1fe852cf090cd68a0c2e))

### [0.4.1](https://github.com/goorm-dev/gds/compare/v0.4.0...v0.4.1) (2024-06-28)

### Other

-   release test ([78c956b](https://github.com/goorm-dev/gds/commit/78c956b95d814c803aae7d2a665cab9f2291f4ed))

## [0.4.0](https://github.com/goorm-dev/gds/compare/v0.3.1...v0.4.0) (2024-06-28)

### Other

-   CI/CD 리뉴얼 ([#340](https://github.com/goorm-dev/gds/issues/340)) ([9d30a0a](https://github.com/goorm-dev/gds/commit/9d30a0a0bc64d8a47f3eb37bb59b744cb9abb956))
-   dependency 없이 설치 명령어 추가 ([cc09a28](https://github.com/goorm-dev/gds/commit/cc09a2856b4496e58e79e18658f1746ab3c992b9))
-   **github-action:** 워크플로우 yarn chache 제거 ([862d0e8](https://github.com/goorm-dev/gds/commit/862d0e87142b3611d7b23a24d9e68102ef86051e))
-   PR 워크프롤우 제목 수정 ([8974507](https://github.com/goorm-dev/gds/commit/8974507c20030300c55d7e4b3372b236ec633bea))
-   stream 명령어 추가 ([c678c05](https://github.com/goorm-dev/gds/commit/c678c0570f796b2f2fd3c9166a8673e037f35f18))

### Bug Fix

-   **foundation:** foundation 이름 변경 및 변경에 따른 style inject 수정 ([#342](https://github.com/goorm-dev/gds/issues/342)) ([af578d8](https://github.com/goorm-dev/gds/commit/af578d8f2e4d3162e5305e789a6615b7a7099c70))
-   publish 스크립트 수정 ([0a6e20d](https://github.com/goorm-dev/gds/commit/0a6e20d6db3624ff5661b3513a79a6ef7205e66e))
-   publish 스크립트 수정 ([88c4e12](https://github.com/goorm-dev/gds/commit/88c4e12656d4ff3dee8e502cc5dc1dbea3deb26c))
-   Vercel deploy 워크플로우 수정 ([04316e5](https://github.com/goorm-dev/gds/commit/04316e5779fbc0b4061820e4a1688d85f818fbbc))

### Documentation

-   storybook href 변경 ([dde3645](https://github.com/goorm-dev/gds/commit/dde3645170e7ecdf91690d01af5629e6bb1d2699))

### New Features

-   branch name 받지 않도록 변경 ([93df24e](https://github.com/goorm-dev/gds/commit/93df24e361676cd832e485aa8b3da8720f901c62))
-   **Kidkit:** Button, Calendar, DatePicker Kidkit 적용 ([#345](https://github.com/goorm-dev/gds/issues/345)) ([efce977](https://github.com/goorm-dev/gds/commit/efce97778a97e77372cb65049a3d9daf27a96a07))

### [0.3.1](https://github.com/goorm-dev/gds/compare/v0.3.0...v0.3.1) (2024-06-25)

### Code Refactoring

-   **TextButton:** reactstrap props 래핑 ([#320](https://github.com/goorm-dev/gds/issues/320)) ([263bd1e](https://github.com/goorm-dev/gds/commit/263bd1e750591a0f352f4246441401081ae3b495))
-   **TextButton:** reactstrap props 래핑 ([#320](https://github.com/goorm-dev/gds/issues/320)) ([49563e0](https://github.com/goorm-dev/gds/commit/49563e09892fdf78d4167a7ba2d7d8f8b15db01a))

### Other

-   **cd:** vercel 자동 deploy 임시 제거 ([1f802e3](https://github.com/goorm-dev/gds/commit/1f802e3b71b770bf09ec0fa7d0b750f987d09da6))
-   **ci:** PR Open, Reopen, Synchronize 될 때, install & build 워크 플로우 돌리기 ([b420da6](https://github.com/goorm-dev/gds/commit/b420da6726ac43e57ea0b4bd8ec00e9e3ef0d940))
-   **ci:** PR reviewer 지정 코드 수정 ([6c403e6](https://github.com/goorm-dev/gds/commit/6c403e6875c095856386f3a621a4cf731e8d288c))
-   **CI:** PR시 github action 로직 수정 ([#330](https://github.com/goorm-dev/gds/issues/330)) ([ca3757b](https://github.com/goorm-dev/gds/commit/ca3757b5debccd0081bc12ee4ce88c9217855d03))
-   deploy storybook workflow 수정 ([4e3af15](https://github.com/goorm-dev/gds/commit/4e3af15f03a6398326d2abe01f14aff90cf82442))
-   PR 어사이니가 아니라 리뷰어에 할당되도록 수정 ([#335](https://github.com/goorm-dev/gds/issues/335)) ([f6b0f3f](https://github.com/goorm-dev/gds/commit/f6b0f3fafce1b3049ebb394ad197058b76bca999))
-   release workflow 수정 ([9e3f5d0](https://github.com/goorm-dev/gds/commit/9e3f5d0d19e2353d5ffea382a14894184a3fde8c))

### Documentation

-   리소스 이미지 추출 및 스토리북 최신화 ([#341](https://github.com/goorm-dev/gds/issues/341)) ([e34900f](https://github.com/goorm-dev/gds/commit/e34900f8097ef9f141696ea91c1fdd31b1b83bb3))
-   문서 설명 수정 ([0e90d11](https://github.com/goorm-dev/gds/commit/0e90d11feb569671befdf0028d6d79a3e19783e5))
-   github link gds-components에서 vapor로 변경 ([#332](https://github.com/goorm-dev/gds/issues/332)) ([bf7e866](https://github.com/goorm-dev/gds/commit/bf7e86683cd333f5f1ea4f1a8b61c07329e7ad63))
-   sessionStorage에 파운데이션, 탭 선택 저장 ([#333](https://github.com/goorm-dev/gds/issues/333)) ([c4ca97d](https://github.com/goorm-dev/gds/commit/c4ca97d9622581f55c4c37105855bfd24ac8a87d))

### Bug Fix

-   **cd:** 빌드 에러 수정 ([#336](https://github.com/goorm-dev/gds/issues/336)) ([49cc0f0](https://github.com/goorm-dev/gds/commit/49cc0f071481bdedd02f69425dbc152d777f3e36))
-   **cd:** typescript 버전 수정 ([27074eb](https://github.com/goorm-dev/gds/commit/27074ebd1698f4b5467d2de69a63f39f7b9194a9))
-   **cd:** typescript 버전 수정 ([ef59fdd](https://github.com/goorm-dev/gds/commit/ef59fddf5fc09c6d3188890c26312b899d57109b))
-   **ContentLayout:** 아이콘 타입 수정 ([fa4e61a](https://github.com/goorm-dev/gds/commit/fa4e61a6261e9c95c2daaf9157a629c84694eaa2))
-   **FileInput, FormFeedback:** 에러시 스타일 버그 수정 ([#331](https://github.com/goorm-dev/gds/issues/331)) ([0e5638b](https://github.com/goorm-dev/gds/commit/0e5638be716250ff5b96022750511c57cd3a5b9f))
-   **TextButton:** import 경로 버그 수정 ([94856bc](https://github.com/goorm-dev/gds/commit/94856bcb5e5240e757bfef1c31998e65e8513590))
-   tspc 수정 ([4ac6544](https://github.com/goorm-dev/gds/commit/4ac654472c863c37b803942977479d1fb8a2674a))

### New Features

-   storybook 배포 test ([ebb0ca4](https://github.com/goorm-dev/gds/commit/ebb0ca45601697941e252badeb26759478cfe84b))

## [0.3.0](https://github.com/goorm-dev/gds/compare/v0.1.1...v0.3.0) (2024-06-20)

### Bug Fix

-   index path 수정 ([d6831df](https://github.com/goorm-dev/gds/commit/d6831dfd0bde9cd231390907dea8cbd4e176fff2))

### Documentation

-   디자인 QA 수정 ([#323](https://github.com/goorm-dev/gds/issues/323)) ([6445ba0](https://github.com/goorm-dev/gds/commit/6445ba0ddcb8806ecc3bb0e7ba222ab51cb784e2))
-   **vapor-docs:** 메타영역 x 뱃지 추가 및 typescript, wai-aria 정보 최신화 ([#325](https://github.com/goorm-dev/gds/issues/325)) ([87c1d22](https://github.com/goorm-dev/gds/commit/87c1d2218b25a47d4500077258f80aa0d2d715e1))

### New Features

-   가이드 문서 작성 및 markdown 스타일링 ([f59f548](https://github.com/goorm-dev/gds/commit/f59f54816a515e0a0bcfaec33e9dc8eb2f75a1c8))
-   **icon:** icon 타입 수정 ([c1ce8d7](https://github.com/goorm-dev/gds/commit/c1ce8d7ece3b0e03318b36a67b89d2c0b307a91c))

### Other

-   **release:** publish v0.2.0 ([c581eaf](https://github.com/goorm-dev/gds/commit/c581eafee053e6d99abc95b6602c8b45f2725c38))
-   vercel deploy 브랜치 develop으로 변경 ([858b688](https://github.com/goorm-dev/gds/commit/858b688a9e2ac6be04a8b14d8464887bbc0c1f08))
-   vercel deploy 브랜치 develop으로 변경 ([5298daf](https://github.com/goorm-dev/gds/commit/5298dafbe369e682f7f4954339d876993b7b9058))
-   vercel deploy 브랜치 develop으로 변경 ([04ab2df](https://github.com/goorm-dev/gds/commit/04ab2dfd92de79c144180a2228874799b0735bea))

## [0.2.0](https://github.com/goorm-dev/gds/compare/v0.1.1...v0.2.0) (2024-06-20)

### Other

-   vercel deploy 브랜치 develop으로 변경 ([858b688](https://github.com/goorm-dev/gds/commit/858b688a9e2ac6be04a8b14d8464887bbc0c1f08))
-   vercel deploy 브랜치 develop으로 변경 ([5298daf](https://github.com/goorm-dev/gds/commit/5298dafbe369e682f7f4954339d876993b7b9058))
-   vercel deploy 브랜치 develop으로 변경 ([04ab2df](https://github.com/goorm-dev/gds/commit/04ab2dfd92de79c144180a2228874799b0735bea))

### Bug Fix

-   index path 수정 ([d6831df](https://github.com/goorm-dev/gds/commit/d6831dfd0bde9cd231390907dea8cbd4e176fff2))

### Documentation

-   디자인 QA 수정 ([#323](https://github.com/goorm-dev/gds/issues/323)) ([6445ba0](https://github.com/goorm-dev/gds/commit/6445ba0ddcb8806ecc3bb0e7ba222ab51cb784e2))
-   **vapor-docs:** 메타영역 x 뱃지 추가 및 typescript, wai-aria 정보 최신화 ([#325](https://github.com/goorm-dev/gds/issues/325)) ([87c1d22](https://github.com/goorm-dev/gds/commit/87c1d2218b25a47d4500077258f80aa0d2d715e1))

### New Features

-   가이드 문서 작성 및 markdown 스타일링 ([f59f548](https://github.com/goorm-dev/gds/commit/f59f54816a515e0a0bcfaec33e9dc8eb2f75a1c8))
-   **icon:** icon 타입 수정 ([c1ce8d7](https://github.com/goorm-dev/gds/commit/c1ce8d7ece3b0e03318b36a67b89d2c0b307a91c))

### [0.1.1](https://github.com/goorm-dev/gds/compare/v0.1.0...v0.1.1) (2024-06-20)

### New Features

-   **release:** 슬랙봇 명령어 삭제 ([91f618b](https://github.com/goorm-dev/gds/commit/91f618b3350257bdf940579acf5ddb3d37c6186b))

## [0.1.0](https://github.com/goorm-dev/gds/compare/v1.41.2...v0.1.0) (2024-06-20)

### Code Refactoring

-   **gds-docs:** 파일 및 컨벤션 통일하기 ([#265](https://github.com/goorm-dev/gds/issues/265)) ([250406b](https://github.com/goorm-dev/gds/commit/250406b1ea27a1dd8d599c5ce46a23b253d2d578))
-   **tooltip:** vapor 패키지에 tooltip TS 전환 ([#289](https://github.com/goorm-dev/gds/issues/289)) ([9e53f23](https://github.com/goorm-dev/gds/commit/9e53f23716a72a44862b828d68907a143ed8b10b))
-   vapor-goormstrap 명칭 vapor-foundation으로 변경 ([#311](https://github.com/goorm-dev/gds/issues/311)) ([538d765](https://github.com/goorm-dev/gds/commit/538d76582c27c51bfa53c0d7057886fdbfe87423))

### Styling

-   **foundation:** 전체 빌드 ([3b91b6c](https://github.com/goorm-dev/gds/commit/3b91b6cb82b4a72d2b68c840242ac4af04f2dccb))
-   **goormstrap:** goormstrap label 스타일 수정 [#315](https://github.com/goorm-dev/gds/issues/315) ([21a8b57](https://github.com/goorm-dev/gds/commit/21a8b57393ffd2b6268c41a382a0bcf5f7ea96bd))
-   **goormstrap:** label uppercase를 none으로 변경 ([1d207cd](https://github.com/goorm-dev/gds/commit/1d207cde2b0c04d01929b9ce5c4289e096aeee07))

### Other

-   **ButtonToggleGroup:** merge develop ([6597bce](https://github.com/goorm-dev/gds/commit/6597bcea701685ec86ce1c182bc1cbeb3d42dcf9))
-   CHANGELOG 갱신 ([a5b3fe2](https://github.com/goorm-dev/gds/commit/a5b3fe287f21e1e210d4ffc17b2b7c27e41ed31e))
-   checkbox 에러 수정 ([#297](https://github.com/goorm-dev/gds/issues/297)) ([9c18802](https://github.com/goorm-dev/gds/commit/9c18802f48a54778296b5cbb6d2e8f3ef6c004ef))
-   plop 돌릴 때 yml 작성시 프리티어 돌도록 수정 ([#318](https://github.com/goorm-dev/gds/issues/318)) ([eacf27a](https://github.com/goorm-dev/gds/commit/eacf27ae9e6a8863a1c55cc697e568a492c9423b))
-   PR 단계 build github action 추가 [#282](https://github.com/goorm-dev/gds/issues/282) ([d949efa](https://github.com/goorm-dev/gds/commit/d949efa4e98539c857b865c48f5c5e175c9184b9))
-   PR 단계 build github action 추가 [#282](https://github.com/goorm-dev/gds/issues/282) ([13d365e](https://github.com/goorm-dev/gds/commit/13d365e4d8089fff797abc770648d12dba57f5b3))
-   pre-push 임시 제거 ([8e051ca](https://github.com/goorm-dev/gds/commit/8e051ca3f992c67af808596137dc3cc4896298c0))
-   react-live 나머지 내역 삭제 ([#296](https://github.com/goorm-dev/gds/issues/296)) ([daef2b7](https://github.com/goorm-dev/gds/commit/daef2b766e2139244174f638200aa28e92d5ade6))
-   react-live docs내로 이동 ([#292](https://github.com/goorm-dev/gds/issues/292)) ([27ea65a](https://github.com/goorm-dev/gds/commit/27ea65a78838a615180f032d55ff91ad300fa38d))

### Bug Fix

-   불필요한 파일로 인한 빌드 오류 해결 ([650f0c7](https://github.com/goorm-dev/gds/commit/650f0c71aeb059a53e3a4b872db76a1f9d969e63))
-   빌드 에러 수정 ([ded602c](https://github.com/goorm-dev/gds/commit/ded602c28706a822085ea64a743361e01285cb5b))
-   빌드 에러 수정 ([5e7ed65](https://github.com/goorm-dev/gds/commit/5e7ed65a16616782bc1c7f91b8e6709cc2b16386))
-   ButtonToggleGroup Type error 수정 ([8759d83](https://github.com/goorm-dev/gds/commit/8759d834f7bd26097a369fabb71eea7295f0da44))
-   **ButtonToggleGroup:** 옵셔널 type 적용 및 불필요한 props 제거 [#321](https://github.com/goorm-dev/gds/issues/321) ([2c491bf](https://github.com/goorm-dev/gds/commit/2c491bfd98df8069e72082ed5598e245628ad05a))
-   gds-docs Dev 명령어 사라진 것 복구 ([6498180](https://github.com/goorm-dev/gds/commit/6498180303601828d19720d73adf3d284cedbc24))
-   gds-docs global type 파일 생성 ([674cb90](https://github.com/goorm-dev/gds/commit/674cb905cbe2b9d67333a2671ef7d3f0bd0153fc))
-   **husky:** pre-commit 복구 ([b271b29](https://github.com/goorm-dev/gds/commit/b271b29c7c02b224b60c6bca6f2c81ae9fa713e7))
-   mdx 충동 오류 해결 ([9f00c6c](https://github.com/goorm-dev/gds/commit/9f00c6c656b846da46ce3c7d0f2a790adc2decdb))
-   **prop:** useHscrollTable, Button props 수정 [#307](https://github.com/goorm-dev/gds/issues/307) ([5f769fc](https://github.com/goorm-dev/gds/commit/5f769fcd76144f02cf2bfd5ca1569a1e9001c25f))
-   **SearchInput:** SearchInput onClickCancel 함수 수정 [#310](https://github.com/goorm-dev/gds/issues/310) ([963488f](https://github.com/goorm-dev/gds/commit/963488f834904756627062d0cf6a51b685dbdc9d))
-   storybook 빌드 안됨 오류 해결 ([2a14389](https://github.com/goorm-dev/gds/commit/2a143894e59eb52e05a9f9a8d0bb34f053c533bb))

### Documentation

-   active 효과 제대로 적용 ([#308](https://github.com/goorm-dev/gds/issues/308)) ([8f87cdf](https://github.com/goorm-dev/gds/commit/8f87cdf13afdf1e4c4eceef528941814342f8bce))
-   **allComponents:** all-components 페이지, 등록 로직 추가 ([#305](https://github.com/goorm-dev/gds/issues/305)) ([9c010dc](https://github.com/goorm-dev/gds/commit/9c010dc7640f1cfe01b4759f5df7cfe3ab519570))
-   **components:** Calendar ~ UncontrolledCollapse 등록 ([#294](https://github.com/goorm-dev/gds/issues/294)) ([455fde0](https://github.com/goorm-dev/gds/commit/455fde08cdc44f1d2356e3fed00f3f57d84e1aca))
-   **components:** DashboardFrame ~ DropdownToggle plop script 실행 ([#295](https://github.com/goorm-dev/gds/issues/295)) ([ea46e53](https://github.com/goorm-dev/gds/commit/ea46e53625f44f14b834d3ab53af262a2d5843e2))
-   **componets:** compound pattern 컴포넌트 state 추가 ([#324](https://github.com/goorm-dev/gds/issues/324)) ([900b392](https://github.com/goorm-dev/gds/commit/900b39230e4466abaa4e383508285392fc79cc73))
-   **docs:** Badge ~ ButtonToggleGroup component 등록 ([#288](https://github.com/goorm-dev/gds/issues/288)) ([1928f1e](https://github.com/goorm-dev/gds/commit/1928f1ee65512892b01e7ef4875f23125a783d2f))
-   **docs:** docs 빌드 에러 수정 ([#280](https://github.com/goorm-dev/gds/issues/280)) ([f3389b9](https://github.com/goorm-dev/gds/commit/f3389b9b787baad890b980fc93b1c6d0269b4d36))
-   **gds-docs:** 레포짓토리 내의 "gds" -> "vapor" 로 이름 전부 변경 ([#284](https://github.com/goorm-dev/gds/issues/284)) ([fd122b8](https://github.com/goorm-dev/gds/commit/fd122b8955e063ab0f72c4b578dc4d4bd52cf665))
-   **gds-docs:** Text,TextButton 컴포넌트 등록 ([#286](https://github.com/goorm-dev/gds/issues/286)) ([ae7bd1e](https://github.com/goorm-dev/gds/commit/ae7bd1ed37f79078d2a300e6ba9f6884feb019e1))
-   **gds-docs:** vapor docs 전체적으로 버그 수정 및 스타일 수정 ([#298](https://github.com/goorm-dev/gds/issues/298)) ([08e710e](https://github.com/goorm-dev/gds/commit/08e710e2dd3b13ddb004da176e39e4fd65c1bcfb))
-   **gds-docs:** vapor docs의 overview 탭 todo 처리 ([#316](https://github.com/goorm-dev/gds/issues/316)) ([380eba5](https://github.com/goorm-dev/gds/commit/380eba5909b10a95b4098ce09eb2d47126c0d188))
-   **gds-docs:** vercel 연결 계정 saas@goorm.io 계정 변경 ([#303](https://github.com/goorm-dev/gds/issues/303)) ([9bf5113](https://github.com/goorm-dev/gds/commit/9bf51133f14cd2a5a10e5b13e849660a1bde4505))
-   **gds-docs:** vercel deploy github action 추가 ([090fbdb](https://github.com/goorm-dev/gds/commit/090fbdb0bb21bc0bc495ed24caa9d205d4a65dc5))
-   live-demo 강제 스타일링 ([#293](https://github.com/goorm-dev/gds/issues/293)) ([8a1f1b8](https://github.com/goorm-dev/gds/commit/8a1f1b8bc79916544ba417eb75c2d25a14c7affc))
-   LiveDemo 커서 이동 문제 ([#287](https://github.com/goorm-dev/gds/issues/287)) ([d86c13a](https://github.com/goorm-dev/gds/commit/d86c13a7e8b34d1b80641157a5cc864650a3b2ef))
-   LiveDemo 컴파운드패턴 컨트롤 조작시 버그 수정 ([#302](https://github.com/goorm-dev/gds/issues/302)) ([35eb978](https://github.com/goorm-dev/gds/commit/35eb9785ea06ac5ebff03ac6ccd2759812765e6c))
-   LiveDemo control 패널 이용시 버그 수정 ([#290](https://github.com/goorm-dev/gds/issues/290)) ([37e7bca](https://github.com/goorm-dev/gds/commit/37e7bca09b2dc8029823533a891f10638c8c0092))
-   LiveDemo css variable 적용 ([#281](https://github.com/goorm-dev/gds/issues/281)) ([8e06be7](https://github.com/goorm-dev/gds/commit/8e06be73740d7634f0c85eabadd284d8cb723c69))
-   **meta:** 라이브러리 바로가기 버튼 추가 ([#301](https://github.com/goorm-dev/gds/issues/301)) ([2768fcc](https://github.com/goorm-dev/gds/commit/2768fccb35cd1f107661f796e0ef77bc5ec7721c))
-   **overview:** Overview 이미지 확장자 변경 ([#313](https://github.com/goorm-dev/gds/issues/313)) ([8e2b582](https://github.com/goorm-dev/gds/commit/8e2b582ceff32265ca4c48f0449dfe7779c7c433))
-   plop 명령 추가 ([#309](https://github.com/goorm-dev/gds/issues/309)) ([8547fcf](https://github.com/goorm-dev/gds/commit/8547fcfe8f1c7f25da5bcf38449ca586895d3e57))
-   react-live 적용 안 됐던 것들(popover, sidepanel, tooltip, modal) 적용 ([#300](https://github.com/goorm-dev/gds/issues/300)) ([9a6cfa2](https://github.com/goorm-dev/gds/commit/9a6cfa27804b9f2c665ef6e9788f62b6e49ff606))
-   sideNav 컴포넌트 그룹핑 ([#306](https://github.com/goorm-dev/gds/issues/306)) ([0e15380](https://github.com/goorm-dev/gds/commit/0e15380d404d02945045a097719ac72be3c1b726))
-   **TOC:** TOC 경로 파싱 문제 수정 ([#317](https://github.com/goorm-dev/gds/issues/317)) ([c7e34b8](https://github.com/goorm-dev/gds/commit/c7e34b8c075393a06ef2a1f0540cf055d5818ce8))
-   **vapor-docs:** build 에러 수정 ([#291](https://github.com/goorm-dev/gds/issues/291)) ([ef78ec2](https://github.com/goorm-dev/gds/commit/ef78ec2423615f2e86a5b201c3c7c3ff6dca2654)), closes [#290](https://github.com/goorm-dev/gds/issues/290)
-   **vapor-docs:** foundation css 잘못들어간 것 수정 ([#327](https://github.com/goorm-dev/gds/issues/327)) ([9d3db24](https://github.com/goorm-dev/gds/commit/9d3db248f48cd412416cef4fa9cc5520d8400785))

### New Features

-   **Button, SideBar:** icon props 형식 변경 ([#322](https://github.com/goorm-dev/gds/issues/322)) ([ce7ebf7](https://github.com/goorm-dev/gds/commit/ce7ebf77115a9b5b2b15d7caa9ddd64c152c54b7))
-   defaultprops console.error 제거 ([76cb9fd](https://github.com/goorm-dev/gds/commit/76cb9fdbcff0ce0ec7a1d188f4c8a6f1ea91a429))
-   goormstrap vapor-\* 로 변경 ([702d3fc](https://github.com/goorm-dev/gds/commit/702d3fccbe09739bb87caf7a9e0cf5f157b1258b))
-   **package.json:** 이름 변경 ([b540944](https://github.com/goorm-dev/gds/commit/b540944aedadd68a815664fe7e91dd3ad2ddb038))
-   **release:** slack 봇 주석 처리 ([31a317a](https://github.com/goorm-dev/gds/commit/31a317a40726f0b11578772565f4f1f1866d18ce))
-   storybook 폴더 변경 안된 것 수정 ([d9a0cbd](https://github.com/goorm-dev/gds/commit/d9a0cbd37832900cf92c75d8d20258b65dd95972))
-   vapor-\* 라이브러리 버전 초기화 ([11ae85f](https://github.com/goorm-dev/gds/commit/11ae85fc6f93d0c792c83fb5b92a37de89ef2f5d))
-   vapor-icon sync ([c01bff4](https://github.com/goorm-dev/gds/commit/c01bff43df3a0b9810a20d47436bb5a1ad074341))
