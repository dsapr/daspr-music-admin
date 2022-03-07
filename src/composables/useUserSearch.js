import { computed, onMounted, ref } from 'vue';
import { search } from '../api/user';

export const useUserSearch = () => {
  const data = ref([]);

  const pagination = ref({
    page: 1,
    rowsPerPage: 10
  });

  const fetchData = () => {
    const pageable = {
      page: pagination.value.page - 1,
      size: pagination.value.rowsPerPage
    };
    search(pageable).then(res => {
      data.value = res.content;
      pagination.value.page = res.number + 1;
      pagination.value.rowsNumber = res.totalElements;
      pagination.value.totalPages = res.totalPages;
    });
  };

  onMounted(fetchData);

  return {
    data,
    pagination,
    fetchData
  };
};
