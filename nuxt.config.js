export default {
  target: 'static',
  router: {
    base: '/admin-panel/',
  },
  head: {
    title: 'admin-panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter&display=swap' },
    ],
  },
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/style/global.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    'cookie-universal-nuxt',
  ],
  axios: {
    https: true,
  },
  build: {
    vendor: ['@nuxtjs/axios', '@nuxtjs/vuetify', 'bootstrap-vue/nuxt'],
  },
};
