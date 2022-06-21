<template>
  <div id="home-container">
    <TypeNavCom></TypeNavCom>
    <ListContainerCom></ListContainerCom>
    <RecommendCom></RecommendCom>
    <RankCom></RankCom>
    <LinkCom></LinkCom>
    <FloorCom></FloorCom>
    <FloorCom></FloorCom>
    <BrandCom></BrandCom>
  </div>
</template>

<script>
import ListContainerCom from '@/views/Home/ListContainer/index.vue'
import RecommendCom from '@/views/Home/Recommend/index.vue'
import RankCom from '@/views/Home/Rank/index.vue'
import LinkCom from '@/views/Home/Like/index.vue'
import FloorCom from '@/views/Home/Floor/index.vue'
import BrandCom from '@/views/Home/Brand/index.vue'
export default {
  name: 'Home',
  components: {
    ListContainerCom,
    RecommendCom,
    RankCom,
    LinkCom,
    FloorCom,
    BrandCom
  }
}
</script>

<style>
</style>