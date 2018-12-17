bootstrap setup
====

일랙트론에만 해당된다. 다음 설치를 다르지 않고 기존 방법을 사용할 경우 $.fn 을 찾을수없다는 에러 발생.  

모듈설치
```bash
npm i -S bootstrap
npm i -S jquery
npm i -S popper.js
```

css추가

```html
<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
```


```js
window.$ = window.jQuery = require('jquery'); // not sure if you need this at all
window.Bootstrap = require('bootstrap');
```

