<template>
  <div class="bgcolor">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav-color">
      <template #left></template>
      <template #center>DKC商店</template>
      <template #right></template>
    </nav-bar>
    <!-- <iview-carousel :carousel_time="carousel_time" :carousel_list="carousel_list"></iview-carousel> -->

    <!-- 走马灯 -->
    <vant-carousel :carousel_time="carousel_time" :carousel_list="carousel_list"></vant-carousel>
    <!-- 推荐 -->
    <div class="line">推荐</div>
    <recommend :rec_list="rec_list"></recommend>
    <!-- 热门 -->
    <div class="line">正在热卖</div>
    <hot-sale :hot_list="hot_list"  id="host-sale"></hot-sale>
    <!-- 用户安慰装置 -->
    <van-loading type="spinner" color="#1989fa" class="loading">加载中...</van-loading>

  </div>
</template>

<script>
//导航组件
import NavBar from '@components/common/NavBar/navBar'
//推荐宫格组件
import Recommend from './recommend/recommend'
//热门商品组件
import HotSale from './hotSale/hostSale'
//网络请求方法
import { getHomeGoods } from '@/network/home'
//iview组件(PC端)
import IviewCarousel from './carousel/iviewCarousel'
//Vant组件(移动端)
import VantCarousel from './carousel/vantCarousel'
//处理数据方法
import {pushData, isSlideToBottom, throttle} from '@/common/function/function'

export default {
  name:'Home',
  data(){
    return {
      carousel_num: 4,
      carousel_list: [],
      carousel_time: 5000,

      rec_num: 4,
      rec_list: [],

      page_num: 12,
      hot_num: 0,
      hot_list: [],
    }
  },
  methods: {
    throttle,
    pushData,
    isSlideToBottom
  },
  components: {
    NavBar,
    IviewCarousel,
    VantCarousel,
    Recommend,
    HotSale
  },
  //创建组件后加载轮播图的图片资源
  created(){
     //提示正在加载
    this.$toast.loading({message: '努力加载中...', duration: 0, forbidClick: true})  
    //拉取轮播图和推荐栏、热卖商品的数据
    const getHot = getHomeGoods('Ineedhot', this.carousel_num)
    const getRec = getHomeGoods('Ineedrecommend', this.rec_num)
    const getGoods = getHomeGoods('Ineeddata',this.hot_num)
    Promise.all([getHot, getRec, getGoods]).then( res => {
      //把拉取到的数据 push进对应的数组里
      this.pushData(res,['carousel_list', 'rec_list', 'hot_list']) 
      //提示完成
      this.$toast.success({message: '加载完成', duration: 1500})    
    }).catch( err => {
      //提示失败
      this.$toast.fail({message: '加载失败', duration: 2500})       
    })
  },
  //挂载组件后添加监听事件
  mounted(){
    let isLoad = true
    window.onscroll = this.throttle(() => {
      if(this.isSlideToBottom() && isLoad){     
        getHomeGoods('Ineeddata',this.hot_num += this.page_num).then( res => {
          this.pushData([res],['hot_list'])
        }).catch( err => {
          isLoad = false
          document.querySelector('.loading').style.display = 'none' //隐藏用户安慰器
          this.$toast.fail({message: '没有更多辣', duration: 2500});
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
  @import '~@assets/css/base.less';
  .bgcolor {
    .boot;
    background-color: #f1f1f1f1;
    padding-top: @nav-height;
    padding-bottom: @tab-height + 10;
    .line {
      font-size: 18px;
      padding: 0 1.6%;
      font-weight: 700;
      text-align: left;
      margin-top: 5px;
      border-bottom: 1px solid #555555;
    }
    .nav-color {
      background-color: pink;
      color: #fff;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 2;
    }
    .loading {
      display: block;
      margin-top: 15px;
    }
  }

</style>