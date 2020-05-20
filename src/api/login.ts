// 试用api
import http from '@/utils/http'

export default {
  login(data = {}) {
    return http.post('/account/auth/login', data)
  },
  logout(data = {}) {
    return http.get('/account/auth/logout', data)
  }
}
