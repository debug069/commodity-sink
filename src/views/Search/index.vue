<template>
  <div id="search-container">
    <h1>Search页面</h1>
    <h2>params参数:---{{$route.params.keyword}}</h2>
    <h2>query参数:---{{$route.query.k}}</h2>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style>
</style>