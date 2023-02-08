const mix = require('laravel-mix');
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/js'),
      },
    },
    output: {
      publicPath: '/'
    }
  })
  
  
mix.js('resources/js/app.js', 'public/assets/js')
    .vue({version: 3})
    .postCss('resources/assets/css/style.css', 'public/assets/css')
    

    if (!mix.inProduction()) {
        mix
          .webpackConfig({
            devtool: 'source-map',
          })
          .sourceMaps()
      } else {
        mix.version()
      }
      