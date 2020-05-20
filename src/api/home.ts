import http from '@/utils/http'

export default {
  subsetsum(data = {}) {
    return http.get('/account/subsetsum', data)
  }
}
