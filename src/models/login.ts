import loginApi from '@/api/login'
import { history } from 'umi'
import { message } from 'antd'

const local = window.localStorage
export default {
  namespace: 'login',
  state: {
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    // 登录
    *login({ payload }, { call, put }) {
      const params: {
        name,
        password
      } = payload
      const { setLoading } = payload
      try {
        const res = yield call(loginApi.login, params)
        const token = window.localStorage.getItem('token')
        if (res && res.success && token) {
          local.setItem('loginUsername', res.data.name)
          history.push('/home')
        } else if (res.code === 160105) {
          message.error('账号或者密码错误！')
        }
      } catch (error) {
        setLoading(false)
        message.error('未知错误！')
      }
    },
    // 退出
    *logout({ payload }, { call }) {
      // localStorage.removeItem('token')
      // history.push('/login')
      const res = yield call(loginApi.logout, payload)
      if (res && res.success) {
        localStorage.removeItem('token')
        history.push('/login')
      }
    }
  }
}
