import { useState, useEffect } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { useSelector, useDispatch } from '@tarojs/redux'
import CardItem from '../../components/CardItem/CardItem'
import request from '../../utils/request'

import './index.scss'

function Index (){

  const counter = useSelector(state => state.navigation)
  const dispatch = useDispatch()
  const [ kidList, SetKids ] = useState([])
  
  // 获取信息
  const getInfo = async() => {
    const { data } = await request.get('/users/authorList')
    console.log('返回结果--->', data)
    SetKids(data)
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <View className='air-video-container'>
      <View className="left-title">
        宝贝口袋
      </View>
      
      <View className="slide-wrapper">
        {
          kidList.map((item) => <View className="slide-wrap" key={item.id}><Image className="card-image" src="../../assets/images/123123.jpg"/>
            <Text className="card-text">{item.firstName ? item.firstName : ''}</Text>
          </View>)
        }
        {/* <View className="slide-wrap" ><CardItem style={{ display: 'inline-block' }} item={kidList[0]} /></View> */}
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

export default Index
