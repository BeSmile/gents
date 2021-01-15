import { combineReducers } from 'redux';

export default function injectReducers(models) {
    let rootReducers = {};

    models.forEach(model=> {
        const reducers = model.reducers || {};
        const namespace = model.namespace; //命名空间
        let initialState = model.state;//初始化reduce state值
        if (0 === Object.keys(reducers).length) {
            rootReducers[namespace] = (state = initialState) => (state);
        }
        const fn = function(state = initialState, action) {
            if (reducers.hasOwnProperty(action.type)) {
                // 匹配reducer函数 生成结果
                const tmpState = reducers[action.type](state, action);
                return {
                    ...state,
                    ...tmpState,
                }

            } else {
                return state;
            }
        };
        rootReducers[namespace] = fn;
    });
    return combineReducers(rootReducers);
}
