import App from '../App'

// 懒加载组件,food为chunkName
const food = r => require.ensure([], () => r(require('../page/food/food'), 'main'))
const login = r => require.ensure([], () => r(require('../page/login/login'), 'main'))
const welcome = r => require.ensure([], () => r(require('../page/credit/welcome'), 'main'))
const main = r => require.ensure([], () => r(require('../page/credit/main'), 'main'))

export default [{
  path: '/',
  component: App,// 顶级路由，对应index.html
  children: [
    {
      path: '',
      redirect: '/welcome'
    },
    // 特色商铺列表页
    {
      path: '/food',
      component: food
    },
    {path:'/login',
    component:login
    },
    {path:'/welcome',
      component:welcome
    },
    {path:'/main',
      component:main
    }
  ]
}]
