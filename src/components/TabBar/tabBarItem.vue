<template>
  <div id="tab-bar-item" @click="itemClick" :class="{filter:isActive}">
    <span><slot name="icon"></slot></span>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'tarBarItem',
    props: {
      path: {
        type:String,
        required: true
      }
    },
    data(){
      return {
        local_path:this.path
      }
    },
    computed: {
      isActive(){
        return this.path == this.$route.path ? true : false
      }
    },
    methods: {
      itemClick(){  //点击的时候切换路由
        //后面的catch是捕获异常，不写也行，写了就解决重复点击 item 时报错 Avoided redundant navigation to current location:
        this.$router.replace(this.local_path).catch(err => {})
      }
    }
  }
</script>

<style>
  /* 导入一下滤镜 */
  @import '~@assets/css/filter';

  #tab-bar-item{
    flex:1;
    font-size: 14px;
    text-align: center;
  }

  #tab-bar-item span img{
    vertical-align: middle;
    width: 29px;
    height: 29px;
  }
</style>
