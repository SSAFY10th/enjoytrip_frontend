### 프로젝트 개요

이 프로젝트는 여행 관련 정보를 시각적으로 제공하는 Vue.js 기반의 웹 애플리케이션입니다. 사용자는 지도를 통해 여행지를 찾아보고, 다양한 필터와 옵션을 사용하여 원하는 정보를 검색할 수 있습니다.

### 루트 경로에 `.env` 파일을 생성하고 아래 환경변수를 입력해주세요.

```
VITE_OPEN_DATA_API_END_POINT=https://apis.data.go.kr/B551011/KorService1/
VITE_OPEN_DATA_SERVICE_KEY=14DjtZu4DJ5vkaRktTKgCQhFeLW2wDK0UNf3ZZ7Y7z%2BUZWd457sU%2F09AEHtcJNvgtiwMRzI8sGC0Mu0MKG82%2Bg%3D%3D

VITE_MAIN_API_END_POINT=http://localhost/api
VITE_SIGN_AUTH_JOIN=join
VITE_SIGN_AUTH_LOGIN=login
VITE_SIGN_AUTH_LOGOUT=logout
VITE_SIGN_AUTH_CHECK_ID=checkId
VITE_SIGN_SEARCH_USER=searchUser
VITE_SIGN_CREATE_PLAN=create
VITE_SIGN_GET_PLANLIST=userList
```

### 화면 구성

![메인화면.gif](public%2Freadme%2F%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.gif)
메인 화면

### 주요 기능 및 구성요소

1. **지도 표시**: `KakaoMap` 컴포넌트를 통해 여행지를 지도 상에서 확인할 수 있습니다.

2. **하단 시트**: `BottomSheet` 컴포넌트를 통해 여행 정보를 검색하고, 다양한 옵션을 설정할 수 있습니다.

3. **스위치 및 셀렉트**: `Switch` 컴포넌트를 통해 다양한 옵션을 토글하고, `Select` 컴포넌트를 사용하여 지역을 선택할 수 있습니다.

4. **검색 기능**: 검색어를 입력하고 버튼을 클릭하여 여행지를 검색할 수 있습니다.

### 사용된 라이브러리 및 리소스

- **Vuetify**: Material Design 기반의 UI 컴포넌트 라이브러리
- **Font Awesome**: 검색 아이콘 등을 위해 사용

### 개발 환경 및 실행 방법

1. **의존성 설치**: 프로젝트 루트에서 `npm install` 명령어를 실행하여 필요한 라이브러리를 설치합니다.

2. 환경변수 등록 : 프로젝트 루트 경로에 `.env` 파일을 생성하고 아래 환경변수를 등록해주세요.

   ```
   VITE_OPEN_DATA_API_END_POINT=https://apis.data.go.kr/B551011/KorService1/
   VITE_OPEN_DATA_SERVICE_KEY=14DjtZu4DJ5vkaRktTKgCQhFeLW2wDK0UNf3ZZ7Y7z%2BUZWd457sU%2F09AEHtcJNvgtiwMRzI8sGC0Mu0MKG82%2Bg%3D%3D
   ```

3. **개발 서버 실행**: `npm run dev` 명령어를 사용하여 개발 서버를 실행합니다.

4. **브라우저에서 확인**: 기본적으로 `http://localhost:5173`에서 앱을 확인할 수 있습니다.

### 기여 방법

이 프로젝트에 기여하고 싶다면, 이 저장소를 포크하고 개선 사항을 추가한 후 풀 리퀘스트를 보내주세요.

### 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포되었습니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.

### 소감

- 용상윤  
  소감 작성해주세용

- 김신영  
   JSP, Vanilla JavaScript에 이어서 Vue 를 이용하여 프론트 앤드 개발을 진행하게 되었습니다.
  백앤드 개발자라고 생각했기 때문에 프론트는 나중에 알아도 되겠지 생각했지만 어떤 과정을 거쳐 백앤드로 요청을 보내고,
  어떤 이유로 보내는지 알게 됨으로써 나의 역할은 무엇인지 다시 한 번 생각해볼 수 있는 기회였습니다.
  특히 부분적으로 문법을 아는 것과 다르게 "프로젝트 전체를 파악하고 각 컴포넌트나 js파일 등을 어떻게 자르고 관리할지 결정하는 통찰력은 다양한 프로젝트 경험에서 깨달아야되는 것이구나"
  라는 점을 느끼게된 경험이었습니다.
