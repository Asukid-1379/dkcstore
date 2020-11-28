<template>
  <div class="hot-sale-item">
    <div class="hsi-img"><slot name="img"></slot></div>
      <div class="price">
        <span>价格: <span><slot name="price"></slot></span></span>
        <span>销量: <slot name="sales"></slot></span>
      </div>
      <div class="hsi-name"><slot name="name"></slot></div>
      <div class="hsi-abstract"><slot name="abstract"></slot></div>
  </div>
</template>

<script>
export default {
  name:'HotSaleItem',
}
</script>

<style lang='less' scoped>
  @import '~@assets/css/base.less';
  @text-pdding: 10px;
  .hot-sale-item {
    text-align: center;
    border: 1px solid #FF5C33;
    border-radius: 10px;
    //项目占容器比例
    flex: 0 0 47.5%;
    margin: 1.666% .833% 0 1.666%;
    &:nth-child(2n){
      margin:1.666% 1.666% 0 .833%;
    }

    .price {
      display: flex;
      justify-content: space-between;
      padding: 5px @text-pdding;
      span > span{
        font-weight: 700;
        color: #FF5C33;
      }
    }

    .hsi-img {
      img {
        vertical-align:middle;
        width: 100%;
        height: @size / 2 - 18vm;
        border-radius: 10px 10px 0 0 ;
      }
    }
    .hsi-name, .hsi-abstract{
      .text;
      color: #000;
      padding: 0 @text-pdding;
      -webkit-line-clamp:1;
    }

    .hsi-abstract {
      color: #777777;
    }
  }

</style>
