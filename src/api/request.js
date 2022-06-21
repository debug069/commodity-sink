import axios from 'axios'
// 引入进度条npm
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 在发送请求之前执行一些操作
  nProgress.start()
  return config
}, (error) => {
  // 使用请求错误执行一些操作
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 任何位于 2xx 范围内的状态代码都会导致触发此函数
  // 对响应数据执行操作
  nProgress.done()
  return response.data
}, (error) => {
  // 任何超出 2xx 范围的状态代码都会导致触发此函数
  // 对响应错误执行操作
  return Promise.reject(error)
})

export default request