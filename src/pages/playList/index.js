import { useRouter, useEffect, useState } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import request from '../../utils/request'
import './index.scss'

function PlayList() {
  const router = useRouter()
  const [playList, SetPlayList] = useState([])
  const id = router.params.id


  const getPlayList = async() => {
    const { data } = await request.get(`/users/userVideos/${id}`)
    console.log('获取播放记录--->', data)
    SetPlayList(data)
  }

  useEffect(() => {
    getPlayList()
  }, [id])

  const onClickPlayPage = () => {

  }

  return (
    <View className="play-container">
      <Text>播放全部</Text>
      <View className="list-container">
        {
          playList.map(item => {
            return(
              <View className="play-item" onClick={() => onClickPlayPage} key={item.id}>
                <View className="play-name">{item.name}</View>
                <AtIcon value="play" size="24"></AtIcon>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

PlayList.config = {
  navigationBarTitleText: '播放列表',
}

export default PlayList