<template>
  <div>
    <h3>Slot test</h3>
    <!-- <slot></slot> -->
    <slot name="test2" :testData="123123"></slot>
    <slot name="test"></slot>
    <div>
      <slot :item="data" name="scope"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  setup() {
    return {
        data2: [1,2,3,4]
    };
  },
};
</script>

<style lang="scss" scoped></style>
