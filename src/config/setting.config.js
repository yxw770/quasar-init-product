/**
 * @description 导出通用配置
 */
module.exports = {
  // 不经过token校验的路由，白名单路由建议配置到与login页面同级，如果需要放行带传参的页面，請使用query传参，配置时只配置path即可
  routesWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
  // 加载时显示文字
  loadingText: '正在加载中...',
  // token名称
  tokenName: 'token',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'trade-token',
  // token存储位置localStorage sessionStorage cookie
  storage: 'localStorage',
  // 语言类型zh、en
  i18n: 'zh',
  // 消息框消失时间
  messageDuration: 3000,
  // 是否开启登录拦截
  loginInterception: true,
  // 是否开启登录RSA加密
  loginRSA: false,
  // 是否开启roles字段进行角色权限控制(如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段)
  rolesControl: true,
  // 需要加loading层的請求，防止重复提交
  debounce: [],
};
