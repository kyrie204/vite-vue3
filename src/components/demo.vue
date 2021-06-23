<template>
  <div>demo</div>
  <div>接受到的参数值 {{a}} {{b}}</div>
  <div>store: moduleA-countA {{store.state.a.countA}}</div>
  <div>store: moduleA-countB {{store.state.b.countB}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const rroute = reactive(route.query);
    console.log(route.query)
    return {
      ...toRefs(rroute),
      store
    };
  },
};
</script>

<style lang="scss" scoped></style>
