<template>
  <q-page>
    <div class="login-box row content-center justify-center">
      <q-img
        src="https://placeimg.com/500/300/nature"
        spinner-color="dark"
        style="height: 140px; max-width: 150px"
      />

      <q-form @submit="onSubmit" class="q-col-gutter-lg q-mt-xs">
        <q-input v-model="form.username" label="username" />
        <q-input v-model="form.password" type="password" label="password" />

        <div class="col-12">
          <q-btn
            label="登 入"
            type="submit"
            size="sm"
            loading
            color="primary"
            style="width: 100%"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LoginIndex',
});
</script>
<script lang="ts" setup>
const form = reactive({
  username: '',
  password: '',
});
const $q = useQuasar();

const onSubmit = () => {
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
.login-box {
  .q-form {
    width: 90%;
  }
}
</style>
