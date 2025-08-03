module.exports = {
  context: __dirname,
  entry: './public/script/main.js',
  devServer: {
    port: 1113,
    open: true,
    hot: true,
    static: {
      directory: './public'
    }
  },
  output: {
    clean: true
  },
  builtins: {
    html: [{
      template: './public/index.html',
      inject: true
    }]
  }
}
