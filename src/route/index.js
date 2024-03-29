// 创建vue router,使用哈希模式
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { message } from 'ant-design-vue';
import index from '../components/nav.vue';
// 动态引入组件
const Demo = () => import('../components/demo.vue');
const Helloworld = () => import('@src/components/HelloWorld.vue');
const Test = () => import('@src/components/test.vue');
const Board = () => import('@src/components/board.vue');
const Vueuse = () => import('@src/components/vueuse.vue');

// 导出路由
export const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory('dist'),
  base: 'dist',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/demo',
          name: 'demo',
          component: Demo,
        },
        {
          path: '/board',
          name: 'board',
          component: Board,
        },
        {
          path: '/vueuse',
          name: 'vueuse',
          component: Vueuse,
        },
        {
          path: '/helloworld/:id/:rid',
          component: Helloworld,
          props: (route) => ({ id: route.params.id, rid: route.params.rid }),
        },
        {
          path: '/test',
          name: 'test',
          component: Test,
          beforeEnter: (to, from, next) => {
            message.info('This is a normal message', 2, () => {
              next();
            });
          },
        },
      ],
    },
  ],
});
