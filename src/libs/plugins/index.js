import directive from './directive'
import methods from './methods'

function plugins(Vue) {
    directive(Vue)
    methods(Vue)
}

export default plugins;
// let plugins = {};

// plugins.install = function (Vue, Options) {
//   let ppt = Vue.config.globalProperties;
//   ppt.globalMethods = function () {
//     console.log('globalMethods');
//     return 'globalMethods';
//   };
//   ppt.dateFormat = function (fmt, date) {
//     let ret;
//     const opt = {
//       'Y+': date.getFullYear().toString(), // 年
//       'm+': (date.getMonth() + 1).toString(), // 月
//       'd+': date.getDate().toString(), // 日
//       'H+': date.getHours().toString(), // 时
//       'M+': date.getMinutes().toString(), // 分
//       'S+': date.getSeconds().toString(), // 秒
//       // 有其他格式化字符需求可以继续添加，必须转化成字符串
//     };
//     for (let k in opt) {
//       ret = new RegExp('(' + k + ')').exec(fmt);
//       if (ret) {
//         fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
//       }
//     }
//     return fmt;
//   };

//   Vue.directive('dateFormate', {
//     // 当被绑定的元素挂载到 DOM 中时……
//     mounted(el, v) {
//     //   console.log(el, v);
//       el.innerHTML = ppt.dateFormat('YYYY-mm-dd HH:MM:SS', v.value);
//     },
//     updated(el, v) {
//     //   console.log(el, v);
//       el.innerHTML = ppt.dateFormat('YYYY-mm-dd HH:MM:SS', v.value);
//     },
//   });
// };

