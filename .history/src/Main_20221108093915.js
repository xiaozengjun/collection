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
  Container,
  Header,
  Main,
  Footer,
  Input,
  Option,
  Message,
  Popover,
  Empty,
  Dialog,
  Loading,
  Popconfirm,
  Radio,
  Menu,
  Submenu,
  MenuItem,
  Aside,
  Card,
  MenuItemGroup,
  Tooltip} from 'element-ui';
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
    .use(Select)
    .use(Container)
    .use(Header)
    .use(Main)
    .use(Footer)
    .use(Input)
    .use(Row)
    .use(Col)
    .use(Form)
    .use(FormItem)
    .use(Upload)
    .use(Message)
    .use(Option)
    .use(Table)
    .use(InputNumber)
    .use(TableColumn)
    .use(Empty)
    .use(Dialog)
    .use(Popover)
    .use(Loading)
    .use(Popconfirm)
    .use(Tooltip)
    .use(Radio)
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
