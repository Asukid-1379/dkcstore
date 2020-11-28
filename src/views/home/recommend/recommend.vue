<template>
  <div class="recommend">
    <recommend-item v-for="(item, index) in list" :key="index">
      <template #img><img :src="item.img" /></template>
      <template #name>{{item.name}}</template>
    </recommend-item>
  </div>
</template>

<script>
  import RecommendItem from './recommendItem'

  export default {
    name:'Recommend',
    data() {
      return {
        list: this.rec_list
      }
    },
    components: {
      RecommendItem,
    },
    props: {
      rec_list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang='less' scoped>
  .recommend {
    display: flex;
    padding-top: 10px;
    // justify-content: space-evenly;
    flex-flow: row wrap;
    
  }
  
</style>
