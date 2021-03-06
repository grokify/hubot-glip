const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'index.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: ['ws', 'hubot'],
  module: {
    noParse: ['ws'],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            ['env', {
              'targets': {
                'node': 4.2
              }
            }]
          ]
        }
      }
    ]
  },
  target: 'node'
}
