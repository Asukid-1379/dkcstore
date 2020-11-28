<template>
  <Carousel
    v-model="value3"
    :autoplay="setting.autoplay"
    :autoplay-speed="setting.autoplaySpeed"
    :dots="setting.dots"
    :radius-dot="setting.radiusDot"
    :trigger="setting.trigger"
    :arrow="setting.arrow">
    <CarouselItem v-for="(img, index) in img_list" :key="index">
      <img class="img" :src="img" />
    </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    name: 'IviewCarousel',
    data () {
      return {
        value3: 0,
        setting: {
          autoplay: true,
          autoplaySpeed: this.time,
          dots: 'inside',
          radiusDot: false,
          trigger: 'hover',
          arrow: 'hover'
        },
        imgs: this.img_list,
      }
    },
    props: {
      img_list: {
        type: Array,
        required: true
      },
      time: {
        type: Number,
        default: 3000
      }
    }
  }

</script>

<style lang="less" scoped>

  @Carousel_height: 300px;
  .img {
    width: 100%;
    height: @Carousel_height;
  }
</style>