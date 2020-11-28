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
    //每个元素占据的空间
    @each_space: 100% / @Item_count - 2.5%;
    flex: 0 0 @each_space;
    //每个的间隔
    margin: 10% / 2 / (@Item_count + 1);
    //第一个间隔是两倍
    &:first-child {
      margin-left: 10% / 2 / (@Item_count + 1) * 2;
    }
    
    text-align: center;
    font-size: 14px;
    .recom-img {
      img {
        width: 100%;
        height: @size / 4 - 18vm;
        border-radius: 10px;
      }
    }
  }
</style>


