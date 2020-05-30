require("@babel/register");
import React from 'react';
import ReactDom from 'react-dom';
import App from './src/App';

function run() {
    // render() 와 동일하지만, ReactDOMServer에서 HTML 내용을 렌더링 한 hydrate (이벤트 리스너 첨부) 컨테이너에 사용됩니다. React는 이벤트 리스너를 기존 마크 업에 첨부하려고 시도
    console.log(`run.. ReactDom.hydrate`)
    ReactDom.hydrate(<App/>, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

// Document.readyState 속성을 통해  document 의 로딩 상태를 확인
// loading : document 로딩중
// interactive : 문서의 로딩은 끝이 나고 해석 중 이지만  images, stylesheets, frames 과 같은 하위 자원들은 로딩되고 있는 상태
// complete : 문서와 모든 하위 자원들의 로드가 완료된 상태이다. 이 상태는 load 이벤트가 발생되기 직전 상태
if(loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    // HTML 이 모두 로드되고, DOM 트리가 완성되었지만, 외부 리소스(img etc) 가 아직 로드되어지지 않았을 때
    window.addEventListener('DOMContentLoaded', run, false);
}

