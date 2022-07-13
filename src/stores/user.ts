import { defineStore } from 'pinia';
import { getToken, removeToken, setToken } from '../utils/token';

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
    /**
     * @description 设置用户名
     * @param {*} username
     */
    setUsername(username: string) {
      this.username = username;
    },
    /**
     * @description 设置头像
     * @param {*} avatar
     */
    setAvatar(avatar: string) {
      this.avatar = avatar;
    },
    /**
     * @description 设置token并发送提醒
     * @param {string} token 更新令牌
     * @param {string} tokenName 令牌名称
     */
    afterLogin(token: string, tokenName: string) {
      if (token) {
        // eslint-disable-next-line no-unused-vars
        this.setToken(token);
      } else {
        const err = `登录接口异常，未正确返回${tokenName}...`;
        // gp.$baseMessage(err, 'error');
        throw err;
      }
    },
    /**
     * @description 登录
     * @param {*} userInfo
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async login(userInfo: any) {
      // const {
      //   data: { [tokenName]: token },
      // } = await login(userInfo);
      this.afterLogin('123123213123', 'token');
    },
    /**
     * @description 退出登录
     */
    async logout() {
      await this.resetAll();
    },
    /**
     * @description 重置token、roles、permission、router、tabsBar等
     */
    async resetAll() {
      this.setToken('');

      removeToken();
    },
  },
});
