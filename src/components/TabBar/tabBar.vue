<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'tabBar'
}
</script>

<style>
  #tar-bar {
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 2px #cccccc;
  }
</style>
