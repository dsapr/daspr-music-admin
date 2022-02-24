<template>
  <div class="page" style="background: #26a69a">
    <strong>这是主页 {{ nickname }}</strong>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Index',
  setup() {
    const store = useStore();
    return {
      nickname: computed(() => store.state.user.nickname)
    };
  }
};
</script>

<style scoped></style>
