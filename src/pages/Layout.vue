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
        <q-avatar color="teal" text-color="white">
          {{ nicknameFirstWord }}
          <q-menu fit>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup @click="logout">
                <q-item-section>退出</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          active-class="menu-active"
          v-for="item in menuRoutes"
          :key="item.mate.title"
          :active="item.name === route.name"
          :to="item.path"
        >
          <q-item-section avatar>
            <q-icon :name="item.mate.icon" />
          </q-item-section>

          <q-item-section>{{ item.mate.title }}</q-item-section>
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
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { menuRoutes } from '../router/index.js';

export default {
  name: 'Layout',
  setup() {
    const store = useStore();

    const route = useRoute();

    return {
      nicknameFirstWord: computed(
        () => store.getters['user/nicknameFirstWord']
      ),
      menuRoutes,
      route,
      logout: () =>
        store.dispatch('user/logout').then(() => window.location.reload())
    };
  },
  data() {
    return {
      left: true
    };
  }
};
</script>

<style scoped>
.menu-active {
  color: white;
  background: #f2c037;
}
</style>
