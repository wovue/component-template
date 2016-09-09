import AppCode from 'components/AppCode'
import AppFooter from 'components/AppFooter'
import AppTable from 'components/AppTable'

export default function registerComponents (Vue) {
  Vue.component('app-code', AppCode)
  Vue.component('app-footer', AppFooter)
  Vue.component('app-table', AppTable)
}
