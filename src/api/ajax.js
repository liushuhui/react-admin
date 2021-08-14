/*
封装axios库
函数的返回值是promise对象
1. 优化1: 统一处理请求异常?
    在外层包一个自己创建的promise对象
    在请求出错时, 不reject(error), 而是显示错误提示
2. 优化2: 异步得到不是reponse, 而是response.data
   在请求成功resolve时: resolve(response.data)
 */
import axios from 'axios';
import  { message } from 'antd';
axios.defaults.baseURL = 'http://localhost:7001';
// axios.defaults.headers.common['token'] = token;
// 添加请求拦截器
axios.interceptors.request.use( config => {
  const token = localStorage.getItem('token'); // 存储的token要在请求拦截里获取
  const weatherUrl = 'https://restapi.amap.com/v3/weather/weatherInfo' //天气api不能带token
  token && config.url !=  weatherUrl ? config.headers.token = token : delete config.headers.token;
  return config;
}, error => {
  return Promise.reject(error);
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log('response',response);
  return response.data;
}, function (error) {
  const {response} = error, 
        status = response.status,
        message = response.data.message;
  
  // console.log('objerror.responseect',response)
  if (status === 401 && message === 'jwt expired') {
    alert('登录过期，请重新登录...');
    window.location.href = '/login';
  } else if(status === 401 && (message === 'jwt malformed' || message === '没有token')) {
    alert('请先登录...');
    window.location.href = '/login';
  } return Promise.reject(error);
});
export default function ajax(url, params={}, type='GET') {
  return new Promise(resolve => {
    let promise;
    if (type === 'GET') {
      promise = axios.get(url, {params}, {withCredentials: true});
    } else {
      promise = axios.post(url, params, {withCredentials: true});
    }
    // 如果响应成功，调用resolve
    promise.then(response => {
      // console.log('axios response',response)
      resolve(response);
    }).catch(error => {
      message.error(`请求出错了：${error.message}`);
    })
  })
  
}