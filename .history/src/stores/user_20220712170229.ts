import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: (): UserModuleType => ({
    token: getToken() as string,
    username: '游客',
    avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
