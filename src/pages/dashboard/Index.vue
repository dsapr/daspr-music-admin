<template>
  <div class="page" style="background: #26a69a">
    <strong>欢迎光临 {{ nickname }}</strong>
  </div>
  <q-btn @click="logout">退出</q-btn>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Index',
  setup() {
    const store = useStore();
    return {
      nickname: computed(() => store.state.user.nickname),
      logout: () =>
        store.dispatch('user/logout').then(() => window.location.reload())
    };
  }
};
</script>

<style scoped></style>
