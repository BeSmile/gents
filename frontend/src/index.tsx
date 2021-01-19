/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-01-15 12:19:27
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-19 10:45:32
 */
declare var window: any;
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import APP from './router';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import injectReducers from '@utils/injectReducers';
import createSagaMiddleware from 'redux-saga';
import getSaga from '@utils/getSaga';

// MODELS_PATH 根据模型来进行model的注册
let models = MODELS_PATH.map((item: string) => ( require(`./models/${item}`).default ));

// 创建saga中间件方法
const sagaMiddleware = createSagaMiddleware();
// 根据model 生成对的reducer对象
const rootReducer = injectReducers(models);
// 创建store 并且添加saga中间件
const store =  createStore(rootReducer, applyMiddleware(sagaMiddleware));

models.forEach(function(model) {
  // 生成对应的saga对象
  sagaMiddleware.run(getSaga(model.effects, model))
});

window.renderSystem = function(containerId) {
    ReactDOM.render(
        <Provider store={store}>
            <APP/>
        </Provider>
        , document.getElementById(containerId));
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
}
window.renderSystem('root');

window.unmountSystem = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
