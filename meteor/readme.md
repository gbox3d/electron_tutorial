meteor-desktop
===

미티어클라이언트 부분을 일랙트론을 이용해서 실행시키는 방법    

미티어 데스크톱 앱 설치한다.
```bash
meteor npm install --save-dev meteor-desktop
meteor add-platform android
```

서버를 실행시킨다.  
```bash
meteor --mobile-server=127.0.0.1:3000

```

터미널 창을 하나더 띄운다.  
```bash
npm run desktop -- init
npm run desktop

```

앱빌드하기   
주의) '--' 뒤에 공백이 하나 들어간다.  
```bash
npm run desktop -- build-installer
```


https://www.npmjs.com/package/meteor-desktop
