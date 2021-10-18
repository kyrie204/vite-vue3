<template>
  <div>
    <SlotItem :data="scopeDate">
      <!-- <div>默认插槽内容1</div> -->
      <template v-slot:test>
        <div>test插槽内容1</div>
      </template>
      <template v-slot:test2="test2" >
        <div>test插槽内容2 : {{test2.testData}}</div>
      </template>

      <template v-slot:scope="scope">
        <span>scope: {{scope.item}}</span>
      </template>
    </SlotItem>
  </div>
</template>

<script>
import SlotItem from './slotItem.vue';

export default {
  components: {
    SlotItem,
  },
  setup() {
    return {
        scopeDate: ["scope1","scope2","scope3"]
    };
  },
};
</script>

<style lang="scss" scoped></style>
