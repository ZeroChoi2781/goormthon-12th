# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.45.0](https://github.com/goorm-dev/gds/compare/v1.42.0...v1.45.0) (2024-07-29)

### New Features

-   **CI/CD:** release 스크립트 수정 ([92c6005](https://github.com/goorm-dev/gds/commit/92c6005f1c4026125179bc32c0f3d9e71646ec6e))
-   **DatePicker:** date prop 삭제, defaultDate가 역할 수행 ([#379](https://github.com/goorm-dev/gds/issues/379)) ([e477d20](https://github.com/goorm-dev/gds/commit/e477d20bf9d1f301a3e0e8a6b1ca8784ff33b2f0))
-   **Icon:** CodeBlockIcon 추가 ([2fd611d](https://github.com/goorm-dev/gds/commit/2fd611dfe03302700698a3496f6aa1de49cfce0a))
-   **kidkit:** 일부 컴포넌트 Kikit 테마 적용 ([#390](https://github.com/goorm-dev/gds/issues/390)) ([943f1c4](https://github.com/goorm-dev/gds/commit/943f1c466d3c71f5048b79ad7239a4b37b8a2167))
-   old-develop 브랜치 storybook 수동배포 추가 ([10d5607](https://github.com/goorm-dev/gds/commit/10d5607adc82d27107bd60bdbf4c7ee75aa4301e))
-   old-develop 브랜치 storybook 수동배포 추가 ([c4d900a](https://github.com/goorm-dev/gds/commit/c4d900ab2dd02e6290f8629fc6c1605226a27cfb))
-   private 필드 추가 ([830e366](https://github.com/goorm-dev/gds/commit/830e366827a0744e6db33c238072f8bab6b57316))

### Other

-   워크플로우 수정 ([3b052de](https://github.com/goorm-dev/gds/commit/3b052de23ab3306905c7c4f0de88d60e6d34f64a))
-   **Avatar:** button, div 태그 모두 가능하도록 변경 [#398](https://github.com/goorm-dev/gds/issues/398) ([728a3b4](https://github.com/goorm-dev/gds/commit/728a3b4a7af129a0bde6b596d46c8d5e53538168))
-   **Breadcrumb:** 스토리북 사용법 수정 ([5785a7c](https://github.com/goorm-dev/gds/commit/5785a7c91e0f0b7a772c5e726d9b31a7d50e4895))
-   changelog 수동 수정 ([d46dadb](https://github.com/goorm-dev/gds/commit/d46dadbb74cd266c1987efbefa734c92a46a0130))
-   **changelog:** 불필요한 commit 내역 제거 ([6a25f64](https://github.com/goorm-dev/gds/commit/6a25f647d026b00e5432f9ea4dcd57cfcbe3ab61))
-   old-develop push trigger 제거 ([cf48c54](https://github.com/goorm-dev/gds/commit/cf48c540d99093d96a6581530243b7f58bf4b82a))
-   **release:** publish v1.43.0 ([9240134](https://github.com/goorm-dev/gds/commit/9240134afded7676516d6b29b1c9daf435e0c672))
-   **release:** publish v1.43.0 ([97e0044](https://github.com/goorm-dev/gds/commit/97e0044d8075cf98265091ccdac8b91ac6c37aa4))
-   **release:** publish v1.44.0 ([648078f](https://github.com/goorm-dev/gds/commit/648078f73c30eb28b9a24a4031f853feb6a83c6f))
-   **release:** publish v1.44.1 ([8b1f337](https://github.com/goorm-dev/gds/commit/8b1f337147e2d290b06982db189a2ab9a2b41553))
-   toastify 버전 수정 및 github action 수정 ([fc36539](https://github.com/goorm-dev/gds/commit/fc365391c07249421e0a677cc4e243b027326609))

### Bug Fix

-   **avatar:** avatar 클래스명 수정 ([#368](https://github.com/goorm-dev/gds/issues/368)) ([9a7a422](https://github.com/goorm-dev/gds/commit/9a7a422accaefc3ac3fca45f49cd4d02d4fc967b))
-   **DatePicker:** 초기화버튼 노출 조건 변경 ([#386](https://github.com/goorm-dev/gds/issues/386)) ([37048c1](https://github.com/goorm-dev/gds/commit/37048c14139c34246431e45a77dd420fbc5fe6bb)), closes [#389](https://github.com/goorm-dev/gds/issues/389)
-   **NavLink:** className prop 빠져있는 것 추가 ([366c9da](https://github.com/goorm-dev/gds/commit/366c9da2e5d2e17ce5a725eb3bc1529626f1e784))
-   **Nav:** Nav 관련 컴포넌트 스타일 깨짐 임시 대응 ([f7653fb](https://github.com/goorm-dev/gds/commit/f7653fbd878063a38acce352d4e3bb02150d062a))
-   publish 명령어 수정 ([1aa5c3b](https://github.com/goorm-dev/gds/commit/1aa5c3b309de7aedb5061d267b69770172e09556))
-   publish 명령어 수정 ([f800c09](https://github.com/goorm-dev/gds/commit/f800c09d8aecd5c1268f40d5230f206eb5537047))
-   **SearchInput:** Focus시 아이콘 사라지는 이슈 ([#402](https://github.com/goorm-dev/gds/issues/402)) ([fb26fad](https://github.com/goorm-dev/gds/commit/fb26fadf611361fffc75690d259e27898d1774b2))
-   **TextButton:** link color 오류 수정 ([#385](https://github.com/goorm-dev/gds/issues/385)) ([805461c](https://github.com/goorm-dev/gds/commit/805461cffdd45fbbb13e7c88ab9a031f6ea88097))

### [1.44.1](https://github.com/goorm-dev/gds/compare/v1.42.0...v1.44.1) (2024-07-19)

### New Features

-   **CI/CD:** release 스크립트 수정 ([92c6005](https://github.com/goorm-dev/gds/commit/92c6005f1c4026125179bc32c0f3d9e71646ec6e))
-   **DatePicker:** date prop 삭제, defaultDate가 역할 수행 ([#379](https://github.com/goorm-dev/gds/issues/379)) ([e477d20](https://github.com/goorm-dev/gds/commit/e477d20bf9d1f301a3e0e8a6b1ca8784ff33b2f0))
-   **Icon:** CodeBlockIcon 추가 ([2fd611d](https://github.com/goorm-dev/gds/commit/2fd611dfe03302700698a3496f6aa1de49cfce0a))
-   **kidkit:** 일부 컴포넌트 Kikit 테마 적용 ([#390](https://github.com/goorm-dev/gds/issues/390)) ([943f1c4](https://github.com/goorm-dev/gds/commit/943f1c466d3c71f5048b79ad7239a4b37b8a2167))
-   old-develop 브랜치 storybook 수동배포 추가 ([10d5607](https://github.com/goorm-dev/gds/commit/10d5607adc82d27107bd60bdbf4c7ee75aa4301e))
-   old-develop 브랜치 storybook 수동배포 추가 ([c4d900a](https://github.com/goorm-dev/gds/commit/c4d900ab2dd02e6290f8629fc6c1605226a27cfb))
-   private 필드 추가 ([830e366](https://github.com/goorm-dev/gds/commit/830e366827a0744e6db33c238072f8bab6b57316))

### Other

-   **Avatar:** button, div 태그 모두 가능하도록 변경 [#398](https://github.com/goorm-dev/gds/issues/398) ([728a3b4](https://github.com/goorm-dev/gds/commit/728a3b4a7af129a0bde6b596d46c8d5e53538168))
-   changelog 수동 수정 ([d46dadb](https://github.com/goorm-dev/gds/commit/d46dadbb74cd266c1987efbefa734c92a46a0130))
-   **changelog:** 불필요한 commit 내역 제거 ([6a25f64](https://github.com/goorm-dev/gds/commit/6a25f647d026b00e5432f9ea4dcd57cfcbe3ab61))
-   old-develop push trigger 제거 ([cf48c54](https://github.com/goorm-dev/gds/commit/cf48c540d99093d96a6581530243b7f58bf4b82a))
-   **release:** publish v1.43.0 ([9240134](https://github.com/goorm-dev/gds/commit/9240134afded7676516d6b29b1c9daf435e0c672))
-   **release:** publish v1.43.0 ([97e0044](https://github.com/goorm-dev/gds/commit/97e0044d8075cf98265091ccdac8b91ac6c37aa4))
-   **release:** publish v1.44.0 ([648078f](https://github.com/goorm-dev/gds/commit/648078f73c30eb28b9a24a4031f853feb6a83c6f))
-   toastify 버전 수정 및 github action 수정 ([fc36539](https://github.com/goorm-dev/gds/commit/fc365391c07249421e0a677cc4e243b027326609))
-   워크플로우 수정 ([3b052de](https://github.com/goorm-dev/gds/commit/3b052de23ab3306905c7c4f0de88d60e6d34f64a))

### Bug Fix

-   **avatar:** avatar 클래스명 수정 ([#368](https://github.com/goorm-dev/gds/issues/368)) ([9a7a422](https://github.com/goorm-dev/gds/commit/9a7a422accaefc3ac3fca45f49cd4d02d4fc967b))
-   **DatePicker:** 초기화버튼 노출 조건 변경 ([#386](https://github.com/goorm-dev/gds/issues/386)) ([37048c1](https://github.com/goorm-dev/gds/commit/37048c14139c34246431e45a77dd420fbc5fe6bb)), closes [#389](https://github.com/goorm-dev/gds/issues/389)
-   **Nav:** Nav 관련 컴포넌트 스타일 깨짐 임시 대응 ([f7653fb](https://github.com/goorm-dev/gds/commit/f7653fbd878063a38acce352d4e3bb02150d062a))
-   publish 명령어 수정 ([1aa5c3b](https://github.com/goorm-dev/gds/commit/1aa5c3b309de7aedb5061d267b69770172e09556))
-   publish 명령어 수정 ([f800c09](https://github.com/goorm-dev/gds/commit/f800c09d8aecd5c1268f40d5230f206eb5537047))
-   **TextButton:** link color 오류 수정 ([#385](https://github.com/goorm-dev/gds/issues/385)) ([805461c](https://github.com/goorm-dev/gds/commit/805461cffdd45fbbb13e7c88ab9a031f6ea88097))

## [1.44.0](https://github.com/goorm-dev/gds/compare/v1.42.0...v1.44.0) (2024-07-19)

### Bug Fix

-   **avatar:** avatar 클래스명 수정 ([#368](https://github.com/goorm-dev/gds/issues/368)) ([9a7a422](https://github.com/goorm-dev/gds/commit/9a7a422accaefc3ac3fca45f49cd4d02d4fc967b))
-   **DatePicker:** 초기화버튼 노출 조건 변경 ([#386](https://github.com/goorm-dev/gds/issues/386)) ([37048c1](https://github.com/goorm-dev/gds/commit/37048c14139c34246431e45a77dd420fbc5fe6bb)), closes [#389](https://github.com/goorm-dev/gds/issues/389)
-   publish 명령어 수정 ([1aa5c3b](https://github.com/goorm-dev/gds/commit/1aa5c3b309de7aedb5061d267b69770172e09556))
-   publish 명령어 수정 ([f800c09](https://github.com/goorm-dev/gds/commit/f800c09d8aecd5c1268f40d5230f206eb5537047))
-   **TextButton:** link color 오류 수정 ([#385](https://github.com/goorm-dev/gds/issues/385)) ([805461c](https://github.com/goorm-dev/gds/commit/805461cffdd45fbbb13e7c88ab9a031f6ea88097))

### Other

-   **Avatar:** button, div 태그 모두 가능하도록 변경 [#398](https://github.com/goorm-dev/gds/issues/398) ([728a3b4](https://github.com/goorm-dev/gds/commit/728a3b4a7af129a0bde6b596d46c8d5e53538168))
-   changelog 수동 수정 ([d46dadb](https://github.com/goorm-dev/gds/commit/d46dadbb74cd266c1987efbefa734c92a46a0130))
-   **changelog:** 불필요한 commit 내역 제거 ([6a25f64](https://github.com/goorm-dev/gds/commit/6a25f647d026b00e5432f9ea4dcd57cfcbe3ab61))
-   old-develop push trigger 제거 ([cf48c54](https://github.com/goorm-dev/gds/commit/cf48c540d99093d96a6581530243b7f58bf4b82a))
-   **release:** publish v1.43.0 ([9240134](https://github.com/goorm-dev/gds/commit/9240134afded7676516d6b29b1c9daf435e0c672))
-   **release:** publish v1.43.0 ([97e0044](https://github.com/goorm-dev/gds/commit/97e0044d8075cf98265091ccdac8b91ac6c37aa4))
-   toastify 버전 수정 및 github action 수정 ([fc36539](https://github.com/goorm-dev/gds/commit/fc365391c07249421e0a677cc4e243b027326609))
-   워크플로우 수정 ([3b052de](https://github.com/goorm-dev/gds/commit/3b052de23ab3306905c7c4f0de88d60e6d34f64a))

### New Features

-   **CI/CD:** release 스크립트 수정 ([92c6005](https://github.com/goorm-dev/gds/commit/92c6005f1c4026125179bc32c0f3d9e71646ec6e))
-   **DatePicker:** date prop 삭제, defaultDate가 역할 수행 ([#379](https://github.com/goorm-dev/gds/issues/379)) ([e477d20](https://github.com/goorm-dev/gds/commit/e477d20bf9d1f301a3e0e8a6b1ca8784ff33b2f0))
-   **Icon:** CodeBlockIcon 추가 ([2fd611d](https://github.com/goorm-dev/gds/commit/2fd611dfe03302700698a3496f6aa1de49cfce0a))
-   **kidkit:** 일부 컴포넌트 Kikit 테마 적용 ([#390](https://github.com/goorm-dev/gds/issues/390)) ([943f1c4](https://github.com/goorm-dev/gds/commit/943f1c466d3c71f5048b79ad7239a4b37b8a2167))
-   old-develop 브랜치 storybook 수동배포 추가 ([10d5607](https://github.com/goorm-dev/gds/commit/10d5607adc82d27107bd60bdbf4c7ee75aa4301e))
-   old-develop 브랜치 storybook 수동배포 추가 ([c4d900a](https://github.com/goorm-dev/gds/commit/c4d900ab2dd02e6290f8629fc6c1605226a27cfb))
-   private 필드 추가 ([830e366](https://github.com/goorm-dev/gds/commit/830e366827a0744e6db33c238072f8bab6b57316))

## [1.43.0](https://github.com/goorm-dev/gds/compare/v1.42.0...v1.43.0) (2024-07-15)

### New Features

-   **CI/CD:** release 스크립트 수정 ([92c6005](https://github.com/goorm-dev/gds/commit/92c6005f1c4026125179bc32c0f3d9e71646ec6e))
-   **DatePicker:** date prop 삭제, defaultDate가 역할 수행 ([#379](https://github.com/goorm-dev/gds/issues/379)) ([e477d20](https://github.com/goorm-dev/gds/commit/e477d20bf9d1f301a3e0e8a6b1ca8784ff33b2f0))
-   old-develop 브랜치 storybook 수동배포 추가 ([10d5607](https://github.com/goorm-dev/gds/commit/10d5607adc82d27107bd60bdbf4c7ee75aa4301e))
-   old-develop 브랜치 storybook 수동배포 추가 ([c4d900a](https://github.com/goorm-dev/gds/commit/c4d900ab2dd02e6290f8629fc6c1605226a27cfb))
-   private 필드 추가 ([830e366](https://github.com/goorm-dev/gds/commit/830e366827a0744e6db33c238072f8bab6b57316))

### Bug Fix

-   **avatar:** avatar 클래스명 수정 ([#368](https://github.com/goorm-dev/gds/issues/368)) ([9a7a422](https://github.com/goorm-dev/gds/commit/9a7a422accaefc3ac3fca45f49cd4d02d4fc967b))
-   publish 명령어 수정 ([1aa5c3b](https://github.com/goorm-dev/gds/commit/1aa5c3b309de7aedb5061d267b69770172e09556))
-   publish 명령어 수정 ([f800c09](https://github.com/goorm-dev/gds/commit/f800c09d8aecd5c1268f40d5230f206eb5537047))
-   **TextButton:** link color 오류 수정 ([#385](https://github.com/goorm-dev/gds/issues/385)) ([805461c](https://github.com/goorm-dev/gds/commit/805461cffdd45fbbb13e7c88ab9a031f6ea88097))

### Other

-   changelog 수동 수정 ([d46dadb](https://github.com/goorm-dev/gds/commit/d46dadbb74cd266c1987efbefa734c92a46a0130))
-   **changelog:** 불필요한 commit 내역 제거 ([6a25f64](https://github.com/goorm-dev/gds/commit/6a25f647d026b00e5432f9ea4dcd57cfcbe3ab61))
-   old-develop push trigger 제거 ([cf48c54](https://github.com/goorm-dev/gds/commit/cf48c540d99093d96a6581530243b7f58bf4b82a))

## 1.42.0 (2024-07-05)

-   fix(ButtonToggleGroup): 옵셔널 type 적용 및 불필요한 props 제거 ([#321](https://github.com/goorm-dev/gds/pull/321))
-   fix(SearchInput): onChange 이벤트 타입 변경 ([#319](https://github.com/goorm-dev/gds/pull/319))
-   feat(icons): BlankIcon, SubdirectoryArrowLeftIcon, KeyboardTabIcon 추가 ([#366](https://github.com/goorm-dev/gds/pull/366))
-   chore: [1.41.6-experimental-datepicker 릴리즈](https://github.com/goorm-dev/gds/commit/41518f52511207ef72e07ee8036911ba8633644a)

### [1.41.4](https://github.com/goorm-dev/gds/compare/v1.41.1...v1.41.4) (2024-06-17)

-   chore(gds-goormstrap): [Storybook light 스타일 생성](https://github.com/goorm-dev/gds/commit/26fce94d2ee91eec7b453c21e29b2fe19c9138f7)
-   fix(FileInput, FormFeedback): [색이 적용 안되는 버그 수정](https://github.com/goorm-dev/gds/commit/6476dfd002aaa2b9892b9ecdb1d33264a33e9dbd)
-   fix(UncontrolledButtonToggleGroup): [불필요한 속성 전달 제거](https://github.com/goorm-dev/gds/commit/9d72e505b27d02e04c7460fc6edf1c068e1b4eb9)
-   fix(UncontrolledButtonToggleGroup): [isUncontrolled props 제거 후 로직 변경](https://github.com/goorm-dev/gds/commit/8c9d838dfe417e036fc83323ff59b64dcbf8c7b8)

### [1.41.2](https://github.com/goorm-dev/gds/compare/v1.41.1...v1.41.2) (2024-06-17)

### [1.41.1](https://github.com/goorm-dev/gds/compare/v1.41.0...v1.41.1) (2024-06-13)

## [1.41.0](https://github.com/goorm-dev/gds/compare/v1.40.0...v1.41.0) (2024-06-10)

-   changelog 없음

## [1.40.0](https://github.com/goorm-dev/gds/compare/v1.39.4...v1.40.0) (2024-06-03)

-   changelog 없음

### [1.39.4](https://github.com/goorm-dev/gds/compare/v1.39.3...v1.39.4) (2024-06-03)

-   changelog 없음

### [1.39.3](https://github.com/goorm-dev/gds/compare/v1.39.2...v1.39.3) (2024-06-03)

### New Features

-   **ci:** install & build github action 추가 ([6f7e3b2](https://github.com/goorm-dev/gds/commit/6f7e3b2ec396b4bb61b86bb2df68ec7b3a8e9d67))

### Bug Fix

-   **Button:** 버튼 빌드 오류 수정 ([#267](https://github.com/goorm-dev/gds/issues/267)) ([92ef979](https://github.com/goorm-dev/gds/commit/92ef979a01256080c3906f59977f79c87a1bc173))
-   **Button:** gantt 빌드 에러 수정 ([#268](https://github.com/goorm-dev/gds/issues/268)) ([0d33f5e](https://github.com/goorm-dev/gds/commit/0d33f5e2c9b74f45f04c8ad4676ccbbfeddbb820))
-   **gds-components:** build error 수정 ([7a94211](https://github.com/goorm-dev/gds/commit/7a9421181cd652b681f2ba1fae4eedd83c9646e6))

### [1.39.2](https://github.com/goorm-dev/gds/compare/v1.39.1...v1.39.2) (2024-05-31)

### Bug Fix

-   **InputCounter:** type error 수정 ([e1ee9fe](https://github.com/goorm-dev/gds/commit/e1ee9fe2e655c6542dd03b3e5e61a5868d3177b1))

### [1.39.1](https://github.com/goorm-dev/gds/compare/v1.39.0...v1.39.1) (2024-05-31)

### Bug Fix

-   **button:** button 빌드 에러 ([#260](https://github.com/goorm-dev/gds/issues/260)) ([09965f8](https://github.com/goorm-dev/gds/commit/09965f88f4dfe8a99c598e16818e7d1e9aaca93b))

## [1.39.0](https://github.com/goorm-dev/gds/compare/v1.38.1...v1.39.0) (2024-05-31)

### New Features

-   **docs:** code highlight 적용 ([#253](https://github.com/goorm-dev/gds/issues/253)) ([95c8669](https://github.com/goorm-dev/gds/commit/95c866904cefff4f041c49e1ce6c8656a9a1497f))
-   **docs:** docs markdown 커스텀 컴포넌트 추가 ([#242](https://github.com/goorm-dev/gds/issues/242)) ([3af189f](https://github.com/goorm-dev/gds/commit/3af189f80973435b12092458a84a17aeb894d11b))
-   **docs:** SideNav 구조 변경 ([#251](https://github.com/goorm-dev/gds/issues/251)) ([9697d80](https://github.com/goorm-dev/gds/commit/9697d800e30f92e09b14b04a2d19e12771f9739e))

### Bug Fix

-   **FolderIcon:** FolderIcon shape 수정 ([#247](https://github.com/goorm-dev/gds/issues/247)) ([c39b12c](https://github.com/goorm-dev/gds/commit/c39b12ca468dbf02d253a21050b906a7b01b4cdf))
-   **gds-components:** 사용단에서 라이브러리 types를 제대로 못찾는 에러 임시 해결 ([#261](https://github.com/goorm-dev/gds/issues/261)) ([c0d7a8a](https://github.com/goorm-dev/gds/commit/c0d7a8aaa75ebe244f29647164109c921d58d3ba))
-   **github-actions:** deploy-goormstrap-dev 워크플로우 수정 ([0d33f11](https://github.com/goorm-dev/gds/commit/0d33f1116a29f6ef06217bd20cfde3e05e234ea1))
-   **Input:** 마우스 focus 시에 outline 생성되는 오류 수정 및 새로운 custom hooks(useFocusOrigin) 추가 ([#259](https://github.com/goorm-dev/gds/issues/259)) ([4e1987a](https://github.com/goorm-dev/gds/commit/4e1987a98054e55818556ededb7288da33d27613))

### [1.38.1](https://github.com/goorm-dev/gds/compare/v1.38.0...v1.38.1) (2024-05-29)

### Bug Fix

-   **gds-components:** types 제대로 바라보지 않고 있는 오류 해결 ([#257](https://github.com/goorm-dev/gds/issues/257)) ([2401d03](https://github.com/goorm-dev/gds/commit/2401d03b102293db2f6143bf35c07d558258c1ec))

## [1.38.0](https://github.com/goorm-dev/gds/compare/v1.37.1...v1.38.0) (2024-05-29)

### Documentation

-   **gds-docs:** Foundations/Color 페이지 개발 ([#244](https://github.com/goorm-dev/gds/issues/244)) ([c0778ad](https://github.com/goorm-dev/gds/commit/c0778ad41229ccc7bc68c7c430d9406359c276b4))

### New Features

-   **docs:** code highligh 적용 ([4b242ca](https://github.com/goorm-dev/gds/commit/4b242cab0de47773e8fc9dcec442635ec1233e18))
-   **docs:** PropsTable 값 보이지 않는 이슈, LiveDemo 개선 ([#240](https://github.com/goorm-dev/gds/issues/240)) ([960a1d8](https://github.com/goorm-dev/gds/commit/960a1d8439ff6ef614b0ef2fbaa10db6e7a873d5))
-   **docs:** 파운데이션 선택 기능 ([#231](https://github.com/goorm-dev/gds/issues/231)) ([2253898](https://github.com/goorm-dev/gds/commit/22538989b876f80a9b6f9d13ed2f1d4395b65371))
-   **gds-hooks:** Focus를 특성 element 내부에 가두는 custom hooks 추가 ([#243](https://github.com/goorm-dev/gds/issues/243)) ([523ea8a](https://github.com/goorm-dev/gds/commit/523ea8ac039d2460dd241e27adb2a090f1ca69fd))
-   **icons:** 스택 아이콘 6개 추가 ([#250](https://github.com/goorm-dev/gds/issues/250)) ([5e5d21e](https://github.com/goorm-dev/gds/commit/5e5d21e2e49f2d96d692f927bb04acee19051b19))

### Bug Fix

-   **gds-components:** 빌드시간 오래걸리는 오류 해결 ([#254](https://github.com/goorm-dev/gds/issues/254)) ([85ec152](https://github.com/goorm-dev/gds/commit/85ec1527bdfe5471c076edf489e15ddb15a9c779))

### [1.37.1](https://github.com/goorm-dev/gds/compare/v1.37.0...v1.37.1) (2024-05-22)

### Bug Fix

-   **folder:** 폴더 공백 제거 ([#239](https://github.com/goorm-dev/gds/issues/239)) ([fed3ba8](https://github.com/goorm-dev/gds/commit/fed3ba817ec9bf10e02369f91490d5a847c62079))
-   **gds-goormstrap:** kidkit foundation에 koddi font 없는 오류 해결 ([#241](https://github.com/goorm-dev/gds/issues/241)) ([82a4da1](https://github.com/goorm-dev/gds/commit/82a4da129d3738aef29eac267cb3610d36e6e5a2))

## [1.37.0](https://github.com/goorm-dev/gds/compare/v1.36.0...v1.37.0) (2024-05-17)

### New Features

-   **docs:** codeblock에 copy button 추가 ([#226](https://github.com/goorm-dev/gds/issues/226)) ([1d2c0a1](https://github.com/goorm-dev/gds/commit/1d2c0a145e3700521a7b82f2bec86b6af8e843cf))
-   **docs:** overview 채워넣는 부분 자동화 ([#225](https://github.com/goorm-dev/gds/issues/225)) ([9645583](https://github.com/goorm-dev/gds/commit/96455832254690b2c6bd077b44f83fe459edf679))
-   **docs:** yml 업데이트 로직 수정 & 사이드 바 메뉴 드롭다운 수정 ([#229](https://github.com/goorm-dev/gds/issues/229)) ([2fffc07](https://github.com/goorm-dev/gds/commit/2fffc0746c64fb9a529fcfb7ef8aa6dc5a5a3c20))
-   **docs:** 문서화 사이트 Breadcrumb 클릭 기능 추가 ([#215](https://github.com/goorm-dev/gds/issues/215)) ([b09c153](https://github.com/goorm-dev/gds/commit/b09c153e7826748daa44168cc88221ec49227d1b))
-   **gds-hooks:** GDS Custom hooks를 담는 새로운 패키지(워크스페이스) 생성 ([#230](https://github.com/goorm-dev/gds/issues/230)) ([5f94f1f](https://github.com/goorm-dev/gds/commit/5f94f1f52e11f2e42d1de35fe3b50f944f98a79e))
-   **icons:** LineSpacingIcon, FormatColorTextIcon 추가 ([#236](https://github.com/goorm-dev/gds/issues/236)) ([c3b560f](https://github.com/goorm-dev/gds/commit/c3b560fc32386a3d5bc328e72fdc6298c7022ba8))

### Bug Fix

-   **AddAvatar:** sm 사이즈에서 icon 작아지는 오류해결 ([#235](https://github.com/goorm-dev/gds/issues/235)) ([8001127](https://github.com/goorm-dev/gds/commit/8001127a03c33e771d2acd1c25d80e122af89e8a))
-   **docs:** Button.data에서 root에 있는 ColorMap쓰도록 변경 ([#227](https://github.com/goorm-dev/gds/issues/227)) ([07c7075](https://github.com/goorm-dev/gds/commit/07c7075758c57ec610e23810d8571f4d2e0c8361))
-   **docs:** getDocsComponentFromFigma에 테스트용 함수 사용 제거 ([#233](https://github.com/goorm-dev/gds/issues/233)) ([6feb2a3](https://github.com/goorm-dev/gds/commit/6feb2a3729695e36f68c0a0e4a1d01f79ff8ef96))
-   **Footer:** gds-icons 가져오는 방식 수정 ([57384be](https://github.com/goorm-dev/gds/commit/57384be7409e12738802d1a58f2af49be47bdf0f))
-   **gds-docs:** 빌드 오류로 인한 foundation 페이지들 임시로 만든 것들 제거 ([db2366b](https://github.com/goorm-dev/gds/commit/db2366b0e6bf5b4c1f805bab1a767990f0e12ed2))
-   **gds-goormstrap:** size-175 토큰 추가 ([#234](https://github.com/goorm-dev/gds/issues/234)) ([283d6cf](https://github.com/goorm-dev/gds/commit/283d6cf44bf4da05e85426e749a44700dbbcd388))
-   **getDocsComponent:** rules of use 없을 때 처리 ([#237](https://github.com/goorm-dev/gds/issues/237)) ([c69bf10](https://github.com/goorm-dev/gds/commit/c69bf10c0908b6aebac04ac585a8edd38a7b1e70))

## [1.36.0](https://github.com/goorm-dev/gds/compare/v1.35.8...v1.36.0) (2024-05-09)

### Build System

-   **eslint:** react hooks 플러그인 추가 ([0f87450](https://github.com/goorm-dev/gds/commit/0f8745094401553d3540dfd807b44aa6ebbd0201))
-   **Gantt:** 간트 빌드시 사용하는 tsconfig 수정 ([2e69980](https://github.com/goorm-dev/gds/commit/2e69980905adad0b9e4636161a6335d3f0a02b47))

### Documentation

-   **Gantt:** forceDateInView 함수 주석 추가 ([7e403a5](https://github.com/goorm-dev/gds/commit/7e403a5bc6045c94821f4aeb35c152bbfbe10279))
-   **Gantt:** GanttViewModeContextType 설명 추가 ([311bbdc](https://github.com/goorm-dev/gds/commit/311bbdc645943654f62661015a0c2fb4ad59e3f8))
-   **Gantt:** useTotalDateRange 설명 추가 ([f98aa3a](https://github.com/goorm-dev/gds/commit/f98aa3a33c8366f1f4c111a4d7b1659da1cb33f2))
-   **Gantt:** view mode provider 내 함수 타입 인자명 수정 ([9a1c6da](https://github.com/goorm-dev/gds/commit/9a1c6da4776e49c3f379d719f23ecc37fc713781))
-   **Gantt:** viewMode에 따른 날짜 계산 로직 설명 추가 ([64eb2ad](https://github.com/goorm-dev/gds/commit/64eb2ad7c537e626d6a83d9a0552552ade6aec15))
-   **Gantt:** 커스텀 이벤트 설명 주석 추가 ([b0d8be1](https://github.com/goorm-dev/gds/commit/b0d8be15c8dde76d89ba8fdc99baf569fceb1023))

### Other

-   **cd:** goormstrap workflow trigger 수정 ([2cca18c](https://github.com/goorm-dev/gds/commit/2cca18c8aacb51373f143dbe9dec8c5efe4affe3))
-   **cd:** goormstrap workflow trigger 수정 ([9629062](https://github.com/goorm-dev/gds/commit/9629062218aaf342af17374d0a9e9096a3f1c326))
-   **Gantt:** Provider 컨텍스트 값 네이밍 변경 ([2118bbb](https://github.com/goorm-dev/gds/commit/2118bbbd0a0561f7f82ecdb5b06f1aecaa292de8))

### Code Refactoring

-   **Gantt:** Context hell 관리용 컴포넌트 추가 ([d57f8ce](https://github.com/goorm-dev/gds/commit/d57f8ced548b57dfa6a154be803e34564f931838))
-   **Gantt:** GanttGridInner 제거 ([6c0e741](https://github.com/goorm-dev/gds/commit/6c0e741c186b6ddd9cdbb5e43a93f3cfd8a42431))
-   **Gantt:** GanttLocales enum에서 객체로 변경 ([f06481a](https://github.com/goorm-dev/gds/commit/f06481a7bf2d155d052a07db376e5ef53bc2e826))
-   **Gantt:** getOpUnitTypeFromViewModeForDiff 함수 분리 ([e2683ee](https://github.com/goorm-dev/gds/commit/e2683eed1929e7610e730bd431a531170eaaab4b))
-   **Gantt:** setupBackgroundPositions가 객체를 전달받도록 변경 ([bcd7ab9](https://github.com/goorm-dev/gds/commit/bcd7ab94d43fa6950e8598422abf7fd1a65026b9))
-   **Gantt:** total date range 계산 로직 개선 ([be9f3f9](https://github.com/goorm-dev/gds/commit/be9f3f951ab4df366416a1650f20a44681f0bdf1))
-   **Gantt:** useScrollPosition 내에서 setter 캡슐화 ([812c7de](https://github.com/goorm-dev/gds/commit/812c7def047b081063702bc1a9114a504dfbdcda))
-   **Gantt:** useTotalDateRange에서 재귀계산 분기처리 리팩토링 ([014a4f3](https://github.com/goorm-dev/gds/commit/014a4f3594ec4011c3514e620ff349b859d02d70))
-   **Gantt:** viewport Scroll Position을 Viewport 컴포넌트 내에서 핸들링 ([bd30f9c](https://github.com/goorm-dev/gds/commit/bd30f9c416ae662f0c7fc5ace5e69458b1f4e860))
-   **Gantt:** viewportWrapper => viewport 네이밍 변경 ([1636f60](https://github.com/goorm-dev/gds/commit/1636f60c84ea14e2d3ccd0201f2207f538c95703))
-   **Gantt:** viewport에 대해 scrollTo, clientWidth 캡슐화된 로직 사용 ([35d7f76](https://github.com/goorm-dev/gds/commit/35d7f761a2f83d3ad995ef901dee09b04a7a9c4e))
-   **Gantt:** visible range와 viewport 용어 정리 ([e232f57](https://github.com/goorm-dev/gds/commit/e232f577efd00f10d49fac38632d626029992770))
-   **Gantt:** 컨텍스트 모두 null로 초기화 ([b780980](https://github.com/goorm-dev/gds/commit/b78098025ab4deb103242f8ce97aa87a19291779))
-   **Gantt:** 필요 없는 컨텍스트 제거 ([4f3218e](https://github.com/goorm-dev/gds/commit/4f3218eec411780956b0ed98aa61861696063d09))
-   **Gantt:** 필요 없는 함수 분리 제거 ([7e0729e](https://github.com/goorm-dev/gds/commit/7e0729e8f3e58746f5fddf9fc464bc99fd715aaf))
-   **popovers:** Popover ts전환 ([#201](https://github.com/goorm-dev/gds/issues/201)) ([a93d420](https://github.com/goorm-dev/gds/commit/a93d420e5f915b582616853db562c679826decaf))

### Bug Fix

-   **cd:** send slack message 오류 수정 ([88e8185](https://github.com/goorm-dev/gds/commit/88e81853eb6cf381cb9003f1bcb8dd8ae940f32f))
-   **Gantt:** GanttViewModeController 타입 수정 ([7a62298](https://github.com/goorm-dev/gds/commit/7a62298f8746719cd68ff6c2bc22b9b71e8b42e8))
-   **Gantt:** setupTodayPosition 타입 수정 ([a019b16](https://github.com/goorm-dev/gds/commit/a019b164a4cff85d4c727824fafa7c8a34374aef))
-   **Gantt:** sprint view dayEndOfViewMode 로직 수정 ([a682b17](https://github.com/goorm-dev/gds/commit/a682b17ca5cd363efb7df2ed6b086d4c1537bd4c))
-   **Gantt:** sprint viewMode에서 기간 수정중 상단에 기간 하이라이트가 안되는 이슈 ([99fafaa](https://github.com/goorm-dev/gds/commit/99fafaa44bbf044c9b716900927a482f1310d862))
-   **Gantt:** sprintOptions 기본값 수정 ([ebd7833](https://github.com/goorm-dev/gds/commit/ebd78337a43e5a7145d1a818cf6f94f7cd9ef893))
-   **Gantt:** type 이슈 수정 ([d3d1565](https://github.com/goorm-dev/gds/commit/d3d156599c294bd356d8ea15db5416c1aac49a4e))
-   **Gantt:** useCurrentHoveringDate 로직 수정 ([12631a7](https://github.com/goorm-dev/gds/commit/12631a75c6b85937242dc144abb9253003de3465))
-   **Gantt:** viewMode sprint에서 배경 setup 제외 ([a3397b2](https://github.com/goorm-dev/gds/commit/a3397b2339b190d087db5f6137fc0889794815c6))
-   **Gantt:** visible date range 재계산 로직 수정 ([a812a1c](https://github.com/goorm-dev/gds/commit/a812a1c2c8c2cd1e96986db1e592e7f65ce67eab))
-   **Gantt:** 우측으로 이동시 기간이 잘리는 이슈 ([e3c5857](https://github.com/goorm-dev/gds/commit/e3c5857643e0f27ec557019f8707295b383e1a3e))
-   **Gantt:** 의존성 배열 빠진 부분 수정 ([7cbc685](https://github.com/goorm-dev/gds/commit/7cbc685e6280bd5093cf244865e81093a13cfda6))
-   **Gantt:** 첫 마운트시 적절한 위치로 이동하지 않는 이슈 해결 ([5b3170b](https://github.com/goorm-dev/gds/commit/5b3170bed4e50e34a983a0ae9923492c5e5de721))
-   **storybook:** README 안뜨는 오류 해결 ([#219](https://github.com/goorm-dev/gds/issues/219)) ([89566e8](https://github.com/goorm-dev/gds/commit/89566e865f18d8722258c2523861451da5a5ce8e))

### New Features

-   **docs:** 컴포넌트 상세페이지 추가수정 ([#199](https://github.com/goorm-dev/gds/issues/199)) ([ef15f36](https://github.com/goorm-dev/gds/commit/ef15f36138cc8649685c1d9ba317a394dbf3d649))
-   **Gantt:** i18n 키 필요한 곳에 모두 추가 ([0c06518](https://github.com/goorm-dev/gds/commit/0c065182749b4fc84649c57af4a6949eeb83efe4))
-   **Gantt:** initialViewMode resolve 레이어 이동 ([c9c8cda](https://github.com/goorm-dev/gds/commit/c9c8cdab4f6bce5ac206b247abb44343a717c430))
-   **Gantt:** PeriodIndicator가 종료일시 연단위 차이가 나면 연단위도 표기하도록 개선 ([c949e28](https://github.com/goorm-dev/gds/commit/c949e281d9dcd3613d2bec6136ae3fa92e4de7b1))
-   **Gantt:** tolerance 관련 로직 수정 ([32e8a68](https://github.com/goorm-dev/gds/commit/32e8a68b3a73f0ed3ca19f79e7f74a0773ce5622))
-   **Gantt:** 다국어 지원 base 기능 추가 ([dc0615b](https://github.com/goorm-dev/gds/commit/dc0615ba4a7153fc31652afa08221fcfd86e8157))
-   **Gantt:** 영어, 일본어 대응 추가 ([81644b2](https://github.com/goorm-dev/gds/commit/81644b2ab6f01f52c0532dda4a90600f9451a7a5))
-   **Gantt:** 활성화 할 viewMode 선택 기능 추가 ([325b323](https://github.com/goorm-dev/gds/commit/325b3234629a103a87cb183ec054eff2c9b47e13))
-   **gds-gantt:** 스프린트별 뷰 추가 ([aaf27a0](https://github.com/goorm-dev/gds/commit/aaf27a0cc6bafa72b69b6ebb8c0986f307c5b1a9))
-   **icon:** CollapseIcon, ExpandIcon, TranslateIcon 아이콘 추가 ([#217](https://github.com/goorm-dev/gds/issues/217)) ([72dddb0](https://github.com/goorm-dev/gds/commit/72dddb0b1b361d5cf98206610667ca3acf00348c))
-   **icon:** PowerIcon, TimeSolidIcon, LockOutlineIcon, GameOutlineIcon, InfoCircleOutlineIcon, AddUserOutlineIcon, FoldIcon 추가 ([#228](https://github.com/goorm-dev/gds/issues/228)) ([bafa0cc](https://github.com/goorm-dev/gds/commit/bafa0cc0e2fa2887a7ffa93ff0e994a7dfdb4058))

### [1.35.8](https://github.com/goorm-dev/gds/compare/v1.35.7...v1.35.8) (2024-04-30)

### Bug Fix

-   **CD:** github action release 오류 수정 ([#214](https://github.com/goorm-dev/gds/issues/214)) ([ab6c653](https://github.com/goorm-dev/gds/commit/ab6c6534f84a62fc9052445b4e4dbb0ba214709b))

### [1.35.7](https://github.com/goorm-dev/gds/compare/v1.35.6...v1.35.7) (2024-04-30)

### Bug Fix

-   **common:** github action install 오류 수정4 ([f331c71](https://github.com/goorm-dev/gds/commit/f331c717241d9044d4d7a9669cf3f9711e196e15))

### [1.35.6](https://github.com/goorm-dev/gds/compare/v1.35.5...v1.35.6) (2024-04-30)

### Bug Fix

-   **common:** github action install 오류 수정3 ([9e708e6](https://github.com/goorm-dev/gds/commit/9e708e6b3c7659fecc1cac69b88747b1169d8f51))

### [1.35.5](https://github.com/goorm-dev/gds/compare/v1.35.4...v1.35.5) (2024-04-30)

### Bug Fix

-   **common:** github action install 오류 수정2 ([3ace70c](https://github.com/goorm-dev/gds/commit/3ace70c4c2e70e56fa7cea7d334e20de6b3d3b18))

### [1.35.4](https://github.com/goorm-dev/gds/compare/v1.35.3...v1.35.4) (2024-04-30)

### Bug Fix

-   **common:** github action install 오류 수정 ([a2a3ab3](https://github.com/goorm-dev/gds/commit/a2a3ab34314245bd964f89c578f57c98eb78e384))

### [1.35.3](https://github.com/goorm-dev/gds/compare/v1.35.2...v1.35.3) (2024-04-30)

### Bug Fix

-   **common:** lerna publish 오류 수정 ([7484508](https://github.com/goorm-dev/gds/commit/7484508981cab5112b712ffb1ee404d4dc4a8d17))

### [1.35.2](https://github.com/goorm-dev/gds/compare/v1.35.1...v1.35.2) (2024-04-29)

### Other

-   release script 수정 ([dacb143](https://github.com/goorm-dev/gds/commit/dacb14359405c849fd94b2a5a8044f73af8bd780))

### [1.35.1](https://github.com/goorm-dev/gds/compare/v1.35.0...v1.35.1) (2024-04-29)

### Other

-   github aciton node 16->18 ([96087ee](https://github.com/goorm-dev/gds/commit/96087ee0454c04c1e03523554b184cb73fee0aea))
-   github action 테스트 ([72fb943](https://github.com/goorm-dev/gds/commit/72fb943b50a86b7a7192ca264b9ba97c6c3948ff))
-   ts 오류 수정 ([c021993](https://github.com/goorm-dev/gds/commit/c02199325e6f7697fc9e32886b1b6f3fb96f2f6c))
-   tsc, ts-node 패키지 gds-goormstrap 에서 설치하도록 변경 ([3d785ba](https://github.com/goorm-dev/gds/commit/3d785bab4f66c8d187b944aa2c67dbd8f9100fd7))

## [1.35.0](https://github.com/goorm-dev/gds/compare/v1.34.1...v1.35.0) (2024-04-29)

### New Features

-   **docs:** docs 폴더 구조 개선 ([#198](https://github.com/goorm-dev/gds/issues/198)) ([ff35316](https://github.com/goorm-dev/gds/commit/ff353160743c56f45a5b9dba3dbc97bc71a37eb7))

### Bug Fix

-   **common:** github action에서 install 안되는 오류 수정 ([#213](https://github.com/goorm-dev/gds/issues/213)) ([e82ea65](https://github.com/goorm-dev/gds/commit/e82ea6583e967c6131f04304b35e506a77ca707a))
-   node 18에서 패키지 빌드 버그 수정 ([#200](https://github.com/goorm-dev/gds/issues/200)) ([3be3d71](https://github.com/goorm-dev/gds/commit/3be3d71b5ffc0dd9cad1cc16c1d7299afa626d22))

### [1.34.1](https://github.com/goorm-dev/gds/compare/v1.34.0...v1.34.1) (2024-04-26)

### Other

-   @goorm-dev/eslint-config-goorm 설치 ([4485558](https://github.com/goorm-dev/gds/commit/4485558968d9140e53a6a50bbe90b0e76d016533))

### Bug Fix

-   **common:** 릴리즈 오류 해결 ([#211](https://github.com/goorm-dev/gds/issues/211)) ([b172c79](https://github.com/goorm-dev/gds/commit/b172c79eac40776b562dd8f6267f0799f5e30929))
-   github action 오류로 인한 eslint-confg-goorm 임시 제거 ([fd51ec4](https://github.com/goorm-dev/gds/commit/fd51ec4661a251be2989e0074891e2c80b8861de))

## [1.34.0](https://github.com/goorm-dev/gds/compare/v1.33.3...v1.34.0) (2024-04-24)

### Bug Fix

-   **Breadcrumb:** Breadcrumb 중앙 정렬 수정 ([#191](https://github.com/goorm-dev/gds/issues/191)) ([f1be8dc](https://github.com/goorm-dev/gds/commit/f1be8dc0d2aebf1b09e7b9c99df144ae4b8c8e23))
-   **goormstrap:** 빌드 오류 수정 ([#195](https://github.com/goorm-dev/gds/issues/195)) ([6131383](https://github.com/goorm-dev/gds/commit/6131383e03b54485ce3921841d0fa08b9c49cbdc))
-   **TextButton:** link color 디자인 시안과 맞지 않는 이슈 수정 ([d974b3d](https://github.com/goorm-dev/gds/commit/d974b3dfbc23b97cce275694c7d7a9cc013ac8d3))

### Code Refactoring

-   **alerts:** Alert, UncontrolledAlert 컴포넌트 ts 전환 ([#188](https://github.com/goorm-dev/gds/issues/188)) ([ff0ebb7](https://github.com/goorm-dev/gds/commit/ff0ebb765b3d0a9d4b2aaef027904d33d3bcb734))
-   **BreadCrumb:** BreadCrumb, SearchInput ts 전환 ([#180](https://github.com/goorm-dev/gds/issues/180)) ([0215490](https://github.com/goorm-dev/gds/commit/0215490f1031124813c76f93aba2b7028e2a9c2e))
-   **Checkbox:** 체크박스 타입스크립트 전환 ([#185](https://github.com/goorm-dev/gds/issues/185)) ([0f70e5a](https://github.com/goorm-dev/gds/commit/0f70e5ae9f6ced969e2ee7eef3c2476a09585323))
-   **collapses:** ts 전환 ([#189](https://github.com/goorm-dev/gds/issues/189)) ([adb4694](https://github.com/goorm-dev/gds/commit/adb4694e3a501a9f0bb26ccfecc90c75b0cec184))
-   **eslint:** docs 전체 eslint 돌리기 ([#196](https://github.com/goorm-dev/gds/issues/196)) ([65eba83](https://github.com/goorm-dev/gds/commit/65eba83e4ff590359bf6f76e450e0f258f7fe1ba))
-   **icon:** 모든 icon ts 전환 및 Icon 관련 Type export ([#187](https://github.com/goorm-dev/gds/issues/187)) ([5916263](https://github.com/goorm-dev/gds/commit/59162637bec54b99d5d65c8f89c398a2ed411dcd))

### New Features

-   **avatars:** 스토리북에 propTable추가 ([#192](https://github.com/goorm-dev/gds/issues/192)) ([166a697](https://github.com/goorm-dev/gds/commit/166a697a7fdbef1cc52d5e1e0a01df91d6558956))
-   **docs/plop:** props 자동 추출 기능 ([#194](https://github.com/goorm-dev/gds/issues/194)) ([34ea39f](https://github.com/goorm-dev/gds/commit/34ea39f40c7318e69c64827089d8062ad6d9e510))
-   **docs:** gds-docs 문서화 사이트 틀 생성 ([#172](https://github.com/goorm-dev/gds/issues/172)) ([6a54e25](https://github.com/goorm-dev/gds/commit/6a54e255cf133060bf5e3bcba3a77a27fda96122))
-   **gds-goormstrap:** kidkit foundation 생성 (typography, dimension, space, border-radius) ([#207](https://github.com/goorm-dev/gds/issues/207)) ([47e743d](https://github.com/goorm-dev/gds/commit/47e743dd7067f12daa5a8c68c2fe32d1ca0283bc))
-   **goormstrap:** 관심사에 맞게 분리 ([#178](https://github.com/goorm-dev/gds/issues/178)) ([a5d86a1](https://github.com/goorm-dev/gds/commit/a5d86a11788001f069a83237f51ded3618f3e5a2))
-   **ServiceNav:** 로케일 드롭다운 아이템 변경 가능하도록 개선 ([f8d7fb0](https://github.com/goorm-dev/gds/commit/f8d7fb041c723bf810514456ef57841c29d2591d))
-   **Switch:** switch 컴포넌트 lg 사이즈 추가 ([#184](https://github.com/goorm-dev/gds/issues/184)) ([2bbf9cd](https://github.com/goorm-dev/gds/commit/2bbf9cd9748c857978b5f7f7c969cbf46e70bc47))
-   **Text:** 컴포넌트 및 스토리 생성 ([#206](https://github.com/goorm-dev/gds/issues/206)) ([495f39b](https://github.com/goorm-dev/gds/commit/495f39baedfe12f3bb79cece3987d5ace60cd81c))
-   **TOC:** gds-docs TOC 컴포넌트 추가 ([#182](https://github.com/goorm-dev/gds/issues/182)) ([1cc941d](https://github.com/goorm-dev/gds/commit/1cc941dba2a20809297b41f843dedd156a895643))
-   **웹접근성:** 일부 GDS 컴포넌트 WAI-ARIA 패턴 적용 ([#202](https://github.com/goorm-dev/gds/issues/202)) ([71ee9bf](https://github.com/goorm-dev/gds/commit/71ee9bffd84663c269299ff9609a4013751375ce))

### [1.33.3](https://github.com/goorm-dev/gds/compare/v1.33.2...v1.33.3) (2024-04-02)

### New Features

-   **SidePanel:** size prop 추가 ([67e21fd](https://github.com/goorm-dev/gds/commit/67e21fdef383d4e0659344e4c4572dec283f5a91))

### Bug Fix

-   **SidePanel:** max-width -> width로 변경 ([0297cc3](https://github.com/goorm-dev/gds/commit/0297cc311c8065d7e4c0cd99d99cf8eb6786f09b))
-   **SidePanel:** SizeToken 타입 위치 constants -> types로 이동 ([42e15fc](https://github.com/goorm-dev/gds/commit/42e15fc26aee28e58004104fee2f64da3249bc13))
-   **SidePanel:** 최대 100vw css 추가 ([8ae3fc5](https://github.com/goorm-dev/gds/commit/8ae3fc50269e385d985e0aa0e3390ac99d1b79f6))

### Documentation

-   update CHAGELOG ([07a12ea](https://github.com/goorm-dev/gds/commit/07a12ea0c5c301921c94b1e94271b3061c22f131))

### [1.33.2](https://github.com/goorm-dev/gds/compare/v1.33.1...v1.33.2) (2024-03-27)

-   **icon:** PipetteIcon, GpuIcon 추가 ([#179](https://github.com/goorm-dev/gds/pull/179))

### [1.33.1](https://github.com/goorm-dev/gds/compare/v1.33.0...v1.33.1) (2024-03-22)

### Bug Fix

-   **Avatar:** import 오류 해결 ([#177](https://github.com/goorm-dev/gds/issues/177)) ([64bc298](https://github.com/goorm-dev/gds/commit/64bc2983f268060f2688983c854810707debf899))

## [1.33.0](https://github.com/goorm-dev/gds/compare/v1.32.0...v1.33.0) (2024-03-22)

### New Features

-   button disabled 경우 이벤트 전달 막음 ([#166](https://github.com/goorm-dev/gds/issues/166)) ([b434cba](https://github.com/goorm-dev/gds/commit/b434cbaeb64341c63e3ed79a227dbd941e1a99e4))

### Code Refactoring

-   **Avatar:** ts 마이그레이션 ([#169](https://github.com/goorm-dev/gds/issues/169)) ([7b06496](https://github.com/goorm-dev/gds/commit/7b06496182ec7d01362d2233a55abd272ad2d865))

### Other

-   **ci:** goormstrap Release 알림 템플렛 수정 ([#175](https://github.com/goorm-dev/gds/issues/175)) ([1f8cfb1](https://github.com/goorm-dev/gds/commit/1f8cfb17762546d98f5c2c37a5936c9e8a92f9c1))
-   **ci:** 슬랙 release 알림 및 PR reviewer 지정 수정 ([#174](https://github.com/goorm-dev/gds/issues/174)) ([064f084](https://github.com/goorm-dev/gds/commit/064f0844d06905135031dcc78e9a706b79ae02d5))
-   **Icon:** AttemptIcon 추가 ([#173](https://github.com/goorm-dev/gds/issues/173)) ([e24097e](https://github.com/goorm-dev/gds/commit/e24097e39fab42fe9d3d248e6536f727bcc4f51c))

## [1.32.0](https://github.com/goorm-dev/gds/compare/v1.31.1...v1.32.0) (2024-03-15)

### New Features

-   **Calendar:** Calendar 타입스크립트 마이그레이션 ([a0c628c](https://github.com/goorm-dev/gds/commit/a0c628cd1b012b31b6fb773fc942fb20bfe618d2))
-   **DashboardFrame:** Contents 패딩 구조 변경 PR 분리 ([292cec5](https://github.com/goorm-dev/gds/commit/292cec563030131e3d744c8e3eb0c9f27ca1da4d))
-   **Modal:** reactstrap ModalProps 타입 적용 ([ea8d1ee](https://github.com/goorm-dev/gds/commit/ea8d1ee520cf309bf3fa78de197ea1d446b7eb18))
-   **SidePanel:** prop 타입 수정 ([dfa64ef](https://github.com/goorm-dev/gds/commit/dfa64ef1d67a59e50457ef372accc84401722fa4))
-   **ts:** propTypes -> type declaration용 transformer 플러그인 추가 ([a7a8f79](https://github.com/goorm-dev/gds/commit/a7a8f796c91676926bc856e990455db4a8774c6b))
-   **UncontrolledTooltip:** 타입스크립트 마이그레이션 ([9f8ef15](https://github.com/goorm-dev/gds/commit/9f8ef15cb883134c1b8be3234a9333274e86f5f7))

### Build System

-   reactstrap 버전업 ([3b3556d](https://github.com/goorm-dev/gds/commit/3b3556dffadc8519da9c39521ce58747aab68a86))
-   reactstrap 버전업 8.9.0 -> 8.10.1 ([d0bd29b](https://github.com/goorm-dev/gds/commit/d0bd29b1ece02338f558ad1b3b9ed35d120fac91))
-   **reactstrap:** reactstrap 버전업 ([8c8f035](https://github.com/goorm-dev/gds/commit/8c8f03566a20df71b9292edb466c5a3536cbdc61))
-   **storybook:** typescript 5 버전업에 따른 스토리북 플러그인 추가 ([1e34cc3](https://github.com/goorm-dev/gds/commit/1e34cc364602ecb67faaccf3fa082f6df9b02879))
-   type-fest 의존성 추가 ([935d3fc](https://github.com/goorm-dev/gds/commit/935d3fc794217e5df3b32a310276111df6bddfed))
-   **type-fest:** 의존성 주입 위치 변경 ([c05a4e3](https://github.com/goorm-dev/gds/commit/c05a4e3e738c5dfc025710a2c50c2803d2c63021))
-   **typescript:** gds-components 타입스크립트 컴파일 트랜스포머 수정 ([b2dea64](https://github.com/goorm-dev/gds/commit/b2dea64b5ecb72ee9a9a1d5e5e35fabf389e2453))
-   **typescript:** Simplify 제거 ([36f7ef7](https://github.com/goorm-dev/gds/commit/36f7ef75758240f553be6bfea0e45747432ef4ee))
-   **typescript:** transformer에 Simplify 추가 ([74dac08](https://github.com/goorm-dev/gds/commit/74dac08582c507ef724dcc3656d5f1b0f9c02bc0))

### Bug Fix

-   **DashboardFrameNew:** Contents 패딩 구조 변경 ([2dce783](https://github.com/goorm-dev/gds/commit/2dce78380d89fbe9ab366a5afad1f2f4993bfb49))
-   **DropdownMenu:** props 타입 에러 수정 ([05af279](https://github.com/goorm-dev/gds/commit/05af279b98d76146b9fb22e0a138970b6452809e))
-   **Footer:** 타입 수정 ([e482343](https://github.com/goorm-dev/gds/commit/e482343a866e7d4765fd65f349cc5830f95335ea))
-   **gds-components:** 타입스크립트 트랜스포머에서 propTypes 이름 제대로 들어가도록 수정 ([a3f22ae](https://github.com/goorm-dev/gds/commit/a3f22ae4cd7e53379fc2e0e6b6d7de12900e594b))
-   **gds-gantt:** GanttViewModeControllerProps 타입 수정 ([066091e](https://github.com/goorm-dev/gds/commit/066091eb26d652775907638c10e858d75c5b6a9e))
-   **Input:** Input Props 타입 에러 수정 ([d7ce601](https://github.com/goorm-dev/gds/commit/d7ce601eeafb921c57713163d464190869bba771))
-   **Input:** InputProps 타입 수정 ([126c4da](https://github.com/goorm-dev/gds/commit/126c4daeb46e6852f5d9d483130b2ab4e15384e8))
-   **Input:** InputProps 타입에서 ref 제거 ([8dd6561](https://github.com/goorm-dev/gds/commit/8dd656189cc0acd586ffd168c378d504698eb0a1))
-   **Input:** reactstrap props 에러 수정 ([1fd2d74](https://github.com/goorm-dev/gds/commit/1fd2d745cab0fdb5cec6ba9e587168ba6c42dc97))
-   **SideNavLink:** 타입 에러 수정 ([87a5bf9](https://github.com/goorm-dev/gds/commit/87a5bf95beb9dbce6dbadd47b308752a1f7e9a10))
-   **UncontrolledButtonToggleGroup:** 컴파운드 컴포넌트 propTypes 선언 누락 추가 ([afae617](https://github.com/goorm-dev/gds/commit/afae61736b32986a39f4e38371e4b528884f71d4))
-   util 타입 .ts로 변경 ([ff581c1](https://github.com/goorm-dev/gds/commit/ff581c1dae4a7b54bb11990970288264e8e01be6))
-   코드리뷰 반영 ([a1364cd](https://github.com/goorm-dev/gds/commit/a1364cd81053750728d175cd367748981fac73a9))
-   코드리뷰 적용 ([4335ff9](https://github.com/goorm-dev/gds/commit/4335ff954e5a3737a29059af3949ee27f1a898b2))

### [1.31.1](https://github.com/goorm-dev/gds/compare/v1.31.0...v1.31.1) (2024-03-15)

### Bug Fix

-   **TextButton:** disabled 상태일때 hover 색상 제거 ([a792f04](https://github.com/goorm-dev/gds/commit/a792f04f7f614a462d841ca4bf4b42db26852424))

### New Features

-   **ButtonToggleGroup:** ResizeObserver 추가 ([#126](https://github.com/goorm-dev/gds/issues/126)) ([7027acf](https://github.com/goorm-dev/gds/commit/7027acf2d078c17be0ca75b0adbf72749d92e0db))
-   **goormstrap:** Pretendard 폰트 버전 업데이트, minified 버전으로 수정 ([f09c350](https://github.com/goorm-dev/gds/commit/f09c3507d444114102aaf312e7dfff31e8ab3a46))

## [1.31.0](https://github.com/goorm-dev/gds/compare/v1.30.0...v1.31.0) (2024-03-05)

### Bug Fix

-   **DashboardFrame:** Contents 패딩 구조 변경 반응형 처리 ([b615f6c](https://github.com/goorm-dev/gds/commit/b615f6c10ebbcf9271f4a35a2f6b4c9b02732faa))
-   **DashboardFrameNew:** Contents 패딩 구조 변경 ([4fc6fb6](https://github.com/goorm-dev/gds/commit/4fc6fb62e4ff637aae1a43bd58243da44e66e5b8))
-   **HScrollTable:** 타입 에러 제거를 위해 rest props 가져오는 방식 변경 ([746f467](https://github.com/goorm-dev/gds/commit/746f467c8ef1fcf7f0298c0258cb54112689127f))
-   **HScrollTable:** DOM element prop 관련 워닝 제거 ([c07ac2a](https://github.com/goorm-dev/gds/commit/c07ac2aab0d94066d06c4c3d1f42a707eb4fd837))

### New Features

-   edit icons ([#167](https://github.com/goorm-dev/gds/issues/167)) ([e071444](https://github.com/goorm-dev/gds/commit/e07144492197fd4fa0ed041eee3a812642be5fb6))
-   **Resources:** 새롭게 추가된 리소스 (BrandImages, OtherBrandImages) 추출을 위한 script 수정 및 S3 업로드 ([#161](https://github.com/goorm-dev/gds/issues/161)) ([1b60b20](https://github.com/goorm-dev/gds/commit/1b60b20526f01accaf9ae957ae83f36d94034719))

## [1.30.0](https://github.com/goorm-dev/gds/compare/v1.29.2...v1.30.0) (2024-01-25)

### New Features

-   **DatePicker:** locale 적용 안된 부분 적용 ([#158](https://github.com/goorm-dev/gds/issues/158)) ([fb4d581](https://github.com/goorm-dev/gds/commit/fb4d5811940de145295b31da20e11893077ebefe))
-   **Foundation:** 다크모드 resource 이미지 추가 및 icon과 resource 추출 로직 리팩토링 ([#142](https://github.com/goorm-dev/gds/issues/142)) ([17026c0](https://github.com/goorm-dev/gds/commit/17026c0333aa5b6d96ee072c167c8cc5c87f5833))
-   **Icon:** 아이콘 추가 ([#160](https://github.com/goorm-dev/gds/issues/160)) ([e334e8c](https://github.com/goorm-dev/gds/commit/e334e8cf502171b87f1a4e22d319e3d569996b83))
-   password resource image 추가 ([#159](https://github.com/goorm-dev/gds/issues/159)) ([2a34c07](https://github.com/goorm-dev/gds/commit/2a34c07c209cc7aabda19df2f1cf99d287863815))

### [1.29.2](https://github.com/goorm-dev/gds/compare/v1.29.1...v1.29.2) (2024-01-17)

### Bug Fix

-   **Button:** 아이콘반 있는 버튼일때 아이콘 정렬 깨지는 문제 해결 ([48509af](https://github.com/goorm-dev/gds/commit/48509af517419df9a079ebd9323efa222e5de704))

### [1.29.1](https://github.com/goorm-dev/gds/compare/v1.29.0...v1.29.1) (2024-01-16)

### Bug Fix

-   **Modal:** 타입 수정 ([8b39cdb](https://github.com/goorm-dev/gds/commit/8b39cdbea0aa4f4377469724b6ba2758b95fe1df))
-   **Modal:** 타입 수정 ([a98e0b5](https://github.com/goorm-dev/gds/commit/a98e0b5be0ee160e5e55566ade9cbc7375932b84))

## [1.29.0](https://github.com/goorm-dev/gds/compare/v1.28.0...v1.29.0) (2024-01-12)

### Bug Fix

-   **Input:** props 수정 및 eslint 오류나는 곳 수정 ([886f0d3](https://github.com/goorm-dev/gds/commit/886f0d36b13191aa97dfd27326e68e36e19b84cc))
-   **Input:** Reactstrap input의 props type 추가 ([c023cab](https://github.com/goorm-dev/gds/commit/c023cab84191a9dc958b73bb9016ea18a64e1a6e))

### New Features

-   **goormstrap:** dropdown darkmode 스타일 변경 ([a68e796](https://github.com/goorm-dev/gds/commit/a68e796c28deebecc70e4f6196593d3f9d0a68f3))
-   **goormstrap:** dropdown header, divider 스타일 변경 ([b2d7838](https://github.com/goorm-dev/gds/commit/b2d783808a0ff6264eab84e109c2f0f8f2217160))
-   **goormstrap:** dropdown-menu 스타일 변경 ([ba87763](https://github.com/goorm-dev/gds/commit/ba87763fc777a8acc7ed014c903b864394f54b0d))

## [1.28.0](https://github.com/goorm-dev/gds/compare/v1.27.1...v1.28.0) (2024-01-05)

### New Features

-   **Icons:** basic, symbol, stack Icon 추가 및 수정 ([#154](https://github.com/goorm-dev/gds/issues/154)) ([bb64227](https://github.com/goorm-dev/gds/commit/bb6422785579ab0e6d3671c774b4f7d8379410e0))

### [1.27.1](https://github.com/goorm-dev/gds/compare/v1.27.0...v1.27.1) (2023-12-29)

### Bug Fix

-   **gds-components:** UserAvatarGroup 마지막 아바타 너비 수정, 수직 가운데 정렬 ([83c63e0](https://github.com/goorm-dev/gds/commit/83c63e0d5d459484d2175b466c3cd25a5e7d7117))
-   **gds-components:** UserAvatarGroup z-index 이슈 ([50177d1](https://github.com/goorm-dev/gds/commit/50177d1281abfc0e7fdff1f2d86f51e9014f5a55))

### Other

-   **gds-components:** cx => cn 네이밍 컨벤션 적용 ([0593e7b](https://github.com/goorm-dev/gds/commit/0593e7ba024ba0a77217613e41d6734dc85a89b2))

## [1.27.0](https://github.com/goorm-dev/gds/compare/v1.26.4...v1.27.0) (2023-12-28)

### Documentation

-   **gantt:** GanttBarPeriodSetRow 설명 추가 ([7485a57](https://github.com/goorm-dev/gds/commit/7485a57e49b7b55e569c5735e636e55b5c307c62))

### Bug Fix

-   **gantt:** GanttBarModifyingContextType 수정 ([8bdd1d5](https://github.com/goorm-dev/gds/commit/8bdd1d5263a768a84d72c790490fa84c94cf27ad))
-   **gantt:** GanttBarPeriodSetRow 잘못된 dayjs unit type 수정 ([85ebc60](https://github.com/goorm-dev/gds/commit/85ebc60e8ac0cebd8b2124e98d6e497ee7826074))
-   **gantt:** GanttBarPeriodSetRow button type button 추가 ([029c3e1](https://github.com/goorm-dev/gds/commit/029c3e194df8ee63df720bd1284595fa0bd25bf9))
-   **gantt:** GanttOptionsContext default value 수정 ([cc1e3f4](https://github.com/goorm-dev/gds/commit/cc1e3f4842967ff609471038f7dfde80e87f91f1))
-   **gantt:** initial viewMode가 year일 경우 깨지는 이슈 ([8deffa4](https://github.com/goorm-dev/gds/commit/8deffa42a59eefa1b752d41c9a0f7f89aac7a3e7))
-   **gantt:** totalDateRange가 unit을 기준으로 결정되도록 수정 ([8ae3ccd](https://github.com/goorm-dev/gds/commit/8ae3ccd9b349550c70c2f7638fa00190774a055a))
-   **gantt:** viewMode year에서 resize constraint 일단위로 변경 ([8423ea0](https://github.com/goorm-dev/gds/commit/8423ea05ee9468e6fb5b00230a042b24d9212999))

### Other

-   **gantt:** 미사용 코드 제거 ([59b72ad](https://github.com/goorm-dev/gds/commit/59b72ad5a71de90c35c4aacb9f466d6a12cb7355))
-   **gantt:** console log 제거 ([c6b1ddd](https://github.com/goorm-dev/gds/commit/c6b1dddd50442555d76d5e8a4d36241975bfe025))
-   **gantt:** draggability 오타 수정 ([57e0339](https://github.com/goorm-dev/gds/commit/57e0339323f44a48a8c4d66a138570f3615e99be))
-   **gds-gantt:** dragAbility 용어 수정 ([029958a](https://github.com/goorm-dev/gds/commit/029958a9f65784137c1081399593aab69b59ee3a))
-   **gds-gantt:** px 사용을 rem으로 수정 ([4295394](https://github.com/goorm-dev/gds/commit/429539480d53fc3d33190979015ec97418020516))

### New Features

-   **gantt:** 기간이 없는 경우 대응 ([1b9e084](https://github.com/goorm-dev/gds/commit/1b9e0848c38670d7617fa5c3cba9bb8476699267))
-   **gantt:** 기간이 없는 경우 새로운 기간 set 기능 추가 ([9ad4ac0](https://github.com/goorm-dev/gds/commit/9ad4ac07b57ae8f5e6619fa008521b48861531f5))
-   **gantt:** 기간이 없는 task에 대한 옵션 설정 기능 추가 ([009ba34](https://github.com/goorm-dev/gds/commit/009ba34af5fad73477cc01aed6eb45e547fd4df0))
-   **gantt:** 배경색 변경 ([4f7c9b9](https://github.com/goorm-dev/gds/commit/4f7c9b958ed152c38b963fdf224e83e77289857a))
-   **gantt:** 사용하지 않는 context 제거 ([a84129f](https://github.com/goorm-dev/gds/commit/a84129f6a3d55e74f3fd4e3780db062377ffb927))
-   **gantt:** 시멘틱 토큰 사용 ([b5df0be](https://github.com/goorm-dev/gds/commit/b5df0be6cfdd1aa5a7f2fea9bd6c2098cdccb8f8))
-   **gantt:** default gantt bar hover 스타일 변경 ([e9a0c89](https://github.com/goorm-dev/gds/commit/e9a0c89cec0c3dcb1bb433764bc5c89e0bf43aac))
-   **gantt:** default gantt list item 하드코딩 컬러 변경 ([bc9c783](https://github.com/goorm-dev/gds/commit/bc9c7839cffd434d211f8e968d57344382fd1f28))
-   **gantt:** duration => period 용어 변경 ([421ddfd](https://github.com/goorm-dev/gds/commit/421ddfd994c7b22a62e87281bcfab67391de05f9))
-   **gantt:** GanttGridRow를 forwardRef로 변경 ([7a9d8a7](https://github.com/goorm-dev/gds/commit/7a9d8a79ca25c687eb6639eefd06ec546b3ccae4))
-   **gantt:** period set 관련 타입 export ([a941275](https://github.com/goorm-dev/gds/commit/a9412754fb49c54db0285188523179ee46b10a8e))
-   **gantt:** task가 없는 경우 빈 차트를 보여주는 기능 추가 ([ed66614](https://github.com/goorm-dev/gds/commit/ed66614301f208bfb5aefcc91c1e0a415c3ccf03))
-   **gantt:** useCurrentHoveringDate disable 옵션 추가 ([55bf519](https://github.com/goorm-dev/gds/commit/55bf519ef9ff2319a863f31e37afcecac5937301))
-   **gantt:** useCurrentHoveringDate가 정확한 날짜를 가리키도록 개선 ([d8fd46a](https://github.com/goorm-dev/gds/commit/d8fd46a58a04ecd8754f6a8fb2427c5078d4e433))
-   **gantt:** useHoverEvent 핸들러 타입 개선 ([36261c3](https://github.com/goorm-dev/gds/commit/36261c3f7286dd110cb46ac230c093450f013f11))
-   **gantt:** usePointerPosition 커스텀 훅 추가 ([a89644a](https://github.com/goorm-dev/gds/commit/a89644a2b0285ab4b99a5b2c555cdcf8af72a708))
-   **gantt:** viewMode year에서 일단위로 수정되도록 개선 ([50911d8](https://github.com/goorm-dev/gds/commit/50911d847780f8861364e340278af48256a47628))
-   **gds-gantt:** 인라인 스타일 => css 변수화 ([8849101](https://github.com/goorm-dev/gds/commit/88491011a4eb40053f9eeb44da8b3bd0f9f30d35))
-   **gds-gantt:** dayjs locale 사용해 요일 대응 ([03df607](https://github.com/goorm-dev/gds/commit/03df6074c2931b2e114b8492c53d5adae6602a0e))
-   **gds-gantt:** getValueBetween 엣지 케이스 핸들링 ([efcd501](https://github.com/goorm-dev/gds/commit/efcd50199cc399c11e37013320af02165616d6b9))
-   **gds-gantt:** showPeriodSetBar 옵션을 태스크별로 줄 수 있도록 개선 ([f1734a7](https://github.com/goorm-dev/gds/commit/f1734a7e2f023b384dcdbe5de9b707eaa13ae8e5))

### Code Refactoring

-   **constants:** getValueBetween 전역 유틸화 ([4a5d60a](https://github.com/goorm-dev/gds/commit/4a5d60ad6a5e08c8a912ecc6385e7e188f3b6e4d))
-   **gantt:** calculateChartOffset 유틸화 ([0291f95](https://github.com/goorm-dev/gds/commit/0291f95cb7c22d79ecf1f9213ea71f1ba14d0137))
-   **gantt:** calculateChartOffset param 네이밍 변경 ([6e1b222](https://github.com/goorm-dev/gds/commit/6e1b222c51e9badd392a9c5833f9cdc79b03d004))
-   **gantt:** context type 네이밍 변경 ([7b57f46](https://github.com/goorm-dev/gds/commit/7b57f46b596190af5956c541110d05b55b9cafb0))
-   **gantt:** GanttBackground 파일 분리 ([80628cc](https://github.com/goorm-dev/gds/commit/80628cc68aa012e049c5680a5861b91736e81402))
-   **gantt:** GanttGridHeader 파일 분리 ([f6d3a48](https://github.com/goorm-dev/gds/commit/f6d3a48fcee58701816e43a6cff5e0638cddaad2))
-   **gantt:** GanttGridInner 컴포넌트 파일 분리 ([7c272ce](https://github.com/goorm-dev/gds/commit/7c272ce97e3c45a7feab1d721f2caf28ca3a5386))
-   **gantt:** getValueBetween 유틸화 ([7fdf70f](https://github.com/goorm-dev/gds/commit/7fdf70f0cd6fb5611eda48561afe89bab2160be2))
-   **gantt:** TimelineArrowButton 파일 분리 ([c5d274d](https://github.com/goorm-dev/gds/commit/c5d274dd79b86401550712dc77995e6a35ee0975))
-   **gantt:** useCurrentHoveringDate 훅 분리 ([46cb267](https://github.com/goorm-dev/gds/commit/46cb2676916bccffd9f4bb321c3ab44c0c0729d0))
-   **gantt:** useViewport에서 calculateChartOffset 유틸 사용 ([307ad52](https://github.com/goorm-dev/gds/commit/307ad529801cd1d8aa2adb856e9a59d274d850ec))
-   **gds-gantt:** 도메인 hook 디렉터리 변경 ([9e16ae5](https://github.com/goorm-dev/gds/commit/9e16ae574452c97aa4de15dc7c51f6aebbd1e9de))
-   **gds-gantt:** 추상화된 hook 디렉터리 변경 ([58e4736](https://github.com/goorm-dev/gds/commit/58e47360a850df41dd3b259a9e2e8a678681e505))
-   **gds-gantt:** 추상화된 util 전역 유틸로 이동 ([5657d6e](https://github.com/goorm-dev/gds/commit/5657d6e8505c4fd9df92061bcbbb3256e145ab81))
-   **gds-gantt:** 추상화된 utils 디렉터리 변경 ([3eaad34](https://github.com/goorm-dev/gds/commit/3eaad342e57296992eb322fcd5439a50c6c7c4ab))

### [1.26.4](https://github.com/goorm-dev/gds/compare/v1.26.3...v1.26.4) (2023-12-22)

### Bug Fix

-   **SideNav:** background color 제거 ([68ffdd2](https://github.com/goorm-dev/gds/commit/68ffdd21a6dd4dc9a3f16f8c289ec74d5e70fbc1))

### [1.26.3](https://github.com/goorm-dev/gds/compare/v1.26.2...v1.26.3) (2023-12-21)

### Styling

-   **Color:** semantic color token 추가 및 수정 ([#151](https://github.com/goorm-dev/gds/issues/151)) ([cde5987](https://github.com/goorm-dev/gds/commit/cde59870391b05cffcaafb2027246115b66633f9))

### [1.26.2](https://github.com/goorm-dev/gds/compare/v1.27.0...v1.26.2) (2023-12-18)

**Note:** Version bump only for package gds

### [1.26.1](https://github.com/goorm-dev/gds/compare/v1.26.0...v1.26.1) (2023-12-12)

### New Features

-   **build:** GIT 화이트 라벨링을 위한 inject 스크립트 수정 ([#150](https://github.com/goorm-dev/gds/issues/150)) ([fb8b5ee](https://github.com/goorm-dev/gds/commit/fb8b5ee2bc8526ff8ca7bed05d534949018953cc))

## [1.26.0](https://github.com/goorm-dev/gds/compare/v1.25.3...v1.26.0) (2023-12-05)

### Build System

-   **workflow:** gds-goormstrap 테스트 배포 버저닝 수정 ([53e5454](https://github.com/goorm-dev/gds/commit/53e545440c257da5bf44bdf40793ee2eb36e50a1))

### New Features

-   **Icons:** CampIcon, SchoolIcon 추가 ([#148](https://github.com/goorm-dev/gds/issues/148)) ([1c67dd6](https://github.com/goorm-dev/gds/commit/1c67dd61eaa2f291913e46092231b72a7a9b7dbc))

### [1.25.3](https://github.com/goorm-dev/gds/compare/v1.25.2...v1.25.3) (2023-12-04)

### Bug Fix

-   **goormstrap:** button-link 스타일 수정 ([2d60610](https://github.com/goorm-dev/gds/commit/2d606103a0519a5bc28d6bf9039bbb4e9ebf8cd0))

### Build System

-   **workflow:** goormstrap alpha 배포 후 배포 링크 echo ([0d35200](https://github.com/goorm-dev/gds/commit/0d3520085f34df1793d3ac274c3a5fcd311bb960))
-   **workflow:** goormstrap을 직접 deploy 할 수 있는 워크플로우 추가 ([7383c5b](https://github.com/goorm-dev/gds/commit/7383c5b1bb2c496a0e2fff6643bbf03995fa5881))
-   **workflow:** goormstrap을 직접 deploy 할 수 있는 워크플로우 추가 ([6a6ecf5](https://github.com/goorm-dev/gds/commit/6a6ecf58fa875846e9ed5200707d4d58d12288f1))

### [1.25.2](https://github.com/goorm-dev/gds/compare/v1.25.1...v1.25.2) (2023-11-30)

### Other

-   **Icons:** PannelOpenIcon 아이콘 추가 ([9c92d5a](https://github.com/goorm-dev/gds/commit/9c92d5af7e9326285934e01ac13c0d4f2642149c))

### [1.25.1](https://github.com/goorm-dev/gds/compare/v1.25.0...v1.25.1) (2023-11-29)

### Bug Fix

-   footer policy type 제거 ([8dcef0d](https://github.com/goorm-dev/gds/commit/8dcef0dcdf263105fe676faf0e86aff577b690f1))
-   **storyobook:** storybook의 tsconfig 수정 ([#144](https://github.com/goorm-dev/gds/issues/144)) ([d60345a](https://github.com/goorm-dev/gds/commit/d60345a6b5fea522f3366db0cd0fd9b84f397f63))

## [1.25.0](https://github.com/goorm-dev/gds/compare/v1.24.1...v1.25.0) (2023-11-29)

### Bug Fix

-   DashboardFrame.Content 컴포넌트 토큰 값 수정 ([#140](https://github.com/goorm-dev/gds/issues/140)) ([6025ce3](https://github.com/goorm-dev/gds/commit/6025ce38c980fb2ae080bb211f1909df8c11f452))

### New Features

-   **Footer:** footer item inline style props 추가 ([#143](https://github.com/goorm-dev/gds/issues/143)) ([9092385](https://github.com/goorm-dev/gds/commit/90923853f23859b364383da15c23c7792e0944c0))

### [1.24.1](https://github.com/goorm-dev/gds/compare/v1.24.0...v1.24.1) (2023-11-22)

### Bug Fix

-   **workflow:** goormstrap 배포 경로 변경 ([bf0706c](https://github.com/goorm-dev/gds/commit/bf0706cf8fd851f8a9a1af73aa2c3b2fa6dc4372))
-   **workflow:** goormstrap 배포 트리거 변경 ([314a24c](https://github.com/goorm-dev/gds/commit/314a24cc738aea5f9d5ef8d53470f9db02135e00))

## [1.24.0](https://github.com/goorm-dev/gds/compare/v1.23.6...v1.24.0) (2023-11-22)

### Build System

-   **workflow:** 스토리북 빌드용 워크플로우 정의 ([89f9ae9](https://github.com/goorm-dev/gds/commit/89f9ae9fa321c8df721339eed9ccecb7842f0f03))

### Bug Fix

-   **storybook:** DocsContainer가 static file을 불러오도록 변경 ([1ff6b96](https://github.com/goorm-dev/gds/commit/1ff6b963ed1ceb435583e1e2db1f76a3b2fc565f))
-   **storybook:** static 파일 경로 명시 ([7dedba5](https://github.com/goorm-dev/gds/commit/7dedba53b296348ea2be291b6bd12488a969f8e4))
-   **storybook:** yarn dev 스크립트 이슈 수정 ([7363f9f](https://github.com/goorm-dev/gds/commit/7363f9f22d7540684214b989d5a10a4ab03de0f2))

### New Features

-   **Icon:** discord, calculator 아이콘 추가 ([#141](https://github.com/goorm-dev/gds/issues/141)) ([3a844b7](https://github.com/goorm-dev/gds/commit/3a844b724b0005c75abbaaf661704a6eb38f6fbf))

### [1.23.6](https://github.com/goorm-dev/gds/compare/v1.23.5...v1.23.6) (2023-11-20)

### Bug Fix

-   **workflow:** gds-goormstrap 빌드 스크립트 변경 ([de139de](https://github.com/goorm-dev/gds/commit/de139de6fa8de211283d4c5e357c84e53f8fccd8))
-   **workflow:** goormstrap diff 계산 => 워크플로우 실행 조건 제한으로 변경 ([69490c8](https://github.com/goorm-dev/gds/commit/69490c8f5304cbec0ed5477d6851f0f174917100))

### Other

-   **workflow:** release yml 인덴트 수정 ([95afa49](https://github.com/goorm-dev/gds/commit/95afa49e7b8329fb129981d570111de4d0a1b0b6))

### [1.23.5](https://github.com/goorm-dev/gds/compare/v1.23.4...v1.23.5) (2023-11-20)

### Code Refactoring

-   **goormstrap:** 프로젝트 네이밍 변경 및 npm 패키지 생성 ([dc1064a](https://github.com/goorm-dev/gds/commit/dc1064aa6aa5767613d30979590a0d64cfa24c83))

### Documentation

-   **goormstrap:** HMR 주석 ([bd15b09](https://github.com/goorm-dev/gds/commit/bd15b099866cef066b12b96763442d2cf49642ea))
-   **goormstrap:** README 추가 ([96b464b](https://github.com/goorm-dev/gds/commit/96b464bf8f55b05bd0e87bc8277ed613b4fe2795))

### New Features

-   **build:** goormstrap S3 배포 조건 변경 ([72b5c6d](https://github.com/goorm-dev/gds/commit/72b5c6d51b50181e4061ab0c67c6076d2f72b4bf))
-   **goormstrap:** 4.34.2 마이그레이션 ([4ce7880](https://github.com/goorm-dev/gds/commit/4ce7880d4ed8147a93c6b5bda3375441a81abe43))
-   **goormstrap:** 스타일 세팅 ([8ff7748](https://github.com/goorm-dev/gds/commit/8ff77482177d6e6c800028b93f043cb546ef3ab6))
-   **goormstrap:** banner 연도 변경 ([f369653](https://github.com/goorm-dev/gds/commit/f369653a3a45ec8ad4a88def487c6ef4645ad3ee))
-   **goormstrap:** storybook에서 4.34.2 적용 ([a447c61](https://github.com/goorm-dev/gds/commit/a447c618d0d7eb6f19bcb9cc55f2f27d74e4d904))

### Bug Fix

-   **build:** goormstrap 워크플로우 diff 프로퍼티명 수정 ([ac18230](https://github.com/goorm-dev/gds/commit/ac1823033ffa3d923b1c4857f3e8d1ddb6cc0aa2))
-   **release:** 잘못된 구문 수정 ([a9bbb1d](https://github.com/goorm-dev/gds/commit/a9bbb1d1216be5180fd74b15109aaf859488e1e5))
-   **release:** indent 수정 ([c376169](https://github.com/goorm-dev/gds/commit/c376169a9681a045233abef1d5dc375b18ca4174))

### Other

-   **release:** whitespace 제거 ([cf1586c](https://github.com/goorm-dev/gds/commit/cf1586cd810cfd8afeae986ec2b727495ee03bbe))
-   **workflow:** goormstrap 워크플로우 indent 수정 ([89b0994](https://github.com/goorm-dev/gds/commit/89b0994883a05662e93d17af97b6b3e73df95dcb))

### Build System

-   **dev:** 스크립트 변경 ([fdb2d94](https://github.com/goorm-dev/gds/commit/fdb2d94ddc9569758020f7377648f3bd0b20477c))
-   **goormstrap:** 버전 수정 ([b840432](https://github.com/goorm-dev/gds/commit/b8404320b836641dbf3ced663b37abdccd89fc5b))
-   **goormstrap:** 빌드 스크립트 lerna 사용토록 변경 ([36ac194](https://github.com/goorm-dev/gds/commit/36ac1947695128c0c2f97120d2d3ffc2627a69d6))
-   **goormstrap:** 워크플로우 오류 수정 ([58b874c](https://github.com/goorm-dev/gds/commit/58b874c7873ca5b17236621c994fbff52d9ec65d))
-   **goormstrap:** 현재 패키지 버전 확인용 step 추가 ([e263a40](https://github.com/goorm-dev/gds/commit/e263a40dd8a29874fc8239c56d2632831a057812))
-   **goormstrap:** Goormstrap 개발환경 구축 ([13976fb](https://github.com/goorm-dev/gds/commit/13976fb5441c15d52b641b26adbee723a054a8d5))
-   **goormstrap:** Goormstrap 릴리즈 워크플로우 ([939ee58](https://github.com/goorm-dev/gds/commit/939ee5885d55745ad3e3ead3a8b16b99a6073977))
-   **goormstrap:** private 패키지로 설정 ([79e43f6](https://github.com/goorm-dev/gds/commit/79e43f6e3e7890527c98ffda2b1f095cf8330655))
-   **goormstrap:** production 빌드 경로 오류 수정 ([ce1b1ff](https://github.com/goorm-dev/gds/commit/ce1b1ff0fd7fb6f4a61799cecd6e1e063aa557cb))
-   **goormstrap:** workflow 환경 우분투 버전 명시 ([be3170e](https://github.com/goorm-dev/gds/commit/be3170eba15b3272582c5f2ff51cfa6745a9e3c5))
-   **husky:** pre-push goormstrap 스토리북 스타일 생성 훅 추가 ([b9703d4](https://github.com/goorm-dev/gds/commit/b9703d41aff3dfd598d45fc01f812c0b4a01c72b))
-   **package:** 스토리북 빌드시 goormstrap도 빌드하도록 스크립트 변경 ([eea21a5](https://github.com/goorm-dev/gds/commit/eea21a501ac534b94a2912da778efd9ace212112))
-   **package:** dev 스크립트에서 구름스트랩 생성 순서 변경 ([11b473a](https://github.com/goorm-dev/gds/commit/11b473adf81b754b29e482b78963d8cbc1f4dbc9))
-   **release:** 워크플로우 수정 ([bbcae0e](https://github.com/goorm-dev/gds/commit/bbcae0ea459a065be3ed8f5a8d0f309143264bf0))
-   **release:** goormstrap diff 관련 워크플로우 제거 ([0816dd2](https://github.com/goorm-dev/gds/commit/0816dd2e9ab6d537cc99dd42fcaf9a8a0c028864))
-   **release:** goormstrap diff는 무시하도록 수정 ([f5a3638](https://github.com/goorm-dev/gds/commit/f5a36384a7866bf60a13d53785618a3db6e6b251))
-   **workflow:** goormstrap s3 경로 수정 ([5172b69](https://github.com/goorm-dev/gds/commit/5172b69f1727c908bacc4f2213a2184a2ab15be5))

### [1.23.4](https://github.com/goorm-dev/gds/compare/v1.23.3...v1.23.4) (2023-11-17)

### Bug Fix

-   **SidePanel:** 헤더 close icon 간격 수정 ([f0576e7](https://github.com/goorm-dev/gds/commit/f0576e70cfca3e4a4615c2f2d5f3232a87142ca0))

### [1.23.3](https://github.com/goorm-dev/gds/compare/v1.23.2...v1.23.3) (2023-11-14)

**Note:** Version bump only for package gds

### [1.23.2](https://github.com/goorm-dev/gds/compare/v1.23.1...v1.23.2) (2023-11-14)

### Bug Fix

-   **Badge:** hover 관련 코드 제거 ([863a21c](https://github.com/goorm-dev/gds/commit/863a21c778712c732b3f962f43fa8b57f9fcc80d))
-   **Badge:** info 색상, 타입 추가 ([264960a](https://github.com/goorm-dev/gds/commit/264960a62402fb12f342f86947859368b99a1531))

### [1.23.1](https://github.com/goorm-dev/gds/compare/v1.23.0...v1.23.1) (2023-11-13)

### Bug Fix

-   **gantt:** dependency 이슈 ([d1ba5d6](https://github.com/goorm-dev/gds/commit/d1ba5d64e2e822d3452f589993176ff584fcaeab))

## [1.23.0](https://github.com/goorm-dev/gds/compare/v1.22.1...v1.23.0) (2023-11-13)

### Build System

-   **eslint:** ts, tsx에서 prop-types rule off ([cc3e1bf](https://github.com/goorm-dev/gds/commit/cc3e1bf4a8632242a4c0c031e968ae6b2397023c))
-   **gantt:** 디펜던시 변경 ([3dd7b19](https://github.com/goorm-dev/gds/commit/3dd7b190858f8c09468abfdcfef513943fbac9e2))
-   **gantt:** 버전 1.15.0으로 변경 ([59c3753](https://github.com/goorm-dev/gds/commit/59c3753c24090bf0d6fdbc1417775c928a1b13f6))
-   **gantt:** 버전 업그레이드 ([cffd329](https://github.com/goorm-dev/gds/commit/cffd32969467ba5a9fe02e75cc33c9845e7b58d3))
-   **gantt:** dayjs 버전 변경 ([a3c3a0d](https://github.com/goorm-dev/gds/commit/a3c3a0dc113fabc9e6caf06bbae040bdf130c8ef))
-   **gantt:** gantt 빌드시 ts resolve 이슈 ([65319c2](https://github.com/goorm-dev/gds/commit/65319c265758c2a2c249f69b31df53231be5258d))
-   **gantt:** gds icons peerdeps로 변경 ([23396ea](https://github.com/goorm-dev/gds/commit/23396ea674810a19b148d4111659a03c8eee8394))
-   **gantt:** ts config 변경 및 ts plugin 추가 ([7cf25d0](https://github.com/goorm-dev/gds/commit/7cf25d05b8d068b9aea0d68cef527516cefe3c1d))

### Styling

-   **gantt:** cn 사용 스타일 통일 ([e26ae64](https://github.com/goorm-dev/gds/commit/e26ae64297fc77f23c5dcc74b6629d3bb2cf4f32))

### Code Refactoring

-   **gantt:** 인라인 핸들러 제거 ([ffeb8ff](https://github.com/goorm-dev/gds/commit/ffeb8ffd04922668491d1a62810d0de968e71f9a))
-   **gantt:** 필요없는 context 제거 ([759db9a](https://github.com/goorm-dev/gds/commit/759db9a6d519d39ef0a937ca4d5c668e060738a8))
-   **gantt:** bar positioner 최적화 ([e0c14d0](https://github.com/goorm-dev/gds/commit/e0c14d04e7e63bb68d83179167cc4ae007a1c27c))
-   **gantt:** context 타입 분리 ([4863013](https://github.com/goorm-dev/gds/commit/48630134e1b10ac3610bb72b782a9a2dee0ea0b2))
-   **gantt:** controller context를 custom event로 변경 ([d598253](https://github.com/goorm-dev/gds/commit/d5982533ef02541007a7d72633ddb859e4835542))
-   **gantt:** controller별로 context 분리 ([ce5f30d](https://github.com/goorm-dev/gds/commit/ce5f30d3ca9d050a842acb2d8e0789ca742ee5b6))
-   **gantt:** date type 로직 분리 ([3a751a8](https://github.com/goorm-dev/gds/commit/3a751a80f225bea2b0ef42f2d5b448dceb3438c7))
-   **gantt:** drag handle 컴포넌트 분리 ([cbdc66a](https://github.com/goorm-dev/gds/commit/cbdc66a3072da636a475d09fb2db384cdb239986))
-   **gantt:** dragHandle 네이밍 변경 ([e3181ef](https://github.com/goorm-dev/gds/commit/e3181ef3f1119ccd99ff6fbfc079e3ecf29a757c))
-   **gantt:** firstRowData 계산 로직 개선 ([dc88ef5](https://github.com/goorm-dev/gds/commit/dc88ef53656529a623893ffbf3fed45f8280b731))
-   **gantt:** firstRowData 메모아이즈 ([f2dd204](https://github.com/goorm-dev/gds/commit/f2dd204bbaafbdb8828c9e90419d4de5b50c3742))
-   **gantt:** gantt bar hander provider를 event 기반으로 변경 ([8a466a8](https://github.com/goorm-dev/gds/commit/8a466a8efa6f013ccc842fda1aedc4de4518e58c))
-   **gantt:** gantt list item 컴포넌트 분리 ([acdf42a](https://github.com/goorm-dev/gds/commit/acdf42aded0c2db1cffe17371171348714c8b7c5))
-   **gantt:** ganttbar offset provider 제거 ([3d880a7](https://github.com/goorm-dev/gds/commit/3d880a74972fb114ace7fc43eb118efdf2cd6b7f))
-   **gantt:** ganttbar positioner 구조 변경 ([22e285a](https://github.com/goorm-dev/gds/commit/22e285a1d36918a538c331feb1492db9939d0e6d))
-   **gantt:** GanttBarScrollToHandler 네이밍 변경 ([41e5535](https://github.com/goorm-dev/gds/commit/41e55359b1a3b09d451bda9c7cb5f8b3ced6ffb0))
-   **gantt:** ganttgrid list 접히는 시간 상수화 ([b562fdd](https://github.com/goorm-dev/gds/commit/b562fddba4dfc364a7fee174648db05955f07cf4))
-   **gantt:** header 컴포넌트 분리 ([a7c794a](https://github.com/goorm-dev/gds/commit/a7c794a12829789fae45f3053cbdd77d95efa62f))
-   **gantt:** import문 정리, controller provider 폴더구조 변경 ([84a021c](https://github.com/goorm-dev/gds/commit/84a021c1899869cf7acafd317795fe026ef08b43))
-   **gantt:** label format 함수로 분리 ([eda1857](https://github.com/goorm-dev/gds/commit/eda18575d92acbf2e2372bb5f7f95b3c96d97a4d))
-   **gantt:** options prop name 변경 ([61887aa](https://github.com/goorm-dev/gds/commit/61887aa8b69183183d6dd058b356ff0dbd6a61c0))
-   **gantt:** positioner 불필요한 인라인 스타일 제거 ([23356a2](https://github.com/goorm-dev/gds/commit/23356a23edffdb0451c83814b4fce8059a69ff7e))
-   **gantt:** scroll provider 네이밍 변경 ([b576eb4](https://github.com/goorm-dev/gds/commit/b576eb4314030abec5728983e943dca6247c1a85))
-   **gantt:** setup 코드 분리 ([bcc2445](https://github.com/goorm-dev/gds/commit/bcc24458fa3fd7a700d4380b0c5d2ded45bee8f7))
-   **gantt:** setupOptions 로직 변경 ([8fd28fe](https://github.com/goorm-dev/gds/commit/8fd28fe9f5f1797361468feefc450ba1d431c1af))
-   **gantt:** TaskBar => GanttBar 네이밍 변경 ([179bb50](https://github.com/goorm-dev/gds/commit/179bb500f8ad869a24a77edd9d0277a8d10825ed))
-   **gantt:** tasks setup 로직 결합 분리 ([d3237c3](https://github.com/goorm-dev/gds/commit/d3237c301e983e6a5926ec884e7ac1106e04d224))
-   **gantt:** timeline arrow button 파일 분리 ([052b1a8](https://github.com/goorm-dev/gds/commit/052b1a8bcc40950247711f8f3d2b7348f049c545))
-   **gantt:** timeline arrow button 폴더 위치 변경 ([5e7d2dc](https://github.com/goorm-dev/gds/commit/5e7d2dc3c0c800a7145105a70213df92bb6da67c))
-   **gantt:** type 선언 정리 ([e09ee78](https://github.com/goorm-dev/gds/commit/e09ee78c23932e128d5aee1790af42d5d6f7b4d2))
-   **gantt:** type import 정리 ([0be5214](https://github.com/goorm-dev/gds/commit/0be5214122fb21e88a179a4e9acc65f807bd1da0))
-   **gantt:** viewMode type 사용 ([4efc46c](https://github.com/goorm-dev/gds/commit/4efc46c1ed251288f510ff7af31172b819d839c9))

### Other

-   **carousel:** 오타 수정 ([aae8123](https://github.com/goorm-dev/gds/commit/aae812314e0d79d574cb7fb814769073e731db4d))
-   **gantt:** 변수명 변경 ([cfb9b07](https://github.com/goorm-dev/gds/commit/cfb9b07b57acd626b1bbb1301c9db76d515e2f30))
-   **gantt:** 스타일 컨벤션에 맞게 수정 ([4706a76](https://github.com/goorm-dev/gds/commit/4706a76db6a80082cbe1ac006a5efa0e26d5ea86))
-   **gantt:** 스토리 추가 (임시) ([53a820d](https://github.com/goorm-dev/gds/commit/53a820d39ce247bc5be303524e11b54017f8ab24))
-   **gantt:** 스토리북 코드 정리 ([eb28fd9](https://github.com/goorm-dev/gds/commit/eb28fd929ba7e6c5819314809ea377a43fab8363))
-   **gantt:** 오타 수정 ([ff892bb](https://github.com/goorm-dev/gds/commit/ff892bbc42143303716082f0dc0a6c3978bb6cca))
-   **gantt:** 오타 수정 ([cdc17da](https://github.com/goorm-dev/gds/commit/cdc17daa295f61b7dbb2da326ff444fa80767e21))
-   **gantt:** 주석 오타 수정 ([feb44cd](https://github.com/goorm-dev/gds/commit/feb44cd3652974ed5a8f75a221c4171bf72f4ca3))
-   **gantt:** 필요 없는 파일 제거 ([4ffdd7b](https://github.com/goorm-dev/gds/commit/4ffdd7baff325a29bc33d6744a1d75c5c6639afa))
-   **gantt:** 필요없는 스타일 제거 ([a29b613](https://github.com/goorm-dev/gds/commit/a29b6139d57aefd48d99d371ba7b01a6b43f5025))
-   **gantt:** 필요없는 prop 제거 ([67677e7](https://github.com/goorm-dev/gds/commit/67677e7f478f9bfff6558b589bd680b20efaf807))
-   **gantt:** 함수명 변경 ([9ae81e0](https://github.com/goorm-dev/gds/commit/9ae81e092198ad2572b36c8e3f7ae6b9e2b143b1))
-   **gantt:** console.log 삭제 ([612b59e](https://github.com/goorm-dev/gds/commit/612b59ecd2b8e5ffe466ca70cfdc52565aa871c1))
-   **gantt:** gantt bar memoize ([894e0b5](https://github.com/goorm-dev/gds/commit/894e0b5793be9f68226e82252ae08c6e88c29dea))
-   **gantt:** GanttBar 타입 개선 ([8cba3ac](https://github.com/goorm-dev/gds/commit/8cba3aceb096446facc078de8434b40b60907a76))
-   **gantt:** GanttList border 수정 ([24198fa](https://github.com/goorm-dev/gds/commit/24198fac2e1a87024c374d05a526119d4004bf26))
-   **gantt:** react hook import 방법 통일 ([b5dd050](https://github.com/goorm-dev/gds/commit/b5dd050c0489e6cb31e016b0e81fb0ce663e0753))

### Bug Fix

-   **gantt:** 간트 바깥에서 간트 바 hover가 가능한 이슈 ([878c7fe](https://github.com/goorm-dev/gds/commit/878c7fe3989b4ed93bdc2156d837654e2f6f3046))
-   **gantt:** 간트바 처음, 끝 이동 버튼이 간트바에 간섭하는 이슈 ([57c56d7](https://github.com/goorm-dev/gds/commit/57c56d7f393615835d783fcc47baa1f370df095e))
-   **gantt:** 그리드 재계산시 todayindex 재계산 ([287d8aa](https://github.com/goorm-dev/gds/commit/287d8aa2ece379da6aaae795e0fc33edec7ee971))
-   **gantt:** 그리드가 부모를 채우지 않는 이슈 ([bbafeac](https://github.com/goorm-dev/gds/commit/bbafeac1ea5fa7cb0f50b899bc1b9ea54d9d036c))
-   **gantt:** 기간이 짧을 경우 재계산 로직이 접혔을 때는 동작하지 않는 이슈 ([3fe6262](https://github.com/goorm-dev/gds/commit/3fe6262d227f73e81a08f2350667ec4433e6182e))
-   **gantt:** 누락 스타일 추가 ([993c663](https://github.com/goorm-dev/gds/commit/993c663e132c2577f30efe8fae5fa8eccc66ac65))
-   **gantt:** 드래그가 끝나도 이어지던 이슈 ([26113d6](https://github.com/goorm-dev/gds/commit/26113d61e859c666c8c20a3bbb1508d3f39b9520))
-   **gantt:** 마지막 줄에 padding bottom 안들어가던 이슈 ([1b7e704](https://github.com/goorm-dev/gds/commit/1b7e704250032240fc80694b7d6eddc16c48d662))
-   **gantt:** 서버환경 여부 확인 로직 추가 ([89d2b06](https://github.com/goorm-dev/gds/commit/89d2b0666b74e68b787ad37e40c12cbd34608bae))
-   **gantt:** 시간 단위 토글시 올 해 뱃지 안나오는 이슈 ([4151764](https://github.com/goorm-dev/gds/commit/41517641214b891c082c4b740bc74598a385ac8f))
-   **gantt:** 오늘의 위치를 찾는 로직 수정 ([6a039dd](https://github.com/goorm-dev/gds/commit/6a039dd9280cc9e9ac0fdd032e550eeffd569078))
-   **gantt:** 접고 펼칠 때 innerWrapper Width 오계산 이슈 ([5662a9c](https://github.com/goorm-dev/gds/commit/5662a9cc9c4ee3cabbda1ac139fe05c522dec709))
-   **gantt:** 주말 배경색 수정 ([e5ad5a9](https://github.com/goorm-dev/gds/commit/e5ad5a9b56cf6936f5c7bf729db2735f6c0a458e))
-   **gantt:** 주말일 경우 옅은색 ([ab0645d](https://github.com/goorm-dev/gds/commit/ab0645d2d2b1d7c79a9f9aeea9061dbaf3e951a5))
-   **gantt:** 차트를 넘어갈 경우도 제대로 표현 ([5ecdde0](https://github.com/goorm-dev/gds/commit/5ecdde0c6c9dc068cfa82dfbe92e2fb0b4126d3f))
-   **gantt:** 토글 패딩 수정 ([e84cfa0](https://github.com/goorm-dev/gds/commit/e84cfa05f3684d6e0b2d3361c348a909bea816b5))
-   **gantt:** 헤더 고정 ([3104e3d](https://github.com/goorm-dev/gds/commit/3104e3d82c7f93cec313c38d6f648f9c63c2ff79))
-   **gantt:** 헤더 영역 배경색 ([a17239c](https://github.com/goorm-dev/gds/commit/a17239cb42b29d6dd5cdd93e5f1d6467430733b7))
-   **gantt:** dayjs 커스텀 포멧 플러그인 추가 ([4fff03f](https://github.com/goorm-dev/gds/commit/4fff03f4590b56f6dc414784d2565ce2cee6225d))
-   **gantt:** default gantt bar 스타일 개선 ([6b285fe](https://github.com/goorm-dev/gds/commit/6b285fe57a8e0a4b9074e9086dead61180a1ba72))
-   **gantt:** Default Task Bar 텍스트 넘침 ([7f20a9c](https://github.com/goorm-dev/gds/commit/7f20a9c980afd99828c47f2b0c4a97782f6ef3fe))
-   **gantt:** dependency 수정 ([c7f588e](https://github.com/goorm-dev/gds/commit/c7f588ebd6c80bdae3cd5c848cec17db429f7e11))
-   **gantt:** deprecated sass style 변경 ([8ccb3f7](https://github.com/goorm-dev/gds/commit/8ccb3f76271b01aca89f89bee501aed729e03b29))
-   **gantt:** deps-array 빠진 부분 수정 ([5cf461d](https://github.com/goorm-dev/gds/commit/5cf461d8aba592a94b412168cb140274e275f115))
-   **gantt:** desc일 경우 버그 수정 ([f04fc4c](https://github.com/goorm-dev/gds/commit/f04fc4c9342b6a7887010463598dc6bd88523339))
-   **gantt:** diff일 경우 OpUnitType 수정 ([fdead54](https://github.com/goorm-dev/gds/commit/fdead549c613f5da1066a9b9fac117d6dc2234d7))
-   **gantt:** drag 불가능한 경우에도 클릭 동작 ([d345179](https://github.com/goorm-dev/gds/commit/d34517944cfa09283a5126199a67017f190195af))
-   **gantt:** full screen에서 빈 공간을 배경이 모두 채우지 않는 이슈 ([7387ca7](https://github.com/goorm-dev/gds/commit/7387ca7739f6ca1c619cc3f07d53eaf912fb65e9))
-   **gantt:** gantt list 닫힐 때 컨텍스트 갱신 ([698c97c](https://github.com/goorm-dev/gds/commit/698c97cd8c5393aae40e41669a982947d045b528))
-   **gantt:** gantt list toggle 너비 변경 ([747cd69](https://github.com/goorm-dev/gds/commit/747cd695ca23cf62e25566e658a526828681c814))
-   **gantt:** gantt list와 viewport 스크롤 싱크 ([98f5e02](https://github.com/goorm-dev/gds/commit/98f5e02fbb1482339ebdcc0ca88e607811f57120))
-   **gantt:** gantt options provider에 추가된 prop 추가 ([165943a](https://github.com/goorm-dev/gds/commit/165943aba316c293c95dd7f4b5d8e35406f81cdc))
-   **gantt:** gantt-header key issue ([82f8b1b](https://github.com/goorm-dev/gds/commit/82f8b1be995e44b69aef13b938dec0c24d46b4cc))
-   **gantt:** GanttList 닫을 때 재계산 ([c7755e6](https://github.com/goorm-dev/gds/commit/c7755e61f692df3f0c66dbffad0e277c5473a3c0))
-   **gantt:** GanttList text align 수정 ([f409013](https://github.com/goorm-dev/gds/commit/f40901310fec2d3184091c935fa224d310406935))
-   **gantt:** goormstrap 토큰 변경 대응 ([174ab3a](https://github.com/goorm-dev/gds/commit/174ab3a93414320afc2779a0d79abf1a64d580b3))
-   **gantt:** grid header 높이 수정 ([13b8ff6](https://github.com/goorm-dev/gds/commit/13b8ff6ca13f7717e7250a666458ebc1a5df7776))
-   **gantt:** GridHeader 스타일 수정 ([38059c2](https://github.com/goorm-dev/gds/commit/38059c2576717fa113c5c07b0e820eea8c04642c))
-   **gantt:** header 오늘 표시 막대 위치 수정 ([19ef379](https://github.com/goorm-dev/gds/commit/19ef3790cc93b27e7f9a9240afe0678ef471e064))
-   **gantt:** header 첫줄 overlay ([20b5d6a](https://github.com/goorm-dev/gds/commit/20b5d6adacebfacbba336cdfe21b47931039cd69))
-   **gantt:** header에 선택중인 날짜 표시 조건 변경 ([cbe2130](https://github.com/goorm-dev/gds/commit/cbe213029f0124a671edf1c080a113519ede9852))
-   **gantt:** hover state 업데이트 안되던 이슈 ([5abc73e](https://github.com/goorm-dev/gds/commit/5abc73e8263e6aeac013ac00d9853734e3f7b0f5))
-   **gantt:** infinite scroll이 안되는 이슈 ([4dbca8c](https://github.com/goorm-dev/gds/commit/4dbca8cd307c78a594afbdb17524591cb24c7ea9))
-   **gantt:** onDragEnd 실행중에도 수정이 가능한 이슈 ([d70b4ab](https://github.com/goorm-dev/gds/commit/d70b4abea305103b0146ab4321a8800253957d60))
-   **gantt:** PeriodIndicator가 좌측에서 노출되지 않는 이슈 ([19c5f9c](https://github.com/goorm-dev/gds/commit/19c5f9cf29a217daec898b442cd0c062a47a093a))
-   **gantt:** setup array 비었을 때 대응 ([d2aa340](https://github.com/goorm-dev/gds/commit/d2aa34073e02970709a358786e39f1004a71ed21))
-   **gantt:** task 없을 경우 null 리턴 ([527eedc](https://github.com/goorm-dev/gds/commit/527eedcca2f526c5446d6aead668f3d1e741a9fc))
-   **gantt:** task가 바뀔 때 재계산 안되는 이슈 ([b309b0e](https://github.com/goorm-dev/gds/commit/b309b0e68cc965eeb82dbc397283aef26dc16089))
-   **gantt:** timeline arrow button 오동작 이슈 ([df0fb08](https://github.com/goorm-dev/gds/commit/df0fb085158acfb09ca543421ecc1502a72e0a98))
-   **gantt:** timeline arrow button z index 수정 ([31f5360](https://github.com/goorm-dev/gds/commit/31f53603c8c36c581a2f6f8c7051f05dcebed76d))
-   **gantt:** useMemo내부에서 setter 호출 제거 ([72b12ab](https://github.com/goorm-dev/gds/commit/72b12ab2f098ae1184d83084be17889290b17408))
-   **gantt:** vertical scroll시 hover 재계산 안되는 이슈 ([d7d33f0](https://github.com/goorm-dev/gds/commit/d7d33f01dbcfdbb10be137ff0ab39cbe167e31b8))
-   **gantt:** viewMode 변경 안되는 이슈 ([170cc83](https://github.com/goorm-dev/gds/commit/170cc834462066fca122006517f7f49f853848d0))
-   **gantt:** viewMode year 무한렌더링 이슈 ([b554586](https://github.com/goorm-dev/gds/commit/b554586ffd4b8469f5510ac7498dbfcf67fac70c))
-   **gantt:** z-index 이슈 ([6f88ed4](https://github.com/goorm-dev/gds/commit/6f88ed4124a9466c411011862abced0f666a09c5))

### New Features

-   **Carousel:** Item이 children을 받을 수 있도록 개선 ([421f087](https://github.com/goorm-dev/gds/commit/421f087d1a2dfbde7495528b39d81e43e4c7844c))
-   **gantt:** '오늘' 버튼 항시노출, dropdown menu offset 변경 ([8ce8597](https://github.com/goorm-dev/gds/commit/8ce859701e9a2df438b804e4cd083c4cb8c28730))
-   **gantt:** 날짜 범위 선택 기능 추가 및 최대 컬럼 수 제한 ([3d4a28f](https://github.com/goorm-dev/gds/commit/3d4a28fc27823729102cd0a9e3466aafaaa1de53))
-   **gantt:** 닫혔을 때 스타일 변경 ([60bd651](https://github.com/goorm-dev/gds/commit/60bd65132cbdef4756bf36268715502ddca3dc6f))
-   **gantt:** 라벨 개선 ([eb02a6a](https://github.com/goorm-dev/gds/commit/eb02a6a04c188cec8e2994f18c364d2e7b3214bc))
-   **gantt:** 배경 그리드가 빈 곳을 모두 채우도록 개선 ([feaedc0](https://github.com/goorm-dev/gds/commit/feaedc017fa538d9d2354c25aa4bdcacfbf358ce))
-   **gantt:** 사용하지 않는 훅 제거 ([e5e9a29](https://github.com/goorm-dev/gds/commit/e5e9a29d58f4b4bb270f8dcd0e70cf9ab60d1c67))
-   **gantt:** 사용하지 않는 dayjs 플러그인 제거 ([53b46d3](https://github.com/goorm-dev/gds/commit/53b46d37765a9851bc010647b759588662d4c8cc))
-   **gantt:** 성능 최적화 ([8787252](https://github.com/goorm-dev/gds/commit/87872522985f5d70346fcf6f745a1f523199938c))
-   **gantt:** 스크롤에 따른 계산횟수 최적화 ([7e55474](https://github.com/goorm-dev/gds/commit/7e55474be66202c4d11c4e2977737d1a45ff3ede))
-   **gantt:** 시간 단위 토글 ([35868be](https://github.com/goorm-dev/gds/commit/35868be40c0a26267ce71d7e9bc3f4b456a2a16e))
-   **gantt:** 시멘틱 토큰 사용 ([9f4ec36](https://github.com/goorm-dev/gds/commit/9f4ec36dd58df76cabacf4b008f8f2f17540875e))
-   **gantt:** 오늘로 이동 라벨 변경 ([12c6d9d](https://github.com/goorm-dev/gds/commit/12c6d9db9ea66c4d80817af4e8f502a8d468311a))
-   **gantt:** 오늘로 이동 버튼 추가 ([ea944a9](https://github.com/goorm-dev/gds/commit/ea944a9f4b66c5908754f2ae0d7fff3a2941a6e3))
-   **gantt:** 인라인 스타일 variable화 ([d510996](https://github.com/goorm-dev/gds/commit/d510996dd0f5f87ce7921d0c94120ebefeccdca2))
-   **gantt:** 주, 월, 년 스케일 변경 ([5f40d15](https://github.com/goorm-dev/gds/commit/5f40d1570dde52916ff8d7e8bcee39b6e3d75f4a))
-   **gantt:** 차트 최대 기간 체크 ([ee9fadb](https://github.com/goorm-dev/gds/commit/ee9fadbdf60b936a5a395dcb4501849a8a379096))
-   **gantt:** 타임 스케일 토글 => 드롭다운 ([549ddf9](https://github.com/goorm-dev/gds/commit/549ddf9a275397e019353c72982c2a5ba4899ff5))
-   **gantt:** 태스크 duration 변경, 날짜 변경 기능 ([728c064](https://github.com/goorm-dev/gds/commit/728c064e2fe1c816f96af4f4ab04dcbc9e0228d4))
-   **gantt:** 특정 날짜로 이동 (with VS) ([bf734f5](https://github.com/goorm-dev/gds/commit/bf734f50cd817d91ea5493baa2288338bfe98af4))
-   **gantt:** 한 번에 여러 바 수정 가능하도록 개선 ([e95c69c](https://github.com/goorm-dev/gds/commit/e95c69c136149237e2e7dadd3bdeb5f524f6dcf1))
-   **gantt:** 헤더 첫줄 sticky ([30d4acf](https://github.com/goorm-dev/gds/commit/30d4acf7aa52aba3b366d8f59477ba76cac5044b))
-   **gantt:** 회색 배경 위치 수정 ([561ecfa](https://github.com/goorm-dev/gds/commit/561ecfaed4782779f53fd4d9c7e4ba4a2782fc70))
-   **gantt:** controllers를 외부에서 받아올 수 있도록 개선 ([622139d](https://github.com/goorm-dev/gds/commit/622139d1c5533c15f5136473066d27699bad1b17))
-   **gantt:** cursor가 적용되는 범위 수정 ([08869ac](https://github.com/goorm-dev/gds/commit/08869ac5ed1054c3415a158af2ed92aa78a3e4a2))
-   **gantt:** customData를 task에 넣을 수 있도록 개선 ([c9b9dbb](https://github.com/goorm-dev/gds/commit/c9b9dbb3d63072a2bc0a8ee5d3420c8c79f0e739))
-   **gantt:** datesInRange 컨텍스트 추가 ([d7fd980](https://github.com/goorm-dev/gds/commit/d7fd98044f3f0131b5c19ed3a8b7abf47ec92b75))
-   **gantt:** debug용 hook ([ab254d0](https://github.com/goorm-dev/gds/commit/ab254d043e4d70ab59488c42af0e24cd9e9e7572))
-   **gantt:** drag 후 로딩중 표현 ([4eddccd](https://github.com/goorm-dev/gds/commit/4eddccd6a550c58b25ec6db2bfe32d1b27902225))
-   **gantt:** drag delta constraint 부여 ([53dede6](https://github.com/goorm-dev/gds/commit/53dede64d457c88107b2f83eab05455714a94dfb))
-   **gantt:** drag에 step 추가 ([73295c0](https://github.com/goorm-dev/gds/commit/73295c04ea3a8843a178b89852c17702da9f79e6))
-   **gantt:** draggability 설정 기능 추가 ([870f8da](https://github.com/goorm-dev/gds/commit/870f8da3a70f175fd92f5a8fae98ef4fb7ea5113))
-   **gantt:** gantt 내부에서 text select 금지 ([4ff7dba](https://github.com/goorm-dev/gds/commit/4ff7dbaebb3d3a2744f05d76e152606afc22d970))
-   **gantt:** gantt bar 좌 우로 이동 기능 추가 ([067b8b1](https://github.com/goorm-dev/gds/commit/067b8b1239080fcc982148d8a07e81fab5e9d5a4))
-   **gantt:** gantt chart 컴포넌트 추가 ([c115f49](https://github.com/goorm-dev/gds/commit/c115f491d739313aa021dd952f25b3af7963f897))
-   **gantt:** gantt grid row가 x axis만 자르도록 변경 ([4d3f52a](https://github.com/goorm-dev/gds/commit/4d3f52a922e2d70e515c9b6bc4c546116978b735))
-   **gantt:** gantt header 배경색 부여 ([4b8f6be](https://github.com/goorm-dev/gds/commit/4b8f6be6c67c822db2d234982525bbcb2ea50021))
-   **gantt:** gantt list 헤더 커스텀 가능하도록 변경 ([419930f](https://github.com/goorm-dev/gds/commit/419930f7baf168b7372695163f954bde8f440d8f))
-   **gantt:** gantt list toggle 패딩 변경 ([f6a254c](https://github.com/goorm-dev/gds/commit/f6a254c31eca5b280d70b099d9dec919e880cdc5))
-   **gantt:** gantt list에서 스크롤바 가리기 ([5d971ef](https://github.com/goorm-dev/gds/commit/5d971ef5ea5ae0ca12a1c3565c3f1c89db14d563))
-   **gantt:** GanttBackground 컴포넌트 분리 ([2569111](https://github.com/goorm-dev/gds/commit/2569111d3b98334f87cec17d7897bb46fb0dfb71))
-   **gantt:** GanttBar가 추가 prop을 받도록 개선 ([326aeae](https://github.com/goorm-dev/gds/commit/326aeaecfff1f74c7424b8b79f11667adb99ef50))
-   **gantt:** GanttBarModifyHandler export ([75a375e](https://github.com/goorm-dev/gds/commit/75a375e40d276745783af9e03b9bcfec53b53938))
-   **gantt:** GanttList 추가 ([9f07f71](https://github.com/goorm-dev/gds/commit/9f07f716783974385c4ddfbd28950e1e64900554))
-   **gantt:** GanttList 클릭시 이동 ([2f082d6](https://github.com/goorm-dev/gds/commit/2f082d6ebf9a2cde54e23051e13b0ab13cc3b3d0))
-   **gantt:** GanttListItem 커스텀 가능하게 변경 ([137ad57](https://github.com/goorm-dev/gds/commit/137ad57cbd5680c1a551521445506273eb9b9d84))
-   **gantt:** header sticky ([bfd2004](https://github.com/goorm-dev/gds/commit/bfd200417e07ef10cf4f5659ba92b6519b17346f))
-   **gantt:** hover state 관리 기능 추가 ([a85509c](https://github.com/goorm-dev/gds/commit/a85509c8c04d7847e35f1e558909ed5495d6e240))
-   **gantt:** hover시 header에 날짜 표시 ([7f595fb](https://github.com/goorm-dev/gds/commit/7f595fbf44edbde21993abbd95afa387716066fe))
-   **gantt:** hover시 z-index 변경 ([55f76de](https://github.com/goorm-dev/gds/commit/55f76dec994ebcfe1c63297ca2fb490539d01c17))
-   **gantt:** loading indicator 애니메이션 개선 ([159c33b](https://github.com/goorm-dev/gds/commit/159c33bf2ee1690f035e46b7edda85987accaa7d))
-   **gantt:** loading indicator 제거 ([04b6510](https://github.com/goorm-dev/gds/commit/04b65105039c7fed9d35ad19fd692457618c4959))
-   **gantt:** ModifyHandler roro패턴으로 변경 ([9535113](https://github.com/goorm-dev/gds/commit/9535113d2c187cf610ca399c2246d6ef39482f4c))
-   **gantt:** mouseevent => pointerevent 변경 ([75c17f1](https://github.com/goorm-dev/gds/commit/75c17f11728c7d49d13192e232406e7427b380db))
-   **gantt:** move중일때만 커서가 move로 바뀌도록 변경 ([e64b5be](https://github.com/goorm-dev/gds/commit/e64b5be4ae6eb1aebe7ab8de039279c11b94cd3e))
-   **gantt:** node array에 대해 cloneElement가 아닌 Children의 메서드 사용 ([fb33fe3](https://github.com/goorm-dev/gds/commit/fb33fe3b823af403f2beb7a221cbf719b4010d99))
-   **gantt:** numeric value option 관련 처리 추가 ([309f421](https://github.com/goorm-dev/gds/commit/309f421558a611a57d0b982f7d9aa65708f67673))
-   **gantt:** onGanttBarClick 핸들러 추가 ([51bdda5](https://github.com/goorm-dev/gds/commit/51bdda5630aec37dc8bd97d4cd4b55f62b3805a5))
-   **gantt:** row에 border 추가 ([c7f73de](https://github.com/goorm-dev/gds/commit/c7f73de7cfc977257ef4b2cc8431c19896ecf68f))
-   **gantt:** scroll native api로 변경 및 컴포넌트 분리 ([0612971](https://github.com/goorm-dev/gds/commit/0612971aece4e1fc308dc9194fd55f6f6f3a6bf6))
-   **gantt:** scroll top sync 로직 개선 ([6dbc9d7](https://github.com/goorm-dev/gds/commit/6dbc9d7d557efca53371d539fe112fe74ac6f105))
-   **gantt:** sort 관련 기능 제거(사용측으로 로직 위임) ([07d441d](https://github.com/goorm-dev/gds/commit/07d441d0ff08be930055de7a0342d8b9e494ef0a))
-   **gantt:** task 기간 수정시 로딩 커서 ([18d12fd](https://github.com/goorm-dev/gds/commit/18d12fd0297485554c9c4622d390a9092fc59461))
-   **gantt:** task 이름 sticky ([67ffc02](https://github.com/goorm-dev/gds/commit/67ffc02ab922c974a8935ef5389def2122bb7d1b))
-   **gantt:** task id 타입에 number, symbol 추가 ([e38d979](https://github.com/goorm-dev/gds/commit/e38d97940899f370686062fa7b46ce81a162ff94))
-   **gantt:** timeline arrow button 위치 변경 ([8ba8cd1](https://github.com/goorm-dev/gds/commit/8ba8cd1d7d6ea876c28bafe3c75205117988951d))
-   **gantt:** timeline arrow button hover시 날짜 표시 ([a96274b](https://github.com/goorm-dev/gds/commit/a96274b7edb8a915a11b38fc147f93f34e81b704))
-   **gantt:** timeline arrow button의 노출 방법을 변경 ([2c985ff](https://github.com/goorm-dev/gds/commit/2c985ffdc3b3bc5864ffc2e2cbb6ccb952aaf932))
-   **gantt:** today indicator 뱃지 디자인 변경 ([77d3497](https://github.com/goorm-dev/gds/commit/77d3497455a45939d7a1c10236ce37b63d0b8e51))
-   **gantt:** today indicator 스타일 변경 ([798fbd6](https://github.com/goorm-dev/gds/commit/798fbd6f7e389cd2d973e8adeb24674cae14a3b4))
-   **gantt:** unit type 중복 계산 최소화 ([abde2d4](https://github.com/goorm-dev/gds/commit/abde2d4ae6ade1354d2b436a5a6f4f46c249d7a0))
-   **gantt:** useDrag 사용하지 않는 기능 제거 ([3fc9ec6](https://github.com/goorm-dev/gds/commit/3fc9ec6667c6d41a1a8cebea397d5cc4d48d5dd0))
-   **gantt:** useDrag가 click이벤트도 판단하도록 변경 ([33d015a](https://github.com/goorm-dev/gds/commit/33d015aa56dbcd92c30839188e7ca2d6710ea678))
-   **gantt:** useHover 훅 useHoverEvent로 대체 ([5ce6fdc](https://github.com/goorm-dev/gds/commit/5ce6fdc016e0766f1ae0f62ead1a22481af44141))
-   **gantt:** useHover가 container도 받을 수 있도록 개선 ([6c33103](https://github.com/goorm-dev/gds/commit/6c3310303badc44a5b14a3b20e4521891414dfd8))
-   **gantt:** useHoverEvent에서 pointer 이벤트를 감지하도록 변경 ([8d8ac36](https://github.com/goorm-dev/gds/commit/8d8ac365946741e6fb93281a3a72214ace5fce58))
-   **gantt:** view mode 컨트롤러 dropdown 위치 변경 ([60267b5](https://github.com/goorm-dev/gds/commit/60267b5a06fbf410debde71c1d79ddf89f095cd2))
-   **gantt:** viewMode week, month 대응 ([710c7f3](https://github.com/goorm-dev/gds/commit/710c7f3a1068d54caa80e72dd39fba1d0068ae3f))
-   **gantt:** viewMode year일 경우 gray background 제거 ([e920c7d](https://github.com/goorm-dev/gds/commit/e920c7d1e840f4af92e3a3a2e16540b65d6c192e))
-   **gantt:** virtual scroll 로직 개선 ([71a22f0](https://github.com/goorm-dev/gds/commit/71a22f0e0eb0a21f862cc3680c5e706aef57e42f))
-   **gantt:** virtual scroll 로직 개선 ([410f662](https://github.com/goorm-dev/gds/commit/410f6624c340d2b512dfcd66c9726111252c1c13))
-   **HScrollTable:** 현재 페이지만 선택하는 기능 추가 ([fdb1e03](https://github.com/goorm-dev/gds/commit/fdb1e0376276f87bbf3a3ffdaf7bc1269de0d26e))
-   **HScrollTable:** row select handler 추가 ([e1b8cc3](https://github.com/goorm-dev/gds/commit/e1b8cc3c6ecdf46433af581a2097b70a0ec54fbc))
-   **HScrollTable:** table 데이터 모두 리턴해주도록 추가 ([a7f4eca](https://github.com/goorm-dev/gds/commit/a7f4eca3319975453e4aa35e43b1b953d88c8bb9))

### Documentation

-   **carousel:** CarouselNew 관련 설명 추가 ([26bb672](https://github.com/goorm-dev/gds/commit/26bb672f8f1ab91de238c133555f061d53ca6df2))
-   **gantt:** 로딩 인디케이터 주석 추가 ([81162ea](https://github.com/goorm-dev/gds/commit/81162eab464590af247718a70adadc1868590c66))
-   **gantt:** 리드미 작성 ([65de43b](https://github.com/goorm-dev/gds/commit/65de43b3a491f838b39d412a8f2823ef4e73160d))
-   **gantt:** 스토리북 Docs 추가 ([c8cc2fd](https://github.com/goorm-dev/gds/commit/c8cc2fd419a5a30ed3e253a8847f56de37fbd7a4))
-   **gantt:** gantt scroll sync 설명 ([74a3f0a](https://github.com/goorm-dev/gds/commit/74a3f0a534d56fdbb097978be29f75b76e7c0634))
-   **gantt:** loading indicator 주석 ([e2daf7b](https://github.com/goorm-dev/gds/commit/e2daf7bf3c2092731dc9da386303b2d4b2db1d80))
-   **gantt:** scroll to event provider 설명 추가 ([a3cd8ef](https://github.com/goorm-dev/gds/commit/a3cd8ef622cfd2b231276cdfdcf79164ad4ca1b8))
-   **gantt:** scrollToGanttBar 설명 추가 ([06a4e44](https://github.com/goorm-dev/gds/commit/06a4e44b7e424c3f759f4e8713bf1411c94134dd))
-   **gantt:** TODO 추가 ([27a164c](https://github.com/goorm-dev/gds/commit/27a164c5a4961dc16a85a5a7f78388ab270a611d))
-   **gantt:** useDrag 설명 추가 ([39e08ff](https://github.com/goorm-dev/gds/commit/39e08ff4a50764b7f059a56d571862102ad55693))
-   **gantt:** useHover 관련 설명 추가 ([5aa547c](https://github.com/goorm-dev/gds/commit/5aa547cb9f4b23210fd79e12114c33fa6dd24f01))
-   **gantt:** useHover TODO 추가 ([3bb6034](https://github.com/goorm-dev/gds/commit/3bb6034070a66a8dcda9c03d7c54038ce6299932))
-   **gantt:** useHoverEvent 설명 추가 ([cbc9baf](https://github.com/goorm-dev/gds/commit/cbc9baf357ad3c1ef068aa0e5a852e6728de5035))
-   **HScrollTables:** [#130](https://github.com/goorm-dev/gds/issues/130) 기능 추가 설명 ([6ef8a70](https://github.com/goorm-dev/gds/commit/6ef8a70436cf95671091246be8b871114095fe3b))

### [1.22.1](https://github.com/goorm-dev/gds/compare/v1.22.0...v1.22.1) (2023-11-13)

### Bug Fix

-   **ButtonToggleGroup:** type = button 추가 ([2760359](https://github.com/goorm-dev/gds/commit/276035920cd495b5ca417b41db50fa3fba3c3530))

## [1.22.0](https://github.com/goorm-dev/gds/compare/v1.21.3...v1.22.0) (2023-11-13)

### New Features

-   **ButtonToggleGroup:** 누락된 type="button" 다시 추가 ([#139](https://github.com/goorm-dev/gds/issues/139)) ([656e6fd](https://github.com/goorm-dev/gds/commit/656e6fdbe192f8a2e0ac6aa0af6e8f06661d7a1a))

### [1.21.3](https://github.com/goorm-dev/gds/compare/v1.21.2...v1.21.3) (2023-11-10)

### Bug Fix

-   **Badge:** toggle 스타일 깨짐 이슈 ([1b2d3db](https://github.com/goorm-dev/gds/commit/1b2d3dbc207201ba75f6d4810cc914d7d2d79fc9))

### [1.21.2](https://github.com/goorm-dev/gds/compare/v1.21.1...v1.21.2) (2023-11-03)

### Bug Fix

-   **Footer:** invalid html 수정 ([3c9aad1](https://github.com/goorm-dev/gds/commit/3c9aad1150e367abc722b888ff80b0aae8297b5e))

### [1.21.1](https://github.com/goorm-dev/gds/compare/v1.21.0...v1.21.1) (2023-11-03)

### Bug Fix

-   **Grass:** date-fns 사용하고 있던 부분 dayjs로 변경 ([dc72b3b](https://github.com/goorm-dev/gds/commit/dc72b3b667179bb202cd2950f54c4d2c8628a440))

## [1.21.0](https://github.com/goorm-dev/gds/compare/v1.20.0...v1.21.0) (2023-11-02)

### Build System

-   **rollup:** terser plugin 변경 ([b8dc08a](https://github.com/goorm-dev/gds/commit/b8dc08a586a25e231d5afa163625a524539afb6b))

### Styling

-   **ServiceNav:** cx => cn ([9da70fb](https://github.com/goorm-dev/gds/commit/9da70fb887bb19779449d7c92437576f445f642d))

### Bug Fix

-   **gds-charts:** export 하지 않았던 차트들 export ([dc387c1](https://github.com/goorm-dev/gds/commit/dc387c1e98603c1bb44d0e215fba4d144eb775ad))
-   **ServiceNav:** 다크모드 언어선택 dropdown 스타일 이슈 ([d905fc1](https://github.com/goorm-dev/gds/commit/d905fc1b17db3167e206a36103c86540e951d7e0))
-   **ServiceNav:** divider 색상 수정 ([7eecf0c](https://github.com/goorm-dev/gds/commit/7eecf0c75ecd56c505b7c2a1a080cbc14af6ebc0))

### Other

-   **Grass:** 오타 수정 ([d3cb6a0](https://github.com/goorm-dev/gds/commit/d3cb6a024bfb3d77510502db77a82a128002784c))
-   **Grass:** console.log 제거 ([010bf4b](https://github.com/goorm-dev/gds/commit/010bf4b0f1a37e46bf112fe7b35bae89b0c25550))

### New Features

-   **Footer:** EXP 추가 ([7d62143](https://github.com/goorm-dev/gds/commit/7d62143d6506bf1bc89c44f731e80aacfa0b96da))
-   **Grass:** 경고 콘솔 dev에서만 출력토록 변경 ([0edb844](https://github.com/goorm-dev/gds/commit/0edb84465392a81cac50b6ddd692799b7666725b))

## [1.20.0](https://github.com/goorm-dev/gds/compare/v1.19.4...v1.20.0) (2023-10-27)

### Bug Fix

-   **Avatar:** bg color 랜덤하게 나오도록 수정 ([#131](https://github.com/goorm-dev/gds/issues/131)) ([a2b923f](https://github.com/goorm-dev/gds/commit/a2b923f13b972e30002f78aade663c684609ffb2))

### New Features

-   **Badge:** 뱃지 토큰 색상 적용하도록 수정 ([#128](https://github.com/goorm-dev/gds/issues/128)) ([9d04a77](https://github.com/goorm-dev/gds/commit/9d04a7798e8c9bdcfdbf62718d5bdbeccb448662))
-   **Chart:** Radar, DualAxes, Bar 차트 추가 ([#133](https://github.com/goorm-dev/gds/issues/133)) ([7cb830a](https://github.com/goorm-dev/gds/commit/7cb830af415569b06230afb29f30d6d7c4b1c9c1))
-   **doc:** storybook 컴포넌트 컨트롤러 ([#115](https://github.com/goorm-dev/gds/issues/115)) ([862eb64](https://github.com/goorm-dev/gds/commit/862eb6426461ccd126dc24d1025724e44fa9c818))
-   **doc:** 컴포넌트와 관련된 링크 버튼 추가 ([#116](https://github.com/goorm-dev/gds/issues/116)) ([5dd7e2f](https://github.com/goorm-dev/gds/commit/5dd7e2fb4e3b0197da2834a2a8516d1005e2785e))
-   **Icon:** HourglassIcon 형태 변경 ([#118](https://github.com/goorm-dev/gds/issues/118)) ([925896f](https://github.com/goorm-dev/gds/commit/925896f62b2159681dd6ac808ef0771861e2be6f))
-   MemoIcon 등록 ([#132](https://github.com/goorm-dev/gds/issues/132)) ([10d71cb](https://github.com/goorm-dev/gds/commit/10d71cb182bc8ec6bac7f511e6ec27a9da947296))
-   ReferenceIcon 추가 ([#134](https://github.com/goorm-dev/gds/issues/134)) ([f25c496](https://github.com/goorm-dev/gds/commit/f25c496446bd786136ccb0d9db4c1974dab57741))
-   **ServiceNav:** exp 추가 ([6fafad0](https://github.com/goorm-dev/gds/commit/6fafad0b14cd6312c0bb0da89803f5e02066aa3e))

### [1.19.4](https://github.com/goorm-dev/gds/compare/v1.19.3...v1.19.4) (2023-10-19)

### Bug Fix

-   **Alert:** 상하 가운데 정렬 추가 ([c739833](https://github.com/goorm-dev/gds/commit/c7398330f608999d70f0334530f8f0c40267c997))

### [1.19.3](https://github.com/goorm-dev/gds/compare/v1.19.2...v1.19.3) (2023-10-18)

### Bug Fix

-   **HScrollTable:** 체크시 fixed column 배경색 사라지는 이슈 ([bee9bf8](https://github.com/goorm-dev/gds/commit/bee9bf8e4cd8cff1fc311c19be45484a2a3eacb1))

### [1.19.2](https://github.com/goorm-dev/gds/compare/v1.19.1...v1.19.2) (2023-10-18)

### Bug Fix

-   **HScrollTable:** fixed column hover시 배경색이 사라지는 이슈 ([4677c5b](https://github.com/goorm-dev/gds/commit/4677c5bb13bb1b45a233aa4f176e346903e59419))

### [1.19.1](https://github.com/goorm-dev/gds/compare/v1.19.0...v1.19.1) (2023-10-17)

### Bug Fix

-   react-joyride 버전 고정 ([f6fb034](https://github.com/goorm-dev/gds/commit/f6fb03411435445c050a62313f9871d8f1d3ab39))

## [1.19.0](https://github.com/goorm-dev/gds/compare/v1.18.0...v1.19.0) (2023-10-17)

### Bug Fix

-   **Breadcrumb:** breadcrumb 스타일 수정(중앙 정렬) ([#113](https://github.com/goorm-dev/gds/issues/113)) ([5347c1a](https://github.com/goorm-dev/gds/commit/5347c1a6fa1ca516884e6db3195ca1c283ddf495))

### New Features

-   **foundation:** goormstrap 4.34.0 적용 및 semantic color token 적용 ([#129](https://github.com/goorm-dev/gds/issues/129)) ([20e1e91](https://github.com/goorm-dev/gds/commit/20e1e9102c9719fd080d35dcff37e70323e21903))
-   **husky:** pre-commit > prettier 추가 ([#121](https://github.com/goorm-dev/gds/issues/121)) ([d1e0f0e](https://github.com/goorm-dev/gds/commit/d1e0f0ea82aa3ea9ce703e73e7adda3a8a0d0012))

## [1.18.0](https://github.com/goorm-dev/gds/compare/v1.17.0...v1.18.0) (2023-09-21)

### Bug Fix

-   **Carousel:** Carousel 컴포넌트 export 명 CarouselNew로 수정 ([847c3a8](https://github.com/goorm-dev/gds/commit/847c3a8d3fbd18dcb43e6e3dbf17ed01e7bd0b1c))
-   **Collapse:** Collapse innerRef propTypes 수정 ([#114](https://github.com/goorm-dev/gds/issues/114)) ([af1fa51](https://github.com/goorm-dev/gds/commit/af1fa51bedcf6280207b946b50c6f453a62775c7))
-   setInterval 안의 state가 업데이트되지 않는 문제 수정 ([98a7af1](https://github.com/goorm-dev/gds/commit/98a7af110285a71e17a202306bc1c541cc5aca71))
-   터치 위치 관련 코드 피드백 반영 ([cd3442b](https://github.com/goorm-dev/gds/commit/cd3442ba7d72fddfea248231256f34ec0fe4f911))

### New Features

-   Carousel 컴포넌트 함수형 컴포넌트로 변경 ([ec52d91](https://github.com/goorm-dev/gds/commit/ec52d9108df3ddfab6e8c5d27f7b55b9b641a1b4))
-   constants 분리 & 수직형 캐러셀인 경우 터치 이벤트 처리할 수 있도록 변경 ([c29e9d4](https://github.com/goorm-dev/gds/commit/c29e9d4902b7af2679e9d2c9485daec7a4854f0c))
-   **foundation:** goormstrap 4.33.0 적용 ([bcbe084](https://github.com/goorm-dev/gds/commit/bcbe084cf32b5b0732a2173673455a92d03f33c7))
-   **foundation:** Semantic color token 스토리 추가 ([#127](https://github.com/goorm-dev/gds/issues/127)) ([691ef1d](https://github.com/goorm-dev/gds/commit/691ef1dd7f8a4eac24c7653c36fe322b7d55a297))
-   **icon:** stack 아이콘 추가 ([#112](https://github.com/goorm-dev/gds/issues/112)) ([1e25b84](https://github.com/goorm-dev/gds/commit/1e25b84519f02560b63dcd952d81e271bfb3931a))
-   props 테이블 생성 및 추가 개발 사항 반영 ([6041419](https://github.com/goorm-dev/gds/commit/6041419c069e4c6160c8df7afb7b07c20c67d242))
-   setInterval을 useInterval로 교체하여 사용성 개선 ([7d940e6](https://github.com/goorm-dev/gds/commit/7d940e6bbc0ab9db68384caae55112bfd3ad8033))
-   useEffect 의존성 배열 없는 경우 수정 ([465c711](https://github.com/goorm-dev/gds/commit/465c7110e2566a0ed68660e8b6ab4c5a66206f5a))
-   스토리북의 Carousel 컴포넌트를 gds 레포로 이동 ([f4de67f](https://github.com/goorm-dev/gds/commit/f4de67fbb4c436ea80deb044d92fcadd5c2a24f2))
-   코드 리뷰 반영 ([d6a29ae](https://github.com/goorm-dev/gds/commit/d6a29ae5abb33789b212f2508940f5d83b32574a))
-   클래스형 컴포넌트 함수형 컴포넌트로 수정 ([691c08a](https://github.com/goorm-dev/gds/commit/691c08a0db95a5ab638cfc192a6b477d58cc7400))
-   터치 이벤트 ref로 변경 ([776b0b1](https://github.com/goorm-dev/gds/commit/776b0b172e1cda43a3fa852f4cc6c846986975a6))

## [1.17.0](https://github.com/goorm-dev/gds/compare/v1.16.0...v1.17.0) (2023-09-18)

### New Features

-   **GoormNavbar:** scroll detection on off prop 추가 ([85c7e44](https://github.com/goorm-dev/gds/commit/85c7e4476c9d12350a3372c5e218c20ca0a97e28))
-   **SidePannel:** 컴포넌트 개발 및 스토리 생성 ([#105](https://github.com/goorm-dev/gds/issues/105)) ([9dceb2f](https://github.com/goorm-dev/gds/commit/9dceb2fa894588d0b736e0f3c68bb0095f1847cb))

### Styling

-   **FileInput:** 파일명 길 때 깨지는 이슈 해결 ([#104](https://github.com/goorm-dev/gds/issues/104)) ([c8dfa56](https://github.com/goorm-dev/gds/commit/c8dfa56c991e20ccda13d00a74232ef5434ae912))

## [1.16.0](https://github.com/goorm-dev/gds/compare/v1.15.0...v1.16.0) (2023-09-14)

### Bug Fix

-   **Badge:** 뱃지 사이즈별 스타일 변경이 안되는 이슈 ([26bbd20](https://github.com/goorm-dev/gds/commit/26bbd20997edcd855d6b6bc91b3d3bfc004e4b2f))

### New Features

-   아이콘 업데이트 ([b084b98](https://github.com/goorm-dev/gds/commit/b084b985d16d7c2184bfcf9de7c5b3f47d67f382))

## [1.15.0](https://github.com/goorm-dev/gds/compare/v1.14.2...v1.15.0) (2023-09-07)

### New Features

-   **Dropdown:** Dropdown Chevron 아이콘 변경 ([#111](https://github.com/goorm-dev/gds/issues/111)) ([52021aa](https://github.com/goorm-dev/gds/commit/52021aa891314c4a428c5a167049d0d6d41b2973))
-   **Grass:** 잔디 컴포넌트 생성 ([#89](https://github.com/goorm-dev/gds/issues/89)) ([48c81d4](https://github.com/goorm-dev/gds/commit/48c81d4ae973e9f7cce4e0aa40b06a32b11145da))

### Code Refactoring

-   **Badge:** typescript로 마이그레이션 ([e71f75c](https://github.com/goorm-dev/gds/commit/e71f75c2c243a9d851c9a73140f2ae3feff100d1))

### Other

-   **Badge:** 피드백 반영 ([b8f9941](https://github.com/goorm-dev/gds/commit/b8f99418f80541ab1cab465bcabb6df79cd54bba))

### Bug Fix

-   **Badge:** link 색상 추가 및 색상관련 처리를 gds에서 하도록 변경 ([#110](https://github.com/goorm-dev/gds/issues/110)) ([2f3e4c2](https://github.com/goorm-dev/gds/commit/2f3e4c2de0e500ee062a652e05759f33422a869f))
-   **Footer:** 모바일 뷰에서 회사 정보 UI 변경 ([ccb6d28](https://github.com/goorm-dev/gds/commit/ccb6d2802216b77045047c2d32fd0cca564beaaa))

### [1.14.2](https://github.com/goorm-dev/gds/compare/v1.14.1...v1.14.2) (2023-08-25)

### Bug Fix

-   **avatar:** react-avatar 기본 색상 기존 값으로 설정 ([a2a957c](https://github.com/goorm-dev/gds/commit/a2a957cb5cbfb4d9e2b64fe61641e395845a06ab))

### [1.14.1](https://github.com/goorm-dev/gds/compare/v1.14.0...v1.14.1) (2023-08-23)

### Build System

-   **avatar:** react-avatar 디펜던시 ^4.0.0 -> ^5.0.0 변경 ([c4fe3e5](https://github.com/goorm-dev/gds/commit/c4fe3e5d496efe6569336438816b8a58090ccad4))

## [1.14.0](https://github.com/goorm-dev/gds/compare/v1.13.1...v1.14.0) (2023-07-24)

### Bug Fix

-   **Avatar:** PropTypes가 잘못 정의되어 있던 문제 수정 ([9ed94f6](https://github.com/goorm-dev/gds/commit/9ed94f65618e61d2504d594dffcaa568f497f02e))

### New Features

-   **DatePicker:** datepicker 스타일 수정 ([#102](https://github.com/goorm-dev/gds/issues/102)) ([f46c964](https://github.com/goorm-dev/gds/commit/f46c964e2fb42790f350c8f083ffdfe8f656e733))
-   **Footer:** 박스 모델 간격 수정 ([#109](https://github.com/goorm-dev/gds/issues/109)) ([f84f52b](https://github.com/goorm-dev/gds/commit/f84f52be97915c6f053c9e35a574023c07d976d3))

### [1.13.1](https://github.com/goorm-dev/gds/compare/v1.13.0...v1.13.1) (2023-07-07)

### Bug Fix

-   **Moda:** size defaultprops md 로 수정 ([#106](https://github.com/goorm-dev/gds/issues/106)) ([1819242](https://github.com/goorm-dev/gds/commit/181924294b30c6afbdb05371c046b1b1613b5a4b))

## [1.13.0](https://github.com/goorm-dev/gds/compare/v1.12.0...v1.13.0) (2023-07-06)

### New Features

-   **Footer:** 컴포넌트 커스텀 기능 추가 ([#103](https://github.com/goorm-dev/gds/issues/103)) ([167ee6a](https://github.com/goorm-dev/gds/commit/167ee6a73696840a2e8f8b0034d157f5dbfc7e3e))
-   **Modal:** 모달 컴포넌트 GDS로 이동 및 Centered Modal 추가 ([#99](https://github.com/goorm-dev/gds/issues/99)) ([b3006d6](https://github.com/goorm-dev/gds/commit/b3006d6d234b6742d2dc081fac64c6ffcec3b18c))

## [1.12.0](https://github.com/goorm-dev/gds/compare/v1.11.0...v1.12.0) (2023-06-23)

### Styling

-   **Footer:** 마진 수정 ([#98](https://github.com/goorm-dev/gds/issues/98)) ([0e3ad91](https://github.com/goorm-dev/gds/commit/0e3ad9103acd66d396dc5094948ad7800a17ccbc))

### New Features

-   **Resource Center:** figma export script 생성 ([#101](https://github.com/goorm-dev/gds/issues/101)) ([59ee4fd](https://github.com/goorm-dev/gds/commit/59ee4fded3c8ffe76ed458c4e07fbf0918d3fe73))
-   **AvatarSkeleton:** AvatarSkeleton 컴포넌트 추가 및 스토리 생성([#83](https://github.com/goorm-dev/gds/pull/83))
-   **SideNav:** SideNav 컴포넌트 생성 및 스토리 생성 ([#100](https://github.com/goorm-dev/gds/issues/100)) ([bfdfc9f](https://github.com/goorm-dev/gds/commit/bfdfc9fef65e8344f5014b9dccf6f17401977bf8))

## [1.11.0](https://github.com/goorm-dev/gds/compare/v1.10.0...v1.11.0) (2023-05-26)

### Bug Fix

-   **DashboardFrameNew:** 자잘한 버그 수정 ([#91](https://github.com/goorm-dev/gds/issues/91)) ([6b042a1](https://github.com/goorm-dev/gds/commit/6b042a19d52dc2e304c9741b31b5f5f1904ba255))
-   **DatePicker:** DatePicker 스펙 추가 ([#88](https://github.com/goorm-dev/gds/issues/88)) ([dd885bc](https://github.com/goorm-dev/gds/commit/dd885bceba4e732dce1d8cb97b099e0d79e312c1))
-   **ImageToContainerIcon:** 오타 수정 ([#92](https://github.com/goorm-dev/gds/issues/92)) ([9670df8](https://github.com/goorm-dev/gds/commit/9670df8a30937204d2909f1207aa8625e0b97056))
-   **TopBanner:** buttonLabel prop이 없는 경우 UI 오류 수정 ([#93](https://github.com/goorm-dev/gds/issues/93)) ([059af74](https://github.com/goorm-dev/gds/commit/059af741bc24bed7b2604cab75bbb5f70016081d))

### New Features

-   **Footer:** 서비스 리스트 수정 ([#90](https://github.com/goorm-dev/gds/issues/90)) ([0967795](https://github.com/goorm-dev/gds/commit/0967795c254d3565fd6f8426f6996b65d51cf189))
-   **icons:** ContainerRunIcon, DeployIcon 추가 ([#96](https://github.com/goorm-dev/gds/issues/96)) ([a7573e5](https://github.com/goorm-dev/gds/commit/a7573e54dc5c70b4eab7d828de485092c8e9040a))

## [1.10.0](https://github.com/goorm-dev/gds/compare/v1.9.1...v1.10.0) (2023-05-16)

### New Features

-   **ButtonToggleGroup:** Uncontrolled 과 Controlled 형식 ButtonToggleGroup 컴포넌트 및 스토리 생성 ([#85](https://github.com/goorm-dev/gds/issues/85)) ([c195b7b](https://github.com/goorm-dev/gds/commit/c195b7b11748b5bd330047d01bf664a40f77617f))
-   **DashboardFrameNew:** DashboardFrameNew rest props 추가 ([#87](https://github.com/goorm-dev/gds/issues/87)) ([f2aace3](https://github.com/goorm-dev/gds/commit/f2aace3e6184f20cf124f0d8370b4c37879ab91b))

### [1.9.1](https://github.com/goorm-dev/gds/compare/v1.9.0...v1.9.1) (2023-05-08)

### Bug Fix

-   **Input:** className props 누락 수정 ([086f2e8](https://github.com/goorm-dev/gds/commit/086f2e8101d04742119b67fee2db6fa64ec54e04))

### New Features

-   lerna hotfix 브랜치 추가 ([258d989](https://github.com/goorm-dev/gds/commit/258d9890db086e99389ecc69eb77bb9adb6a8ffc))

## [1.9.0](https://github.com/goorm-dev/gds/compare/v1.8.0...v1.9.0) (2023-05-03)

### Styling

-   **HScrollTablePagination:** 페이지 네이션 중앙 정렬 수정 ([#79](https://github.com/goorm-dev/gds/issues/79)) ([3e1943d](https://github.com/goorm-dev/gds/commit/3e1943df165934864cc14f1caeba3b4226d7802b))

### Bug Fix

-   **Toastify:** nextjs에서 node_modules의 stylesheet를 불러오지 못하는 이슈로 인해 import문 제거 ([#82](https://github.com/goorm-dev/gds/issues/82)) ([08c55d6](https://github.com/goorm-dev/gds/commit/08c55d65616bd40a22771b2b326eae545f4dbf4a))

### New Features

-   **build:** 스타일 inject plugin 개발 ([#81](https://github.com/goorm-dev/gds/issues/81)) ([a3c82ab](https://github.com/goorm-dev/gds/commit/a3c82ab96b76454f23cb13217402d04499c95008))
-   **DashboadFrame:** 스펙 추가 및 추가 기능 개발 ([#84](https://github.com/goorm-dev/gds/issues/84)) ([6d0af6e](https://github.com/goorm-dev/gds/commit/6d0af6e416cedc3da34c2489465d0e590f0ec78d))
-   **gds-icons:** KrampolineIcon 추가 및 Icon size prop 안먹는 이슈 해결 ([#86](https://github.com/goorm-dev/gds/issues/86)) ([a768eee](https://github.com/goorm-dev/gds/commit/a768eee6ee742b4caa515bbd77cc4048f8058d04))

## [1.8.0](https://github.com/goorm-dev/gds/compare/v1.7.3...v1.8.0) (2023-04-04)

### New Features

-   **Icon:** 아이콘 추가 ([#77](https://github.com/goorm-dev/gds/issues/77)) ([fc98f4b](https://github.com/goorm-dev/gds/commit/fc98f4b5d93eebb75dae9184915464345d1433fd))
-   **Icon:** Symbol 아이콘 그룹 추가 ([#61](https://github.com/goorm-dev/gds/issues/61)) ([2eef734](https://github.com/goorm-dev/gds/commit/2eef734a1c140e23f8f3aed4a20ac31e1979044c)), closes [#62](https://github.com/goorm-dev/gds/issues/62) [#28](https://github.com/goorm-dev/gds/issues/28)

### Bug Fix

-   **common:** gds-tables 빌드 오류 해결 ([#78](https://github.com/goorm-dev/gds/issues/78)) ([14c4ed4](https://github.com/goorm-dev/gds/commit/14c4ed428e0717e60b8ed0b507191a7a80c6b7df)), closes [#61](https://github.com/goorm-dev/gds/issues/61) [#62](https://github.com/goorm-dev/gds/issues/62)

### [1.7.3](https://github.com/goorm-dev/gds/compare/v1.7.2...v1.7.3) (2023-03-29)

### Bug Fix

-   **common:** Storybook 빌드 오류 해결 ([#76](https://github.com/goorm-dev/gds/issues/76)) ([7f4ba70](https://github.com/goorm-dev/gds/commit/7f4ba70581cdce420644ea47336c19fe80b6628e))

### [1.7.2](https://github.com/goorm-dev/gds/compare/v1.7.1...v1.7.2) (2023-03-29)

### Bug Fix

-   **common:** github action node 버전 마이그레이션 ([b556742](https://github.com/goorm-dev/gds/commit/b55674210aa048c18a81bdf518672c18ae5060ff))

### [1.7.1](https://github.com/goorm-dev/gds/compare/v1.7.0...v1.7.1) (2023-03-28)

### Bug Fix

-   **common:** github action ubuntu 버전 마이그레이션 ([3af7172](https://github.com/goorm-dev/gds/commit/3af71728892de03948c4aee6ec02e8ed3c9d8cda))

## [1.7.0](https://github.com/goorm-dev/gds/compare/v1.6.0...v1.7.0) (2023-03-28)

### Other

-   **release:** publish v1.6.1 ([a4314dd](https://github.com/goorm-dev/gds/commit/a4314ddb3975cb9f688b1d3a362264958fc8713f))

### Styling

-   **Alert:** Alert 컴포넌트 - width 이슈 수정 ([#65](https://github.com/goorm-dev/gds/issues/65)) ([b81813f](https://github.com/goorm-dev/gds/commit/b81813f77a9be6bbe6f96eb103690d5ba9fa0db0))

### New Features

-   **Button:** 버튼의 아이콘 줄어드는 버그 수정 ([#63](https://github.com/goorm-dev/gds/issues/63)) ([2ad3f9d](https://github.com/goorm-dev/gds/commit/2ad3f9dc7d50f167376edf7a583e924953c0bc8b))
-   **common:** prettier 전체 돌리기 ([#71](https://github.com/goorm-dev/gds/issues/71)) ([65d1d5c](https://github.com/goorm-dev/gds/commit/65d1d5c2020a3f7683deeb64219a90003d889d9a))
-   **common:** 개발환경에서는 클래스명 hash값으로 변경되지 않도록 변경 ([#69](https://github.com/goorm-dev/gds/issues/69)) ([498f3e1](https://github.com/goorm-dev/gds/commit/498f3e14c950037e9c2d3e1644e0f6265196251b))
-   **DashboardFrameNew:** DashboardFrame 리뉴얼 ([#53](https://github.com/goorm-dev/gds/issues/53)) ([2e2443f](https://github.com/goorm-dev/gds/commit/2e2443f17c9c88f810fc28313ea8c0a71979b579))
-   **gds-components:** gds-components 패키지 style extract default로 변경 ([#74](https://github.com/goorm-dev/gds/issues/74)) ([3b2863d](https://github.com/goorm-dev/gds/commit/3b2863d5bbdd1842c1bed8c6ff73457fb26d31f1))
-   **Icon:** 피그마 아이콘 스크립트 수정 ([#73](https://github.com/goorm-dev/gds/issues/73)) ([5ab30a1](https://github.com/goorm-dev/gds/commit/5ab30a1fe0e8b08b566505b1ec911c90f04b898c))
-   **Input:** input counter 기능 추가 ([#66](https://github.com/goorm-dev/gds/issues/66)) ([98d4ef8](https://github.com/goorm-dev/gds/commit/98d4ef87f82c8509b4732176ebb269dc7fd008ec))

### Bug Fix

-   **common:** GDS story 파일들이 빌드에 포함되는 오류 수정 ([#70](https://github.com/goorm-dev/gds/issues/70)) ([afbf7b7](https://github.com/goorm-dev/gds/commit/afbf7b7cd2fc73adf292fa41a582536771694cce))
-   **DashboardFrame:** MouseEvent type error 수정 ([a9f6120](https://github.com/goorm-dev/gds/commit/a9f6120a3d4e2d8ee73e07ee449a6c17c55a37c2))
-   **gds-charts:** chart config 우선순위 문제 수정 ([#75](https://github.com/goorm-dev/gds/issues/75)) ([7e9dc1d](https://github.com/goorm-dev/gds/commit/7e9dc1d55f17ecb5bc65c6d4afbfc218f9048d85))
-   **Toastify:** toast 사용을 위해 사용자단에서 stylesheet를import하지 않아도 되도록 변경 ([#67](https://github.com/goorm-dev/gds/issues/67)) ([5c3c439](https://github.com/goorm-dev/gds/commit/5c3c4390a37b23e9d972095c01de52582457daae))
-   **TopBanner:** TopBanner 컴포넌트 구조 변경 및 UI 이슈 수정 ([#68](https://github.com/goorm-dev/gds/issues/68)) ([3bc7f47](https://github.com/goorm-dev/gds/commit/3bc7f47aa5fcb4b8b11a550bec529ed5b874441e))

### [1.6.1](https://github.com/goorm-dev/gds/compare/v1.6.0...v1.6.1) (2023-02-07)

**Note:** Version bump only for package gds

## [1.6.0](https://github.com/goorm-dev/gds/compare/v1.5.0...v1.6.0) (2023-02-07)

### New Features

-   **ButtonToggleGroup:** Strecth UI 추가 ([#52](https://github.com/goorm-dev/gds/issues/52)) ([67897e1](https://github.com/goorm-dev/gds/commit/67897e17150f2d39296d3df2f643232c380421ad))
-   **Form:** Form 스토리 작성 ([#37](https://github.com/goorm-dev/gds/issues/37)) ([bcec199](https://github.com/goorm-dev/gds/commit/bcec199610f0846bff5a3725e2dd36f83b8d9d36))
-   **Input:** Input suffix 기능 추가 ([#36](https://github.com/goorm-dev/gds/issues/36)) ([39d3efb](https://github.com/goorm-dev/gds/commit/39d3efb2c83dec27ac1516a8627ec214e26befdf))
-   **Input:** Input suffix 기능 추가 ([#57](https://github.com/goorm-dev/gds/issues/57)) ([bd661b0](https://github.com/goorm-dev/gds/commit/bd661b037597258d580b904126099f74c3f17f1b))
-   **Toastify:** toastContainer className prop 추가 ([#59](https://github.com/goorm-dev/gds/issues/59)) ([7a60e53](https://github.com/goorm-dev/gds/commit/7a60e5314d0cc417b3e6d7662a96a736fc546b13))

### Bug Fix

-   **common:** Production 환경에서 GDS 패키지의 css 파일이 우선순위 밀리는 오류 해결 ([#60](https://github.com/goorm-dev/gds/issues/60)) ([fbf350c](https://github.com/goorm-dev/gds/commit/fbf350c0f61035105299395aee028823956e676b))

### Other

-   **common:** GDS release에 gds-charts와 gds-toastify 추가 ([e79be17](https://github.com/goorm-dev/gds/commit/e79be171a53c17c70d763a35b4560ab5936ca21f))
-   GDS 모노레포 환경 개선 및 gds-charts 패키지 추가 ([#50](https://github.com/goorm-dev/gds/issues/50)) ([5be9d34](https://github.com/goorm-dev/gds/commit/5be9d34d85281f2299a51d9a7ae2f2a35aec8abc)), closes [#49](https://github.com/goorm-dev/gds/issues/49)

## [1.5.0](https://github.com/goorm-dev/gds/compare/v1.4.0...v1.5.0) (2023-01-11)

### New Features

-   **common:** ts와 js 혼용 가능하도록 eslint 및 tsconfig 수정 ([#28](https://github.com/goorm-dev/gds/issues/28)) ([ea8519e](https://github.com/goorm-dev/gds/commit/ea8519eeeeab1b8af338f972bde65ea4e556e7ef))

### Bug Fix

-   **gds-icons:** IdCardIcon 안보이는 오류 해결 ([#54](https://github.com/goorm-dev/gds/issues/54)) ([2b60c81](https://github.com/goorm-dev/gds/commit/2b60c818a1c2972d06c610a7c83691d5d4c9d275))

## [1.4.0](https://github.com/goorm-dev/gds/compare/v1.3.3...v1.4.0) (2023-01-02)

### Bug Fix

-   **common:** IconComponent에서 color prop이 정상 동작하도록 수정 ([#47](https://github.com/goorm-dev/gds/issues/47)) ([0958274](https://github.com/goorm-dev/gds/commit/0958274c08d29bb5f56cfb34cd497700c40a3c7f))

### New Features

-   **icons:** GiftIcon, AssignmentIcon 추가 및 수정 ([#51](https://github.com/goorm-dev/gds/issues/51)) ([b4a35d0](https://github.com/goorm-dev/gds/commit/b4a35d08077bcf7e9a48d23cf3d595fe70d7528d))

### [1.3.3](https://github.com/goorm-dev/gds/compare/v1.3.2...v1.3.3) (2022-12-29)

### New Features

-   **Badge:** 뱃지 스토리 추가 ([#30](https://github.com/goorm-dev/gds/issues/30)) ([0e0c444](https://github.com/goorm-dev/gds/commit/0e0c444a23515f2e67ebc71c4439431cc0b1c6f3))
-   **Button:** innerClassName Prop 추가 및 style 속성 변경 ([#45](https://github.com/goorm-dev/gds/issues/45)) ([08328d8](https://github.com/goorm-dev/gds/commit/08328d8a0950661ce3cd94e137ce1da832ef4c0a))

### Documentation

-   **common:** Compound 컴포넌트에 displayName 적용 ([#46](https://github.com/goorm-dev/gds/issues/46)) ([a7f9087](https://github.com/goorm-dev/gds/commit/a7f908793324a80ec188e7d61929e8c4c283937b))

### Bug Fix

-   **DashboardFrame:** onClickSideNav defaultProp 추가 ([#48](https://github.com/goorm-dev/gds/issues/48)) ([b2f6863](https://github.com/goorm-dev/gds/commit/b2f6863554b1becc4b293c5615342191eab968de))

### [1.3.2](https://github.com/goorm-dev/gds/compare/v1.3.1...v1.3.2) (2022-12-21)

### Bug Fix

-   **Button:** pointer-events 오타 수정 ([#43](https://github.com/goorm-dev/gds/issues/43)) ([dd0d1b4](https://github.com/goorm-dev/gds/commit/dd0d1b4dcbb1ff342d66ed054fc46e0969b2701e))
-   **DatePicker:** onDropdownToggle 오타 수정 ([#44](https://github.com/goorm-dev/gds/issues/44)) ([4b255bf](https://github.com/goorm-dev/gds/commit/4b255bf19e3ee171530039fd2fe62f90ea30f5d2))

### [1.3.1](https://github.com/goorm-dev/gds/compare/v1.2.0...v1.3.1) (2022-12-21)

### Bug Fix

-   **Button:** 버튼 하위 이벤트 막음 ([#42](https://github.com/goorm-dev/gds/issues/42)) ([3063fbc](https://github.com/goorm-dev/gds/commit/3063fbcf4ade09a9a12cc2c4d20836b3e237c5d8))

## [1.3.0](https://github.com/goorm-dev/gds/compare/v1.2.0...v1.3.0) (2022-12-16)

### Bug Fix

-   **Alert:** 스타일 수정 ([#27](https://github.com/goorm-dev/gds/pull/27))
-   **DatePicker:** ref, onDropdownToggle prop 추가 및 defaultDate 오류 해결 ([#31](https://github.com/goorm-dev/gds/issues/31)) ([1973695](https://github.com/goorm-dev/gds/commit/19736954a8659e245ddc5853111f1fe586edef20))

### New Features

-   **common:** goormstrap v4.29.0 적용 ([#38](https://github.com/goorm-dev/gds/issues/38)) ([4bd4461](https://github.com/goorm-dev/gds/commit/4bd44616b205f098ff87f35a5043ab529bb7ff12))
-   **Icon:** LocationIcon 변경 ([#39](https://github.com/goorm-dev/gds/pull/39/files))
-   **TextButton:** 컴포넌트 생성 및 스토리 작성 ([#24](https://github.com/goorm-dev/gds/pull/24))
-   **DashboardFrame:** onClickSidnav prop 추가 ([#25](https://github.com/goorm-dev/gds/issues/25)) ([69e2998](https://github.com/goorm-dev/gds/commit/69e29984f30a06081b9f1137fb688c1d2ea240d7))
-   **Dropdown:** Dropdown 스토리 추가 ([#26](https://github.com/goorm-dev/gds/issues/26)) ([32d7b13](https://github.com/goorm-dev/gds/commit/32d7b1338fef6279a79298b1f4bde5e72444b589))

### Build System

-   **common:** gds-toastify 모노레포 구성 및 스토리북 작성 ([#29](https://github.com/goorm-dev/gds/issues/29)) ([ceb52a9](https://github.com/goorm-dev/gds/commit/ceb52a99ed2f6d83442b7834a05580a11fae6181))
-   **common:** goorm-storybook.css 를 없애고, 컴포넌트 스타일을 컴포넌트 빌드 파일 내부에 포함되도록 변경 ([#40](https://github.com/goorm-dev/gds/issues/40)) ([b0fe102](https://github.com/goorm-dev/gds/commit/b0fe102f9e177782772b605606536b7ef1a7903a))

### Other

-   **common:** PR 리뷰어 workflow 등록 ([#35](https://github.com/goorm-dev/gds/pull/35))
-   **common:** PR 템플렛 생성 ([#32](https://github.com/goorm-dev/gds/issues/32)) ([4179f2e](https://github.com/goorm-dev/gds/commit/4179f2e181073551cef76afabac39ea39cef0215))

## [1.2.0](https://github.com/goorm-dev/gds/compare/v1.1.0...v1.2.0) (2022-11-23)

### New Features

-   **all:** GDS S3 업로드 및 슬랙 메세지 알람 기능 ([#16](https://github.com/goorm-dev/gds/issues/16)) ([5733013](https://github.com/goorm-dev/gds/commit/5733013e7ab9b8b233aa213bd12a6acba9582dcc))
-   **Button:** 버튼 컴포넌트에 아이콘 추가 및 PropTable 컴포넌트 개발 ([#21](https://github.com/goorm-dev/gds/issues/21)) ([152b50a](https://github.com/goorm-dev/gds/commit/152b50a12898d86c894fbf9111469dc7e3b9c8f5))
-   **HScrollTable:** 비율에 따라 cell이 늘어나도록 추가 ([4b37a06](https://github.com/goorm-dev/gds/commit/4b37a06f85780136b10ee3f77553e33e514d3730))
-   **HScrollTable:** isRowHover 추가 ([47bb4f9](https://github.com/goorm-dev/gds/commit/47bb4f9c6f6f6bda4d7a7e34d8785303944f2819))
-   **Skeleton:** Animation 카테고리 생성 및 Skeleton 컴포넌트 추가 ([#17](https://github.com/goorm-dev/gds/issues/17)) ([9c48f61](https://github.com/goorm-dev/gds/commit/9c48f619f860d0c8fff3c8f86381c9d14e85243d))

### Bug Fix

-   **all:** tsx 빌드 오류 해결 ([#22](https://github.com/goorm-dev/gds/issues/22)) ([65c370a](https://github.com/goorm-dev/gds/commit/65c370a779a0867c1402d32956cbc18f04cb3992))
-   **Avartar:** border color 수정 ([#13](https://github.com/goorm-dev/gds/issues/13)) ([9f06fd8](https://github.com/goorm-dev/gds/commit/9f06fd8f3d5b77d4670d6b4a1d37a7eeabab8979))
-   **DashboardFrame:** 반응형 breakpoint 992에서 991로 변경 ([#19](https://github.com/goorm-dev/gds/issues/19)) ([6207665](https://github.com/goorm-dev/gds/commit/6207665671782ef12c6b3b63f0f4adc17a1ea6d4))
-   **GoormNavbar:** isScollingDown useEffect deps에 추가 ([#18](https://github.com/goorm-dev/gds/issues/18)) ([b92a70a](https://github.com/goorm-dev/gds/commit/b92a70a3c7a1837ebe8c325a686c95997221acae))
-   **icons:** icons 폴더명 변경 ([4e44f3f](https://github.com/goorm-dev/gds/commit/4e44f3f90cb62b61606936c9148ac1d240b7700f))
-   **HScrollTable:** row.id를 row.index로 수정 ([a45db79](https://github.com/goorm-dev/gds/commit/a45db79f4358ad0bc18518d99a0070f993ac0979))
-   **HScrollTable:** FixedColumnDropdown을 TableDropdown으로 수정 ([80ca9b5](https://github.com/goorm-dev/gds/commit/80ca9b5ff7ef76338d8d1bb6b7e78b65d57fac9f))

### Other

-   **all:** CD 로직 수정 ([198612f](https://github.com/goorm-dev/gds/commit/198612f938b99a20d09f54ee5b9967e69f7a1a2d))
-   **all:** CD 로직 트리거, master 브랜치로 변경 ([615fc74](https://github.com/goorm-dev/gds/commit/615fc74e6a3f723ab1b4bcf7b5dc79ca95775bd4))

## [1.1.0](https://github.com/goorm-dev/gds/compare/v1.0.2...v1.1.0) (2022-11-02)

### Bug Fix

-   margin-top 수정 ([362e32e](https://github.com/goorm-dev/gds/commit/362e32e5edfb65734ee0344139c47ba41df861ba))
-   props 수정 ([0d0ee60](https://github.com/goorm-dev/gds/commit/0d0ee6067bd39a0bf1700a9dac4809c4e8ce8d9a))
-   react-table 버전수정 ([219513f](https://github.com/goorm-dev/gds/commit/219513f26b5e4c807906eaf1d35f8d419d65f759))
-   resize observer 로직 수정 ([3806011](https://github.com/goorm-dev/gds/commit/380601147ed78c83fd93deb470ca9f2ac8e9cef3))
-   resizer 수정 ([19c4598](https://github.com/goorm-dev/gds/commit/19c45983838070ae11b638954206c3b7e85799c6))

### New Features

-   **gds-icons:** AssignmentIcon, TestIcon 추가 ([#14](https://github.com/goorm-dev/gds/issues/14)) ([e4fad46](https://github.com/goorm-dev/gds/commit/e4fad468e6daa77d3f6923bad769ab64abc891d1))
-   **gds-icons:** Figma API 아이콘 스크립트 추가 및 수정 ([#15](https://github.com/goorm-dev/gds/issues/15)) ([729fafb](https://github.com/goorm-dev/gds/commit/729fafbed87345d8630288fe1bbbe44c29d5a439))

### [1.0.2](https://github.com/goorm-dev/gds/compare/v1.0.1...v1.0.2) (2022-10-17)

### Bug Fix

-   docs 수정 ([5e9e6fb](https://github.com/goorm-dev/gds/commit/5e9e6fb0fa56f04c671ae68179de983796eb875b))
-   **gds-icons:** legacy Icon 추가 ([be278e2](https://github.com/goorm-dev/gds/commit/be278e2f1385f24cf35c719756bb3ba61906b8b4))
-   **gds-tables:** 빌드 오류 해결 ([00aa4ea](https://github.com/goorm-dev/gds/commit/00aa4ea342f6994fb1a62c6c803c74a3d6b572aa))

### [1.0.1](https://github.com/goorm-dev/gds/compare/v1.0.0...v1.0.1) (2022-10-04)

### Bug Fix

-   **gds-components:** react-avatar peerdependecy 버전 수정 ([905a757](https://github.com/goorm-dev/gds/commit/905a757292f0be8b56bcb85e959c3065acb80c48))

## [1.0.0](https://github.com/goorm-dev/gds/compare/v0.4.0...v1.0.0) (2022-09-30)

### New Features

-   **all:** welecome to GDS ([b6abd95](https://github.com/goorm-dev/gds/commit/b6abd9554e9eaf0c30775a73a2da77c7c622b16d))
