import HomePage from 'src-docs/app/pages/HomePage'
import DefaultPage from 'src-docs/app/pages/DefaultPage'

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
