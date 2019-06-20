const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
//const angular    =  require('./loaders/angular')
const { AngularCompilerPlugin } = require('@ngtools/webpack')

angular = {
  //test: /(?:\.ngfactory\.js|\.ts\.ngfactory|\.ngstyle\.js|\.ts)$/,
  test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
  //test: /\.ts$/,
  use: [
    {
      loader: '@ngtools/webpack'
    }
  ]
}
environment.loaders.prepend('angular', angular)
//environment.loaders.prepend('typescript', typescript)

environment.plugins.prepend(
  'AngularCompiler',
  new AngularCompilerPlugin({
    tsConfigPath: './tsconfig.json',
    entryModule: './app/javascript/hello_angular/app/app.module.ts#AppModule',
    sourceMap: true
  })
)

module.exports = environment
