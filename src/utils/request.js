import axios from 'axios'
import { Loading, Message } from 'element-ui'
// 超时时间
axios.defaults.timeout = 120000

// http请求拦截器
var loadinginstace, noLoading
axios.interceptors.request.use(
  config => {
    // element ui Loading方法
    loadinginstace =
      !noLoading &&
      Loading.service({
        fullscreen: true,
        text: '正在加载...',
        background: 'rgba(255, 255, 255, 0.3)'
      })
    //设置请求头
    config.headers['Authorization'] = `${sessionStorage.getItem('TOKEN')}`
    return config
  },
  error => {
    loadinginstace && loadinginstace.close()
    Message.error({
      message: '加载超时'
    })
    return Promise.reject(error)
  }
)
// http响应拦截器
axios.interceptors.response.use(
  data => {
    // 响应成功关闭loading
    loadinginstace && loadinginstace.close()
    return data
  },
  error => {
    loadinginstace && loadinginstace.close()
    return Promise.reject(error)
  }
)
const request = param => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${param.url}`,
      method: param.method || 'GET',
      params: param.params || '',
      data: param.data || ''
    })
      .then(res => {
        if (Number(res.data.code) === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
          Message.error({
            message: res.data.message
          })
        }
      })
      .catch(err => {
        let message = ''
        switch (err.response.status) {
          case 401:
            message = '没有操作权限,请联系管理员'
            break
          case 403:
            message = '账号已被冻结，拒绝访问'
            break
          case 406:
            message = '无操作权限，请联系管理员为角色赋权'
            break
          default:
            message = '系统错误,，请联系管理员'
            break
        }
        Message.error({
          message: message,
          duration: 6000
        })
      })
  })
}
export { axios, request }
