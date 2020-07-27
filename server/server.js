const express = require('express');
const path = require('path');
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config.js');
const compiler = webpack(config);

import Router from '../routes/index'; // 라우터

import App from '../src/App';
import Html from "../src/Html";

const expressApp = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV != 'production') {
    expressApp.use(webpackDevMiddleware(compiler, {
        publicPath: '/'
    }));
}
expressApp.use(express.static(path.join(__dirname, '')));

expressApp.get('*', (request, response) => {

    console.log('request.. in express');
    console.log(Router.match(request));
    const requestComponent = Router.match(request);
    const component = ReactDOMServer.renderToString(requestComponent);

    // const app = ReactDOMServer.renderToString(<App/>); // App 컴포넌트를 HTML 문자열로 랜더링
    const html = ReactDOMServer.renderToStaticMarkup(<Html
        title="Sample Title"
        description="Isomorphic web application sample"
        body={component}
    />);

    response.send(`<!DOCTYPE html>` + html);

});


expressApp.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}/`);
});
