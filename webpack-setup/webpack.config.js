module.exports = {
    entry: './app.jsx',
    output: {
      path: __dirname + '/js/',
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
          },
        ]
      }
    } 