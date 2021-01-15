import { call, put, takeLatest, fork } from 'redux-saga/effects'
import * as sagaEffects from 'redux-saga/effects';

function getWatcher(key, sagaWithOnEffect) {
    const _this = this;
    return function*() {
      var curry = function (action) {
          // var args = [].slice.call(arguments, 1);
          return sagaWithOnEffect.call(_this, action, { call, put, fork });
      };
      yield takeLatest(key, curry);
    };
}

export default function getSaga(effects, model) {
  return function *() {
    for (const key in effects) {
      if (Object.prototype.hasOwnProperty.call(effects, key)) {
        const watcher = getWatcher.call(effects, `${model.namespace}/${key}`, effects[key]);
		// 将 watcher 分离到另一个线程去执行
        const task = yield sagaEffects.fork(watcher);
		// 同时 fork 了一个线程，用于在 model 卸载后取消正在进行中的 task
		// `${model.namespace}/@@CANCEL_EFFECTS` 的发出动作在 index.js 的 start 方法中，unmodel 方法里。
        yield sagaEffects.fork(function *() {
          yield sagaEffects.take(`${model.namespace}/@@CANCEL_EFFECTS`);
          yield sagaEffects.cancel(task);
        });
      }
    }
  };
}
