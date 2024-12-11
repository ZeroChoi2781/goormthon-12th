# Goorm Design System

구름 디자인 시스템(GDS)은 구름 전사 제품의 UI/UX 통일감과 개발자의 편의를 위해 탄생한 디자인 시스템입니다. 보다 자세한 내용은 아래 wiki를 참고해주세요.

-   [GDS와 관련 라이브러리 이해하기](https://www.notion.so/goorm/UI-KIT-1-GDS-c2729232b8cc47af80681374717852b5)
-   [GDS Monorepo 이해하기](https://www.notion.so/goorm/GDS-Monorepo-892b97a3c1de42bbb05c56fde59a7547)

<br/>
<br/>

## 🖥 Environment Support

-   node : `>=16`
-   python : `2.7`

<br/>

## 📦 Install

### npmrc 세팅

1. [github personal access tokens](https://github.com/settings/tokens) 진입
1. read package 권한 획득한 토큰 생성
1. `.npmrc` 파일 삽입

    ```shell
    # vim으로 npmrc 열기
    $ vim ~/.npmrc
    ```

    <br/>

    ```shell
    # "i"(insert) 모드로 전환 후, 아래 내용 편집
    @goorm-dev:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=[권한 획득한 github 토큰]

    # 편집 후 ":"(명령행) 모드로 전환
    # "wq"로 저장 후, vim 종료
    ```

### 모노레포 워크스페이스 별 패키지 설치

```shell
$ npm install @goorm-dev/vapor-components
$ npm install @goorm-dev/vapor-icons

# 필요한 추가 패키지 설치...
```

<br/>
<br/>

## 🔨 Usage

**Goormstrap 불러오기 (with CDN URL)**

```html
<head>
    <link
        rel="stylesheet"
        href="https://statics.goorm.io/css/goormstrap/[v버전명]/goormstrap.v4.dark.min.css"
    />
</head>
```

**Components import**

```jsx
import { Alert, UncontrolledAlert } from '@goorm-dev/vapor-components';
```

**Icons import**

```jsx
import { AiGoormeeOutlineIcon, CheckCircleIcon } from '@goorm-dev/vapor-icons';

//...

<AiGoormeeOutlineIcon width="1rem" className="AiGoormeeOutlineIcon__icon" />; // svg 사용법과 동일
```

<br/>
<br/>

## 📖 Manual

### 스토리북 용어 정리

#### 사이드바

![sidebar.png](/images/docs/readme_sidebar.png)

> 스토리북 사이드바가 이런 폴더 구조로 돼있는데, 각 계층마다 아래와 같은 의미를 가지고 있습니다.

#### 컴포넌트 그룹 ![componentGroup.png](/images/docs/readme_componentGroup.png)

> 서브 컴포넌트를 포함하는 경우 (suffix로 's'를 붙힌다.) <br/>
> ex. Avatars

#### 컴포넌트 ![component.png](/images/docs/readme_component.png)

> -   실제로 import해서 사용할 컴포넌트 명
> -   아이콘은 예외적으로 ICONS > New 에서 아이콘 이름 확인 후 사용

**유스케이스**
![usecase.png](/images/docs/readme_usecase.png)

> -   각 컴포넌트의 유스케이스
> -   컴포넌트의 상황별 예시 모습을 나타낸다.

<br /><br />

### story 작성법

#### 메타 정보 입력

```jsx
export default {
    title: `${base.split('/stories/').join('')}${filename}`,
    component: Button,
    parameters: {
        docs: {
            description: {
                component: 'This is Docs description`',
            },
        },
    },
    argTypes: {
        color: {
            description: 'This is Controls description',
        },
        className: {
            table: {
                disable: true, // controls에 안나옴
            },
        },
    },
};
```

#### Controls 생성

-   controls에는 기본적으로 컴포넌트의 propTypes에 지정된 것들이 나온다.
-   controls에는 변화가 바로 발생되는 것들만 최소한으로 보여준다.
-   예시: `className`, `innerRef` 등 제외

<br/>

#### Props Tables 생성

컴포넌트의 props 전체는 별도의 스토리로 보여준다.

```jsx
import PropTable from '_utils/PropTable';

export const PropsTable = () => {
    /**
     * stories/components/Button 참고
     * */
    return <PropTable props={props} target={Button} />;
};
```
