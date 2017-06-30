# vue-start-kit

> High availability based on Vue-CLI expand a scaffold, The purpose of this project is to make it easy for everyone to develop vuejs 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



> We use the components of Element-ui、 axios、 vue-i18n、 and vuex, use these components to help us better develop vuejs.

In this start-kit we have already supported sass less you can use the following code directly

```css
<style lang="scss">
</style>
```

Taking into account the use of each person different scenes. The network library for the most simple package.If you want to use the network request, you will find it in the utils folder.

```javascript
import { get } from './utils/request';

get('http://example.com')
	.then((response) => {
      console.log(response);
	});
```

In this project, the Element-ui component was added. If you do not need to use the UI component you can remove the relevant code in main.js.

```javascript
// remove
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

//remove 
Vue.use(ElementUI);
```

In package.json

```
"element-ui": "^1.3.7",
```







## License

This project is licensed under the MIT license, Copyright (c) 2017 xiaosefengyun. For more information see `LICENSE.md`.
