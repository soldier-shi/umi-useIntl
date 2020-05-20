import { history } from 'umi';

export function render(oldRender) {
  oldRender()
  // const isLogin = localStorage.getItem('token')
  // if (isLogin) {
  //   oldRender()
  // } else {
  //   history.push('/')
  //   oldRender()
  // }
}


export function onRouteChange({ location, routes, action }) {
  // const isLogin = localStorage.getItem('token')
  // if (!isLogin && location.pathname !== '/') {
  //   history.push('/')
  // }
}
