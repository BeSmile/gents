/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2021-01-15 12:19:27
 * @LastEditors: linjinzhi
 * @LastEditTime: 2021-01-15 15:13:02
 */
export default [{
    path: '/qqsg',
    component: 'layouts/BaseLayout',
    routes: [{
        path: '/resistance',
        component: 'qqsg/Resistance/index',
    }, {
        path: '/fore',
        component: 'qqsg/Fore/index',
    }, {
        path: '/experience',
        component: 'qqsg/Experience/index',
    }, {
        path: '/',
        component: 'qqsg/Home/index',
    },]
}, {
    path: '/domain',
    // component: '',
    routes: [
        {
            path: '/',
            component: 'Home/index',
            // authority: [],
        }
    ]
}, {
    path: '/login',
    // component: '',
    routes: [
        {
            path: '/',
            component: 'Login/index',
            // authority: [],
        }
    ]
}, {
  path: '/',
  // component: '',
  routes: [
      {
          path: '/',
          component: 'Home/index',
          // authority: [],
      }
  ]
}]
