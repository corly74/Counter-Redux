import React , {Component} from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
// import App from './App';


import { compose, createStore } from 'redux';
import { Provider } from "react-redux";
import NavContainer from './Component/NavContainer';
import rootReducer from './Reducer/combineReducers'

// compose把 function 從右到左組合起來 ,大部分是搭配Google chorm的redux-devtools使用,並且使用 store enhancer 。

// 最外層JS檔案,包入Store,並且綁定Component 和 Reducer ,所以要引用Store、Component 和 Reducer 。
// 最外層JS檔案使用Provider包裹在根組件外層，使所有的子組件都可以拿state,所以要引用Provider


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// 匯入NavContainer

class App extends Component {

  render() {
    return (
      <div>
        <NavContainer></NavContainer>
      </div>
    );

  }
}

// enhancers: include redux-dev-tools

const enhacer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Create store 讓reducer資料做交換 , redux-dev-tools也是放在store監控

const store = createStore(rootReducer, enhacer);


// render component

render(

  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
