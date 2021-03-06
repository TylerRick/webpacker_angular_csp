const { environment }           = require('@rails/webpacker')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer')
const angular                   = require('./loaders/angular')
const html                      = require('./loaders/html')

environment.loaders.prepend('angular', angular)
environment.loaders.append('html', html)

environment.plugins.prepend('angular',
  new AngularCompilerPlugin({
    tsConfigPath: './tsconfig.json',
    entryModules: [
      './app/javascript/hello_angular/app/app.module.ts#AppModule',
      './app/javascript/hola_angular/app/app.module.ts#AppModule',
    ],
    sourceMap: true
  })
)

//environment.plugins.append('BundleAnalyzer', new BundleAnalyzerPlugin())

module.exports = environment
