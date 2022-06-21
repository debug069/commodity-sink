<template>
  <div id="app-container">
    <HeaderCom></HeaderCom>
    <router-view></router-view>
    <FooterCom v-show="$route.meta.show"></FooterCom>
  </div>
</template>

<script>
import HeaderCom from '@/components/Header/index.vue'
import FooterCom from '@/components/Footer/index.vue'
export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom
  }
}
</script>

<style>
</style>
