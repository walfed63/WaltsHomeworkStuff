module.exports = {
    entry: './public/javascripts/app.jsx',
    output: {
        path: __dirname + '/public/javascripts',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
     colors: true,
     reasons: true
     },
     module: {
         loaders: [
             {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']              
             }
         ]
     }
}