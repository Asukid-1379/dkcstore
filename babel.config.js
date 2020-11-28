module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //Vant按需加载
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
