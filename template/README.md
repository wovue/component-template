# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 src-demo folder
npm run dev

# build for production with minification src-demo and src folders
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Docs

### Folders

* `src-demo`: gh-pages source files

* `src`: your component source files

### I have updated the repository name, where i configure it?

You have to change it in `config/prod.env.js`, `GH_REPO_NAME` env variable value.

For detailed explanation on how things work, checkout the [webpack template guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
