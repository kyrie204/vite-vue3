<template>
  <h1>{{ id }} {{ rid }}</h1>
  <h3>store</h3>
  <div>
    <a-space>
      <a-button type="primary" @click="increamModuleA">store.moduleA</a-button>
      <a-button type="primary" @click="increamModuleB">store.moduleB</a-button>
    </a-space>
  </div>
  <p>store: {{ store.state.a.countA }}</p>
  <p>store: {{ store.state.b.countB }}</p>
</template>

<script>
import { defineProps, reactive, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  props: ['id', 'test', 'rid'],
  setup() {
    const route = useRoute();
    const store = useStore();
    // const storee = reactive(store)

    const increamModuleA = () => {
      store.commit('a/increment', 1);
    };
    const increamModuleB = () => {
      store.commit('b/increment', 1);
    };

    return {
      route,
      store,
      increamModuleA,
      increamModuleB,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
