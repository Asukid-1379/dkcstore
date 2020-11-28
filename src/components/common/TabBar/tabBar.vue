<template>
  <div class="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'tabBar'
}
</script>

<style lang='less' scoped>
  @import '~@assets/css/base.less';
  .tar-bar {
    .boot;
    display: flex;
    height: @tab-height;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 2px #cccccc;
    overflow: hidden;
  }
</style>
