const path = require('path');

module.exports ={
    context : __dirname,
    entry: './src/js/index.js',

    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    }
};