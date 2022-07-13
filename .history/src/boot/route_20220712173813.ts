import { boot } from 'quasar/wrappers';
import { loginInterception, routesWhiteList } from '@/config';
import { useUserStore } from '../stores/user';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ router }) => {
  // something to do
  const { token } = useUserStore();
  router.beforeEach(async (to, from, next) => {
    let hasToken = token;
    //未啟動登錄攔截則token存在
    if (!loginInterception) hasToken = true;
    if (hasToken && hasToken != '') {
      //已登錄狀態

      try {
        //如果開啟登錄攔截，那麼直接獲取用戶信息
        // if (init == true) {

        //   if (loginInterception) await getUserInfo();
        //   else setVirtualRoles();

        // } else {
        //   if (loginInterception) getUserInfo();
        //   else setVirtualRoles();

        // }
        // await getUserInfo();
        // config/setting.config.js loginInterception为false(关闭登录拦截时)时，创建虚拟角色

        // await setRoutes(authentication);
        next({ ...to, replace: true });
      } catch (err: any) {
        // console.error('錯誤攔截:', err);
        const code = err.code;
        const whiteCodeList = [70003, 70004, 70007];
        if (code && whiteCodeList.includes(code)) {
          next({ path: '/' });
        } else {
          next({ path: '/404' });
        }

        // if ((JSON.parse(err).code = 70003)) {
        //   next({ path: "/" });
        // } else {
        //   next({ path: "/404" });
        // }
        // await resetAll();
      }
    } else {
      //未登錄狀態
      let flag = 0;
      console.log('123213');
      routesWhiteList.forEach((item) => {
        if (item.indexOf(':') != -1) {
          //動態路由
          let new_path = item.replace('/', '\\/');
          new_path = new_path.replace(/(:[A-Za-z0-9]+)/g, '([^/]+?)\\/?');
          const pattern = '^' + new_path + '$';
          const r = new RegExp(pattern);
          if (r.test(to.path)) {
            flag = 1;
          }
        } else if (item == to.path) {
          flag = 1;
        }
      });
      if (flag == 1) {
        next({ path: to.path, replace: true });
      } else {
        // gp.$baseMessage('請您先登錄', 'error');
        next({ path: from.path });
      }
    }
  });
});
