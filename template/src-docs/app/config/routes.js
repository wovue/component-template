import HomePage from 'src-docs/app/pages/HomePage'
import ExamplesPage from 'src-docs/app/pages/ExamplesPage'
import ExamplesDefaultPage from 'src-docs/app/pages/ExamplesDefaultPage'
import ExamplesPrimaryPage from 'src-docs/app/pages/ExamplesPrimaryPage'

export const routes = {
  '/': {
    name: 'Home',
    component: HomePage
  },
  '/examples': {
    name: 'Examples',
    component: ExamplesPage,
    subRoutes: {
      '/': {
        name: 'ExamplesDefaultPage',
        component: ExamplesDefaultPage
      },
      '/primary': {
        name: 'ExamplesPrimaryPage',
        component: ExamplesPrimaryPage
      }
    }
  },
  '*': {
    name: 'NotFound',
    component: HomePage
  }
}
