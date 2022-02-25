<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Dsapr 音乐
        </q-toolbar-title>
        <q-space />
        <q-avatar color="primary" text-color="white"></q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          active-class="my-menu-link"
          v-for="item in menus"
          :key="item.title"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>

          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!-- 子页面组件 -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Layout',
  setup() {
    const store = useStore();

    const menus = [
      { title: '控制台', icon: 'dashboard', path: 'index' },
      { title: '用户管理', icon: 'manage_accounts' }
    ];
    return {
      menus
    };
  },
  data() {
    return {
      nicknameFirstWord: computed(() => store.getters.user.nicknameFirstWord),
      left: true
    };
  }
};
</script>

<style scoped></style>
