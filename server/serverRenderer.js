import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from './../src/Routes';
import { StaticRouter } from 'react-router-dom';
import configureStore from './../src/configureStore';

function renderHTML(html, preloaded) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>React Movies Spa Server Side</title>
        ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                window.PRELOADED_STATE = ${JSON.stringify(preloaded).replace(/</g, '\\u003c')}
            </script>
            <script src="/js/main.js"></script>
        </body>
        </html>`
    ;
}

export default function serverRenderer() {
    return (req, res) => {
        const context = {};
        const store = configureStore();

        const root = (
            <Routes
                context = {context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        const htmlString = renderToString(root);

        if (context.url) {
            res.writeHead(302, {
                Location: context.url
            });
            res.end();
            return;
        }

        const preloaded = store.getState();

        res.send(renderHTML(htmlString, preloaded));
    };
}