import component from './component'

let Vue = {}

let {{ pascalize name }} = {
  install (_Vue) {
    Vue = _Vue
    Vue.component('{{ name }}', component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('{{ name }}', {{ pascalize name }})
}
export default {{ pascalize name }}
