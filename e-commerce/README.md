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

## Redux 연습

```
$ yarn add redux redux-logger react-redux
```

* src/redux/store.js
```
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
```

* src/redux/root-reducer.js
```
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});
```

* src/redux/user/user.actions.js
```
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});
```

* src/redux/user/user.reducer.js
```
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
```

* src/App.js
``
import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

``

* src/index.js
```
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/store';

import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

```