import axios, { AxiosRequestConfig, Canceler, AxiosResponse, Method } from 'axios'
import qs from 'qs'
import { message } from 'antd'
import { history, useIntl } from 'umi'
import config from '@/api/config'

setTimeout(() => {
  const intl = useIntl()
}, 100)

function requestUrl (url: string) {
  if (config.isProxy) {
    return config.proxyUrl + url
  } else {
    return config.noProxyUrl + url
  }
}

// axios
async function send(method: Method, url: string, data: any = {}, options: AxiosRequestConfig = {}) {
  url = requestUrl(url)
  if (method === 'get' && data) {
    options.params = data
  }
  if (method === 'post' && data) {
    data = qs.stringify(data)
  }
  options.headers = {
    // Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: localStorage.getItem('token') || undefined,
  }
  return axios({
    method,
    url,
    data,
    ...options
  }).then((res: AxiosResponse )=> {
    // 存token
    const token = res.headers.authorization
    if (token) {
      window.localStorage.setItem('token', token)
    }
    if (res && res.status === 200) {
      if (!res.data) {
        message.error('操作频繁，请在20s之后操作！')
        return
      }
      return Promise.resolve(res.data)
    }
  }).catch(({ response }) => {
    if (!response) {
      message.error('无法连接到服务器！')
      return
    }
    if (response.status && response.statusText) {
      message.error(`${response.status}：${response.statusText}`)
    }
    if (response.status === 401 || response.status === 403) {
      history.push('/')
      return
    }
    return Promise.reject(response)
  })
}

export default{
  /**
   * 作者：Chris
   * 方法说明：axios封装调用后台接口方法
   * @method 方法名
   * @param {参数类型：string} 参数名：url 参数说明：接口地址
   * @param {参数类型：object} 参数名：data 参数说明：入参
   * @param {参数类型：object} 参数名：options 参数说明：配置（请求头，超时时间等等 具体参考：https://www.kancloud.cn/yunye/axios/234845）
   * @param {返回值类型：function} 返回值说明
   */
  get (url: string, data: object = {}, options: AxiosRequestConfig = {}) {
    return send('get', url, data, options)
  },
  post (url: string, data: object = {}, options: AxiosRequestConfig = {}) {
    return send('post', url, data, options)
  },
  all (arr: []) {
    return axios.all(arr).then(axios.spread((...arg) => { return arg }))
  }
}

