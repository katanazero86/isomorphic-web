## isomorphicWeb (동형 웹)

### project setting
```

- node.js 10.16.3
- npm 6.14.5

create file README.md 
npm init -y

npm i -S react react-dom
npm i -S express bluebird moment
npm i -D nodemon

// babel
npm i -D @babel/core @babel/preset-react @babel/preset-env @babel-node
npm i -D babel-loader
npm i -D @babel/register
npm i -S @babel/polyfill

// webpack
npm i -D webpack webpack-dev-server webpack-cli
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D clean-webpack-plugin
npm i -D copy-webpack-plugin
npm i -D webpack-node-externals



create file srver.js
create file client.js
create file .babelrc
create file webpack.config.js
create file webpack.server.js

참조 : https://babeljs.io/docs/en/babel-register
참조 : https://stackoverflow.com/questions/41692643/webpack-and-express-critical-dependencies-warning
참조 : https://www.pluralsight.com/guides/how-to-partly-server-side-render-in-react
참조 : https://github.com/PacktPublishing/Isomorphic-JavaScript-Web-Development
참조 : https://livebook.manning.com/book/isomorphic-web-applications/chapter-1/28
참조 : https://github.com/donggyushin/understanding-server-side-rendering-in-react
참조 : https://dev-momo.tistory.com/entry/React-Server-Side-Rendering

build 시, moment.js에 모든 locale 이 들어가서 용량이 커짐
moment-locales-webpack-plugin 을 사용하여 용량을 줄임

```

### Isomorphic Web App ?

- Isomorphic : 같은 모양의, 동일 구조의, 등정형(等晶形)의
- 동형 웹앱은 SSR + CSR 을 혼합하는 웹 애플리케이션
- 주된 아이디어는 서버에서 생성된 HTML 을 클라이언트에서 자바스크립트로 동작하도록 작성하는 것에 있다.(이를 통해, 초기 로딩 속도 개선 및 SEO 문제가 해결된다.)
- 동형 웹앱은 초기 페이지 로딩 속도, SEO 외에 클라이언트 측과 서버 측의 코드를 서로 공유함으로써 중복되는 코드를 줄인다.
