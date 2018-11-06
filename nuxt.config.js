const pkg = require('./package')
console.log("nuxt.config.js")
module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    
    //不能替代.babelrc
    // babel: { presets: ['es2015', '@nuxtjs/babel-preset-app'] },

    // cache: true,   //加快编译速度
    /*extend(config, { isServer, isDev, isClient }) {
      //https://github.com/nuxt/nuxt.js/issues/3804
      if (isServer) {
        for (const rules of config.module.rules.filter(({ test }) =>
          /\.((c|le|sa|sc)ss|styl.*)/.test(test.toString())
        )) {
          for (const rule of rules.oneOf || []) {
            rule.use = rule.use.filter(
              ({ loader }) => loader !== 'cache-loader'
            )
          }
        }
      }
    }*/
    
      // Run ESLint on save
      /*if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/    
  }
}
