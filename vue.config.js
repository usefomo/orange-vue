// vue.config.js
module.exports = {
  runtimeCompiler: true,

  devServer: {
    watchOptions: {
      poll: true
    }
  },

  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        // data: `@import "~@/variables.scss";`
      }
    }
  }
}
