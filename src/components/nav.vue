<template>
  <div>
    <div class="wrap">
      <div v-for="item in state" :key="item.name">
        <a-button type="primary" @click="jump(item)">{{ item.name }}</a-button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    let navarr = [
      { name: 'HelloWorld', path: '/HelloWorld', parmars: '123' },
      { name: 'demo', path: '/demo', parma: { a: '123', b: 'demo' } },
      { name: 'test', path: '/test', parma2: { a: '123', b: 'test' } },
      { name: 'board', path: '/board' },
      { name: 'vueuse', path: '/vueuse' },
    ];
    let jump = (obj) => {
      if (obj.parmars) {
        router.push(`${obj.path}/${obj.parmars}/456`);
      } else {
        if (obj.parma) {
          router.push({ path: obj.path, query: obj.parma });
        } else {
          if (obj.parma2) {
            router.push({ name: obj.name, params: obj.parma2 });
          } else {
            router.push({ name: obj.name });
          }
        }
      }
    };
    const state = reactive(navarr);
    return {
      state,
      jump,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  > div {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
</style>
