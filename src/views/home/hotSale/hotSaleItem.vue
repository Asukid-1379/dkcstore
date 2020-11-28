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
  .hot-sale-item {
    @text-pdding: 10px;
    @item-num: 2;

    .autoMargin(@item-num, 2.5%);

    text-align: left;
    border: 1px solid #FF5C33;
    border-radius: 10px;
    
    .text;
    .hsi-img {
      img {
        display: block;
        width: 100%;
        height: @size / @item-num - 10vm;
        border-radius: 10px 10px 0 0 ;
      }
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
    .hsi-name, .hsi-abstract{
      .text;
      color: #000;
      padding: 0 @text-pdding;
    }
    .hsi-abstract {
      color: #777777;
    }
  }

</style>
