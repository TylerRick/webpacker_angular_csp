const { environment }           = require('@rails/webpacker')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const { BundleAnalyzerPlugin }  = require('webpack-bundle-analyzer')
const angular                   = require('./loaders/angular')

environment.loaders.prepend('angular', angular)
environment.plugins.prepend('angular',
  new AngularCompilerPlugin({
    tsConfigPath: './tsconfig.json',
    entryModule: './app/javascript/hello_angular/app/app.module.ts#AppModule',
    sourceMap: true
  })
)
environment.plugins.append('BundleAnalyzer', new BundleAnalyzerPlugin())

module.exports = environment
