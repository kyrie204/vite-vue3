import * as dayjs from 'dayjs'

export default function (Vue, Options) {
  let ppt = Vue.config.globalProperties;

  Vue.directive('dateFormate', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el, v) {
      //   console.log(el, v);
      el.innerHTML = ppt.dateFormat('YYYY-mm-dd HH:MM:SS', v.value);
    },
    updated(el, v) {
      //   console.log(el, v);
    //   el.innerHTML = ppt.dateFormat('YYYY-mm-dd HH:MM:SS', v.value);
      el.innerHTML = dayjs(v.value).format('YYYY/MM/DD HH:mm:ss');
    },
  });

}
