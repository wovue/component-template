```js
// with webpack you can import css
require('{{ packageName }}/dist/{{ name }}.css')

import Vue from 'vue'
import {{ pascalize name }} from '{{ packageName }}'

Vue.use({{ pascalize name }})
```
