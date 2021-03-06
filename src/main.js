import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import{ router } from '@src/route'
import{ store } from './store'
import axios from './utils/axios'

import myplugins from './libs/plugins'

const Root = createApp(App)

Root.use(Antd)
Root.use(router)
Root.use(store)
myplugins(Root)
//全局配置
Root.config.globalProperties.$axios=axios

Root.mount('#app')
