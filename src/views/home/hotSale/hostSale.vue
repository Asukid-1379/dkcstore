<template>
  <div class="host-sale">
    <hot-sale-item v-for="(item, index) in list" :key="index">
      <template #img><img :src="item.img" /></template>
      <template #price>{{ item.price | price}}</template>
      <template #abstract>{{ item.abstract }}</template>
      <template #sales>{{ item.sales }}</template>
      <template #name>{{ item.name }}</template>
    </hot-sale-item>
  </div>
</template>

<script>
  import HotSaleItem from './hotSaleItem'

  export default {
    name:'HotSale',
    data() {
      return {
        list: this.hot_list
      }
    },
    components: {
      HotSaleItem
    },
    props: {
      hot_list: {
        type: Array,
        required: true
      }
    },
    filters: {
      price(p) {
        return '￥' + p
      }
    }
  }
</script>

<style lang='less' scoped>
  .host-sale {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    
  display: flex;
  flex-flow: row wrap;
  }
</style>
