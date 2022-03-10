<template>
  <div>
    <div class="page">
      <div class="q-my-md">
        <q-btn color="primary" label="添加歌曲" />
      </div>
      <q-table :rows="data" :columns="columns" row-key="id" hide-pagination />

      <!--      <div class="row justify-center q-mt-md">-->
      <!--        <q-pagination-->
      <!--          v-model="pagination.page"-->
      <!--          color="grey-8"-->
      <!--          :max="pagination.totalPages"-->
      <!--          size="sm"-->
      <!--        />-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { list } from '../../api/music.js';

const columns = [
  {
    field: 'name',
    label: '歌曲名'
  },
  {
    field: 'description',
    label: '简介'
  },
  {
    field: 'status',
    label: '上架状态'
  },
  {
    field: 'operation',
    label: '操作'
  }
];

const data = ref([]);

const fetchData = () => {
  list().then(musicList => {
    data.value = musicList;
  });
};

onMounted(fetchData);
</script>

<style scoped></style>
