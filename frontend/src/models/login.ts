/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-01-15 12:19:27
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-15 17:25:53
 */
var login = localStorage.getItem('login') || false;

export default {
    namespace: 'login',
    state: {
        loggedIn: login,
    },
    effects: {
        *login(state, { put }) {
            yield put({
                type: 'login',
                payload: {
                    loggedIn: true,
                }
            });
            localStorage.setItem("login", 'true');
            state.callback && state.callback();
        }
    },
    reducers: {
        login: (state, action) => {
            const { payload = {} } = action;
            return {
                ...state,
                ...payload
            };
        }
    }
}
