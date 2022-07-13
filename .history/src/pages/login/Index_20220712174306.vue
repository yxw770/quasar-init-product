<template>
  <div class="test column items-center">
    <q-btn color="primary" label="变色" @click="changeDark" />
  </div>
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
.test {
  height: 100vh;
  width: 100vw;
}
</style>
