import { defineStore } from 'pinia';
import { getToken, setToken } from '../utils/token';

export const useUserStore = defineStore('user', {
  state: (): UserModuleType => ({
    token: getToken() as string,
    username: '游客',
    avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
  }),
  getters: {
    getToken: (state) => state.token,
    getUsername: (state) => state.username,
    getAvatar: (state) => state.avatar,
  },

  actions: {
    /**
     * @description 设置token
     * @param {*} token
     */
    setToken(token: string) {
      this.token = token;
      setToken(token);
    },
  },
});
