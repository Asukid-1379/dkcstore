<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from '@components/context/MainTabBar/mainTabBar'
  
  export default {
    name:'App',
    components: {
      MainTabBar
    },
    motheds: {
    },
    
  }
</script>

<style lang="less">
  @import '~@assets/css/base.less';
  #app {
  .boot;
  }
</style>
