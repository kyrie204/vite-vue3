<template>
  <div>demo</div>
  <div>接受到的参数值 {{ a }} {{ b }}</div>
  <div>store: moduleA-countA {{ store.state.a.countA }}</div>
  <div>store: moduleA-countB {{ store.state.b.countB }}</div>
  <div>
    <a-button type="primary" @click="add">add</a-button>
    <ul>
      <li v-for="(item, index) in list" :key="item.id || index">{{ item.name }}</li>
    </ul>
  </div>
  <customSlot></customSlot>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import customSlot from './myslot.vue';

export default {
  components: {
    customSlot,
  },
  setup(props, context) {
    console.log(props, context);
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const list = reactive([
      { name: 'a', id: '1' },
      { name: 'b', id: '2' },
      { name: 'c', id: '3' },
    ]);
    const add = () => {
      list.unshift({ name: 'c', id: '4' });
    };

    const rroute = reactive(route.query);
    console.log(route.query);
    return {
      ...toRefs(rroute),
      store,
      list,
      add,
    };
  },
};
</script>

<style lang="scss" scoped></style>
