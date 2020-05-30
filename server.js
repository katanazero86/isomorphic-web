const express = require('express');
const path = require('path');
import React from 'react';
import ReactDom from 'react-dom/server';

import App from './src/App';
import Html from "./src/Html";

const expressApp = express();
const port = process.env.PORT || 3000;

expressApp.use(express.static(path.join(__dirname, '')));

expressApp.get('*', (request, response) => {

    console.log('request..');

    const app = ReactDom.renderToString(<App/>); // App 컴포넌트를 HTML 문자열로 랜더링
    const html = ReactDom.renderToStaticMarkup(<Html
        title="Sample Title123"
        description="동형앱 예제 어렵다!!"
        body={app}
    />);

    response.send(`<!DOCTYPE html>` + html);

});


expressApp.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}/`);
});
