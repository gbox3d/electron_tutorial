# electron tutorial

## 실행순서

1. 경로에 있는 package.json 파일내용 참고 하여 부트스크립트 결정   
예>
main : "main.js"

2. 부트스크립트에서 html 지정한 파일 처리  
3. preload.js파일 처리  (노드모듈(npm) 로딩은 여기서...)
8.xx대 버전 부터는 보안상 require함수는 여기서만 사용가능하다.  

## 씨리얼 포트 접근  
for use serialport npm
```
npm install
node_modules/.bin/electron-rebuild 

```

## packaging

hello 예제앱 배포판만들기 예제

```bash
cd basic/hello
npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```

/out 폴더로 결과물이 출력된다.


참고 : https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging



