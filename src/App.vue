<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from '@/components/MainTabBar/mainTabBar'
  
  export default {
    name:'App',
    components: {
      MainTabBar
    },
    motheds: {
    },
    beforeCreate(){
      this.$request({
        url: 'dkc/index/index.html',
        method: 'post', //post 的话数据要放在 data里,可以 params和data都写，这样就可以post同时在url传参
        params: {
          data: '1'
        },
        data: {
          data: '2'
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  }
</script>

<style>
  @import '~@assets/css/base';
</style>
