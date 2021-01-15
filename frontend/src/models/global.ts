/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-01-15 12:19:27
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-15 16:13:36
 */
import { BreadcrumbList, GlobalState,  } from './global.d';
import { DvaModelBuilder, actionCreatorFactory } from 'dva-model-creator';

let initialState: GlobalState = {
    breadcrumbs: [{
        name: '首页',
        url: '/home/'
    }, {
        name: '首页2',
        url: '/home/panel'
    }, {
        name: '首页3',
        url: '/home/resistance'
    }]
}

const actionCreator = actionCreatorFactory('global');
const updateBreadcrumb = actionCreator<any>('updateBreadcrumb');
const updateBreadcrumbReducer = actionCreator<BreadcrumbList>('updateBreadcrumbReducer');

const model = new DvaModelBuilder<GlobalState>(initialState, 'global')
  .case(updateBreadcrumbReducer, (state: GlobalState, payload: BreadcrumbList) => {
    return {
      ...state,
      breadcrumbs: payload,
    }
  })
  .takeEvery(updateBreadcrumb, function* (payload, { select, put }) {
    yield put(updateBreadcrumbReducer(payload.breadcrumbs));
  })
  .build();

export default model;