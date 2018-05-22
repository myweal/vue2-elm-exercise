import App from '../App'

// 懒加载组件,food为chunkName
const food = r => require.ensure([], () => r(require('../page/food/food'), 'food'))
const login = r => require.ensure([], () => r(require('../page/login/login'), 'food'))

export default [{
  path: '/',
  component: App,// 顶级路由，对应index.html
  children: [
    {
      path: '',
      redirect: '/food'
    },
    // 特色商铺列表页
    {
      path: '/food',
      component: food
    },
    {path:'/login',
    component:login
    }
  ]
}]
