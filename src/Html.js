import React from 'react';


export default function Html({title, description, body}) {
    return (
        <html style={{height:'100%'}}>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="description" content={description || ''}/>
                <meta name="viewport" content="width=device-width initial-scale=1"/>
                <title>
                    {title || ''}
                </title>
            </head>
            <script src="/client.js" defer></script>
        <body style={{height:'100%'}}>
            <div id="app" style={{height:'100%'}} dangerouslySetInnerHTML={{__html : body}} />
        </body>
        </html>
    )
}
