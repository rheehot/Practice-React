# 간단한 쇼핑몰 만들기

## 프로젝트 환경 설정

```
$ npm install -g create-react-app
$ create-react-app e-commerce
$ cd e-commerce
```

## Router

yarn을 사용해서 해당 라이브러리를 추가하세요.

```
$ yarn add react-router-dom
```

그리고 관련 Ref는 아래 링크를 참고하세요.

* Ref : https://reacttraining.com/react-router/web/guides/quick-start

## Form

상품 이미지 및 관련 데이터를 별도로 코딩하는게 너무 불편해서, 해당 코드는 다른 예제에서 복사해서 사용하는 것으로 결정하였음

* Ref: https://github.com/jeffersonRibeiro/react-shopping-cart

## Redux

### Redux의 3가지 원칙

```
1. Single source of turth
2. State is read only
3. Changes using pure functions
```

### Redux 데이터 흐름

```
1. Action
2. Root Reducer
3. Store
4. DOM
```

### FLUX 패턴

```
Action -> Dispatcher -> Store -> View
```