const { environment } = require('@rails/webpacker')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const angular         =  require('./loaders/angular')


environment.loaders.prepend('angular', angular)
environment.plugins.prepend('angular',
  new AngularCompilerPlugin({
    tsConfigPath: './tsconfig.json',
    entryModule: './app/javascript/hello_angular/app/app.module.ts#AppModule',
    sourceMap: true
  })
)

module.exports = environment
