import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/record/record',
      'pages/my/my',
      'pages/playList/index',
      'pages/songDetail/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/icon/home.png',
          selectedIconPath: './assets/icon/home-active.png'
        },
        {
          pagePath: 'pages/record/record',
          text: '播放记录',
          iconPath: './assets/icon/record.png',
          selectedIconPath: './assets/icon/record-active.png'
        },
        {
          pagePath: 'pages/my/my',
          text: '我的',
          iconPath: './assets/icon/my.png',
          selectedIconPath: './assets/icon/my-active.png'
        },
      ],
      selectedColor: '#6190e8',
    },
    // color: '#6190e8',
    debug: true
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
