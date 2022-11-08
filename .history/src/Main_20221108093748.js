import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import router from './Router'
import less from 'less'
import store from './store';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';  //Element 内置动画
import {
  Button,
  Header,
  Main,
  Footer,
  Input,
  Message,
  Popover,
  Empty,
  Popconfirm,
  Menu,
  Option,
  Submenu,
  MenuItem,
  Aside,
  Card,
  MenuItemGroup} from 'element-ui';
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard
Vue.config.productionTip = false
Vue.use(less)
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Button)
    .use(Menu)
    .use(Card)
    .use(Aside)
    .use(Submenu)
    .use(MenuItem)
    .use(MenuItemGroup)
    .use(Header)
    .use(Main)
    .use(Footer)
    .use(Input)
    .use(Message)
    .use(Option)
    .use(Empty)
    .use(Popover)
    .use(Popconfirm)
Vue.component(CollapseTransition.name, CollapseTransition)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  less,
  store,
  components: { App },
  template: '<App/>'
})