<template>
  <tab-bar>   <!-- 组件只提供了默认插槽，此时标签名可以当做template来用 -->
    <tab-bar-item path='/home'>
      <template #icon><img src="@assets/img/home/home.png"></template>
      <template #text>首页</template>
    </tab-bar-item>
    <tab-bar-item path='/menu'>
      <template #icon><img src="@assets/img/menu/menu.png"></template>
      <template #text>分类</template>
    </tab-bar-item>
    <tab-bar-item path='/cart'>
      <template #icon><img src="@assets/img/cart/cart.png"></template>
      <template #text>购物车</template>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <template #icon><img src="@assets/img/profile/nickname.png"></template>
      <template #text>我的</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@components/common/TabBar/tabBar'
  import TabBarItem from '@components/common/TabBar/tabBarItem'

  export default {
      name:'mainTabBar',
      components:{
        TabBar,
        TabBarItem
      }
  }
</script>

<style lang="less" scoped>

</style>
