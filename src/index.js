import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchRobots, getRobots } from './redux/reducers';

import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const rootReducers = combineReducers({searchRobots, getRobots});
const store = createStore(rootReducers, applyMiddleware(logger,ReduxThunk));

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Hello message={'Yo'} name={'lo lo'} />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div>
//   {
//     robots.map(item => {
//      return <Card robot={item}  />
//     })
//   }
//   </div>,
//   document.getElementById('root')
//
// )

//
// ReactDOM.render(
//   <div>
//      <CardList robot={robots}  />
//   </div>,
//   document.getElementById('root')
//
// )
//ReactDOM.render(
//   <div>
//     <CardList robot={robots}/>
//   </div>,
//   document.getElementById('root')
//
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
