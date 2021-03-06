var humps = require('./utils/humps')

module.exports = {
  helpers: {
    pascalize: str => humps.pascalize(str)
  },
  'prompts': {
    'name': {
      'type': 'string',
      'required': true,
      'default': 'my-great-component',
      'message': 'Component name'
    },
    'version': {
      'type': 'string',
      'required': true,
      'default': '1.0.0',
      'message': 'Component version'
    },
    'description': {
      'type': 'string',
      'required': false,
      'default': 'A Vue.js component',
      'message': 'Component description'
    },
    'repoUser': {
      'type': 'string',
      'required': true,
      'message': 'Github User/Organization name'
    },
    'repoName': {
      'type': 'string',
      'required': true,
      'message': 'Github repository name'
    },
    'packageName': {
      'type': 'string',
      'required': true,
      'message': 'NPM package name'
    },
    'author': {
      'type': 'string',
      'message': 'Author'
    },
    'license': {
      'type': 'string',
      'default': 'MIT',
      'message': 'License'
    },
    'lint': {
      'type': 'confirm',
      'message': 'Use ESLint to lint your code?'
    },
    'lintConfig': {
      'when': 'lint',
      'type': 'list',
      'message': 'Pick an ESLint preset',
      'choices': [
        {
          'name': 'Standard (https://github.com/feross/standard)',
          'value': 'standard',
          'short': 'Standard'
        },
        {
          'name': 'AirBNB (https://github.com/airbnb/javascript)',
          'value': 'airbnb',
          'short': 'AirBNB'
        },
        {
          'name': 'none (configure it yourself)',
          'value': 'none',
          'short': 'none'
        }
      ]
    },
    'unit': {
      'type': 'confirm',
      'message': 'Setup unit tests with Karma + Mocha?'
    },
    'e2e': {
      'type': 'confirm',
      'message': 'Setup e2e tests with Nightwatch?'
    }
  },
  'filters': {
    '.eslintrc.js': 'lint',
    'test/unit/**/*': 'unit',
    'test/e2e/**/*': 'e2e'
  },
  'completeMessage': 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack'
}
