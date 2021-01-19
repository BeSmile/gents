import * as Api from '@services/api';

export default {
    namespace: "product",
    state: {
      products: [],
    },
    effects: {
        *fetchProduct(action, {put, call}) {
          try {
              const books = yield call(Api.fetchBook);
              console.log('fetch books', books);
              yield put({type: "addProduct", payload: books.reviews});
          } catch (e) {
              yield put({type: "USER_FETCH_FAILED", message: e.message});
          }
        }
    },
    reducers: {
        addProduct: (state, action) => {
            console.log('dish', state, 'action', action);
            return {
                state,
                products: action.payload,
            };
        }
    }
}
