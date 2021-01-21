/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2021-01-15 12:19:27
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-19 11:28:53
 */
export default [{
  path: '/build',
  component: 'layouts/ClassicLayout',
  routes: [{
      path: '/data',
      component: 'build/Data/index',
  }, {
    path: '/design',
    component: 'build/Design/index',
  }, {
    path: '/workflow',
    component: 'build/WorkFlow/index',
  }],
}, {
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
