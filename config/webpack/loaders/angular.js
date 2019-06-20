const AngularCompilerPlugin = require('@ngtools/webpack')

module.exports = {
  test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
  use: [
    {
      loader: '@ngtools/webpack'
    }
  ]
}
