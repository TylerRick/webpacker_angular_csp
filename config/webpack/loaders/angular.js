// Reference: https://www.npmjs.com/package/@ngtools/webpack#usage
const { AngularCompilerPlugin } = require('@ngtools/webpack')

module.exports = {
  test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
  use: [
    {
      loader: '@ngtools/webpack'
    }
  ]
}
