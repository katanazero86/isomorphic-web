require("@babel/register")({
    presets: ["@babel/env", "@babel/preset-react"],
    ignore: [/node_modules/],
});

// Import the rest of our application.
module.exports = require('./server.js')
