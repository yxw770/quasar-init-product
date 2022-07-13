<template>
  <q-page>
    <div class="login-box column items-center justify-center">
      <q-img
        src="https://placeimg.com/500/300/nature"
        spinner-color="white"
        style="height: 140px; max-width: 150px"
      />
      <q-btn color="primary" label="变色" @click="changeDark" />
    </div>
  </q-page>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LoginIndex',
});
</script>
<script lang="ts" setup>
const $q = useQuasar();

const changeDark = () => {
  // set status
  // $q.dark.set(true); // or false or "auto"
  // 读取是否开启暗黑模式
  console.log($q.dark.isActive); // true, false

  // get configured status
  console.log($q.dark.mode); // "auto", true, false
  $q.dark.toggle();
};
</script>
<style lang="scss" scoped>
.login-box {
  height: calc(100vh - 50px);
  width: 100vw;
}
</style>
