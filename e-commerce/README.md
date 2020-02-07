# 간단한 쇼핑몰 만들기

## 프로젝트 환경 설정

```
$ npm install -g create-react-app
$ create-react-app e-commerce
$ cd e-commerce
```

## Router

* Ref : https://reacttraining.com/react-router/web/guides/quick-start

```
$ yarn add react-router-dom
```

### URL 이동시키기
* Link : a 태그같음, SPA 특성상 a태그 처럼 새로고침이 발생하면 안되기에, a 태그를 기반으로 기능상의 개선을 통해 새로고침없이 다른 뷰를 렌더 하기위해 사용하는 것
* history.push : Route는 컴포넌트에 기본적으로 match, history, location 이라는 것을 넘겨줌, 이때 histroy.push(‘/인자’) 함수에 인자를 넣어주면 해당 인자로 url을 새로고침 없이 이동시켜줌

### match, history, location
* history
  * 브라우저의 window.history와 유사
  * 주소를 임의로 변경하거나 되돌아 갈 수 있음
  * SPA 특성을 지키기 위해 페이지 전체를 리로드 하지 않음
* location
  * 브라우저의 window.location와 유사
  * 현재 페이지 정보를 지니고 있음
  * url의 query 정보를 search라는 프로퍼티에 가지고 있음
* match
  * Route의 path에 정의한 것과 매칭된 정보를 가지고 있음
  * params 에 설정한 파라미터를 담고 있음
  