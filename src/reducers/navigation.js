import Taro from '@tarojs/taro'
import { NAVCHANGE } from '../constants/counter'

const INITIAL_STATE = {
  currentPage: 0
}

export default function navigation (state = INITIAL_STATE, action) {
  switch (action.value) {
    case 0:
      Taro.redirectTo({
        url: '/pages/index/index'
      })
      return {
        currentPage: 0
      }
     case 1:
      Taro.redirectTo({
        url: '/pages/record/record'
      })
      return {
        currentPage: 1
      }
     default:
       return state
  }
}
