module.exports = {
    entry: './source/app.jsx',
    output: {
        filename: './build/bundle.js'
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