import Taro, { useState } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { useSelector, useDispatch } from '@tarojs/redux'

import './record.scss'

function Index (){
  const [tabList] = useState([
    {
      title: '首页',
      iconType: 'home'
    },
    {
      title: '播放记录',
    },
    {
      title: '我的',
      iconType: 'user'
    }
  ])

  const counter = useSelector(state => state.navigation)
  const dispatch = useDispatch()
  
  const onChang = (value) => {
    if(value === counter.currentPage) return
    dispatch({
      type: 'NAVCHANGE',
      value
    })
  }

  // 这种方式 在小程序中 回报 currentPage is not defined
  // const currentPage = () => {
  //   console.log('current---->', current)
  //   if (current === 0) {
  //     return <HomePage/>
  //   }
  // }

  return (
    <View className='air-video-container'>
      <View>这里是记录页面</View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '播放记录'
}

export default Index
