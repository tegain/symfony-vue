const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/build/')
  // the public path used by the web server to access the previous directory
  .setPublicPath('/build')
  .addEntry('app', './assets/js/app.js')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVueLoader()
  // uncomment to create hashed filenames (e.g. app.abc123.css)
  // .enableVersioning(Encore.isProduction())

  // uncomment to define the assets of the project
  // .addEntry('js/app', './assets/js/app.js')
  // .addStyleEntry('css/app', './assets/css/app.scss')

  // uncomment if you use Sass/SCSS files
  // .enableSassLoader()

  // uncomment for legacy applications that require $/jQuery as a global variable
  // .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
