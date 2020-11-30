<template>
  <a class="recommend-item" href="">
    <div>
      <div class="recom-img"><slot name="img"></slot></div>
      <div class="recom-text"><slot name="name"></slot></div>
    </div>
  </a>
</template>

<script>
  export default {
    name:'RecommendItem',
  }
</script>

<style lang='less' scoped>
  @import '~@assets/css/base.less';

  .recommend-item{
    .text;
    .autoMargin(@rec-item-num, 2.5%);
    
    text-align: center;
    font-size: 14px;
    .recom-img {
      img {
        width: 100%;
        height: @size / @rec-item-num - 10vm;
        border-radius: 10px;
      }
    }
  }
</style>


