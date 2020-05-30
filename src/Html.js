import React from 'react';


export default function Html({title, description, body}) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="description" content={description || ''}/>
                <meta name="viewport" content="width=device-width initial-scale=1"/>
                <title>
                    {title || ''}
                </title>
            </head>
            <script type="module" src="client.js"></script>
        <body>
            <div id="app" dangerouslySetInnerHTML={{__html : body}} />
        </body>
        </html>
    )
}
