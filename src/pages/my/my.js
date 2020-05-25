import Taro, { useState } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

function My () {
  
  return(
    <View className="home-container">
      这里是我的页面
    </View>
  )
}

My.config = {
  navigationBarTitleText: '我的'
}

export default My