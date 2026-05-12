import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AsideToggle from './AsideToggle.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'aside-top': () => h(AsideToggle)
    })
  }
}
