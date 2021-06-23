<template>
  <h3>test</h3>
  <div>
    接受到的参数值 a:{{ a }} b:{{b}}
    <div class="test">
      <button @click="count++">state.count {{ count }}</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  props: ['msg'],
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      count: 0,
    });
    const route1 = reactive(route.params);
    console.log(route.params)
    return {
      ...toRefs(state),
      ...toRefs(route1)
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  button {
    border: none;
  }
}
</style>
