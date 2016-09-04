import HomePage from 'src-demo/app/pages/HomePage'
import DefaultPage from 'src-demo/app/pages/DefaultPage'

export const routes = {
  '/': {
    name: 'Home',
    component: HomePage
  },
  '/default': {
    name: 'Default',
    component: DefaultPage
  },
  '*': {
    name: 'NotFound',
    component: HomePage
  }
}
