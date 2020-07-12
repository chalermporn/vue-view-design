// https://cli.vuejs.org/config/
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  assetsDir: 'assets',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // https://github.com/iview/iview-admin/issues/841
      }
    }
  },
  transpileDependencies: [
    'view-design',
    'tree-table-vue',
    'v-org-tree',
    'axios',
    'core-js',
    'lodash',
    'moment',
    'vue',
    'vue-i18n',
    'vue-router',
    'vuex',
    'vuex-persist',
    'prism'
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  }
}
