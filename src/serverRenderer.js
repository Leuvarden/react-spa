import React from 'react';
import { renderToString } from 'react-dom/server';
// import Routes from './Routes';

let Routes = () => 
    <h1>Server rendering</h1>
    ;
    
function renderHTML(html) {
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
            <script src="/js/main.js"></script>
        </body>
        </html>`
    ;
}

export default function serverRenderer() {
    return (req, res) => {
        const htmlString = renderToString(<Routes />);

        res.send(renderHTML(htmlString));
    };
}