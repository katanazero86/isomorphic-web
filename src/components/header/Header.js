import React from 'react';

export default function Header() {

    function goPage(path) {
        console.log(`goPage..`);
        // TODO : 서버단에서 renderToString() 호출 시, window 객체가 정의되지 않는다는 에러 발생
        // console.log(window.location);
        // window.location = path;
    }

    return (
        <header style={{width: '100%', border: '1px dotted black'}}>
            <div>
                <span style={{padding: '4px'}}>My App |</span>
                <span style={{padding: '4px', cursor: 'pointer'}}>Home</span>
                <span style={{padding: '4px', cursor: 'pointer'}} onClick={goPage('/about')}>About</span>
            </div>
        </header>
    )
}
