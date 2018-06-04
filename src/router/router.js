import App from '../App'

// 懒加载组件,food为chunkName
const login = r => require.ensure([], () => r(require('../page/login/login'), 'main'))

const food = r => require.ensure([], () => r(require('../page/food/food'), 'main'))
const welcome = r => require.ensure([], () => r(require('../page/credit/welcome'), 'main'))
const main = r => require.ensure([], () => r(require('../page/credit/main'), 'main'))

const health_list = r => require.ensure([], () => r(require('../page/health/list'), 'health'))
const vue_scroll = r => require.ensure([], () => r(require('../page/health/RefreshAndInfinite'), 'health'))
const vue_better_scroll = r => require.ensure([], () => r(require('../page/health/list_better_scroll'), 'health'))
const health_score = r => require.ensure([], () => r(require('../page/health/score'), 'health'))
const health_view = r => require.ensure([], () => r(require('../page/health/view'), 'health'))

export default [{
  path: '/',
  component: App,// 顶级路由，对应index.html
  children: [
    {
      path: '',
      redirect: '/login'
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
    // 学分管理导入导出页面
    {path:'/main',
      component:main
    },
    // 健康度列表页面
    {path:'/list',
      component:health_list
    },
    {path:'/list2',
      component:vue_scroll
    },
    {path:'/betterlist',
    component:vue_better_scroll},
    // 健康度打分
    {path:'/score',
      component:health_score
    },
    // 健康度查看
    {path:'/view',
      component:health_view
    }
  ]
}]
