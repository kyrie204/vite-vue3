import axios from 'axios';
import { Message } from 'element-ui';
// 我的代码里面没有写，实际上开发中肯定会用到 vue-router 的对吧
import router from '@/router';

//设置超时 全局配置
axios.defaults.timeout = 10000;

// 创建axios实例
const request = axios.create({
  // 添加默认实例配置
  baseURL: '192.168.0.1:8080/test-a',
  timeout: 1000 * 8,
});

// 请求 拦截器
request.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[${config.method}]:${config.baseURL}${config.url}`);
    }
    // 判断需不需要 token
    if (config.needToken) {
      config.headers['Authentication'] = localStorage.getItem('token');
    }
    return config;
  },
  (err) => {
    console.log(`error: ${err}`);
    return Promise.reject(err);
  }
);

// 响应 拦截器
request.interceptors.response.use(
  function (res) {
    let realRes = res.data;
    if (realRes.code !== 200) {
      // 请求失败处理
      switch (realRes.code) {
        // 特判没有权限的状态码，定时跳转到登录页
        case 401:
          setTimeout(() => {
            Message.error('未授权访问，正在跳转登录页，请重新登录');
            router.push('/login');
          }, 1500);
          break;
        default:
          // 默认弹框提示
          Message.error(realRes.msg);
      }
      return Promise.reject(realRes.msg);
    } else {
      // 请求成功返回 正常数据
      return realRes;
    }
  },
  function (error) {
    if (error && error.response) {
      switch (err.response.status) {
        case 400:
          Message.error('请求错误');
          break;
        case 401:
          Message.error('未授权访问');
          break;
        case 404:
          Message.error('资源未找到');
          break;
        default:
          Message.error('其他错误信息');
      }
    }
    return Promise.reject(error);
  }
);

// 我们待会在这里进行处理我们的小需求
function batterRequest(config) {
  //  保证有 method 配置
  config.method = config.method || 'get';
  // get 请求参数和其他请求参数处理 让我们传参的时候统一使用data传递
  if (config.method.toLowerCase() === 'get') {
    config.params = config.data;
  }
  return request(config);
}

// 原型上添加方法
['get', 'post', 'delete', 'put', 'patch'].forEach((type) => {
  batterRequest[type] = (url, options) => {
    return batterRequest({ url, method: type, ...options });
  };
});

// 导出
export default batterRequest;
