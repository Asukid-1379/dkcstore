<template>
  <div>
    <van-swipe class="my-swipe" 
      :autoplay="carousel_time" 
      indicator-color="white"
      height="300">
      <van-swipe-item v-for="(item, index) in imgs" :key="index">
        <img class="car-img" v-lazy="item.img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name:'VantCarousel',
  data() {
    return {
      imgs: this.carousel_list,
    }
  },
  props: {
    carousel_list: {
      type: Array,
      required: true
    },
    carousel_time: {
      type: Number,
      default: 3000
    }
  },
}
</script>

<style lang="less" scoped>
  @import '~@assets/css/base.less';
  .my-swipe {
    margin-bottom: 10px;
    height: @size - 100;
    .car-img {
      width: 100%;
      height: @size - 100;
    }
  }

</style>
