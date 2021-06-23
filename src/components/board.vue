<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns" :loading="loading"/>
  </div>
</template>

<script>
import { reactive, ref, toRefs, getCurrentInstance, onMounted } from 'vue';

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    let dataSource = ref([]);
    let loading = ref(true);

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    const req = async () => {
      console.log(proxy.$axios);
      const result = await proxy.$axios.get('https://601ce2ca1a9c220017060f1d.mockapi.io/api/v1/search');//, { a: '1', b: '2' }

      dataSource.value = result.list;
      loading.value = false;
    };
    
    onMounted(() => {
      req();
    });

    return {
      dataSource,
      columns,
      loading,
    };
  },
};
</script>

<style lang="scss" scoped></style>
