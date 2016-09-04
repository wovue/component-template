import MyComponent from './MyComponent'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('my-component', MyComponent)
}
export default MyComponent
