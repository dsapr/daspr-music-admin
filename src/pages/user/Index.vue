<template>
  <div class="page">
    <div class="q-my-md">
      <q-btn color="primary" label="添加用户" />
    </div>
    <q-table
      :rows="data"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      hide-pagination
    />

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { search } from '../../api/user';

export default {
  name: 'Index',
  setup() {
    const columns = [
      {
        field: 'id',
        label: 'ID'
      },
      {
        field: 'username',
        label: '用户名'
      },
      {
        field: 'nickname',
        label: '昵称'
      }
    ];

    const data = ref([]);

    const fetchData = () => {
      search({ page: 0 }).then(res => {
        data.value = data.value.concat(res.data.content);
        pagination.value.page = res.data.number + 1;
        pagination.value.rowsPerPage = res.data.size;
        pagination.value.rowsPerPage = res.data.totalElements;
      });
    };

    fetchData();

    const pagination = ref({
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10
    });

    const rows = [];

    return {
      rows,
      columns,
      pagination,
      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
      data
    };
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
