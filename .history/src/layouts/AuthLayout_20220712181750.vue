<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-black text-center row items-center">
      <q-toolbar>
        <q-toolbar-title>
          <span class="header-text">登 入 </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
.header-text {
  font-size: 15px;
}
</style>
