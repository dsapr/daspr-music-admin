<template>
  <div class="page">
    <div class="q-my-md">
      <q-btn color="primary" label="添加用户" @click="showDialog" />
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
        :max="pagination.totalPages"
        size="sm"
      />
    </div>
    <create-dialog v-if="show" @hide="hideDialog" @create-success="fetchData" />
  </div>
</template>

<script setup>
import { useUserSearch } from '../../composables/useUserSearch';
import { useToggleDialog } from '../../composables/useToggleDialog.js';
import CreateDialog from './CreateDialog.vue';
import { ref } from 'vue';

name: 'Index';

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

const show = ref(false);

const { hideDialog, showDialog } = useToggleDialog(show);

const { data, pagination, fetchData } = useUserSearch();
</script>

<style scoped></style>
