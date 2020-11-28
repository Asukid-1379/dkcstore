<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar',
}
</script>

<style lang='less' scoped>
  @import '~@assets/css/base.less';
  @width: 60px;
  .nav-bar {
    .boot;
    display: flex;
    height: @nav-height;
    line-height: 44px;
    box-shadow: 0 0 2px #cccccc;
    
    .left{
      width: @width;
    }
    .center {
      flex: 1;
      text-align: center;
    }
    .right {
      width: @width;
    }
  }

  
</style>
