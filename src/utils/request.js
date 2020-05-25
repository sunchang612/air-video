import Taro from '@tarojs/taro'
import { baseUrl } from './config'

export default {
  
  baseOpeions(params, method) {
    Taro.showLoading()

    const { url, data } = params
    const options = {
      url: `${baseUrl}${url}`,
      data,
      method,
      header: {
        'content-type': 'application/json',
      }
    }
    return Taro.request(options).then((data) => {
      Taro.hideLoading()
      return data
    }).catch(() => {
      Taro.hideLoading()
    })
  },

  get(url, data) {
    const option = { url, data }
    return this.baseOpeions(option, 'GET')
  },
  post(url, data) {
    const option = { url, data}
    return this.baseOpeions(option, 'POST')
  }
}