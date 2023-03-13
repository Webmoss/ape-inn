<template>
  <div class="card">
    <div class="row">
      <div class="column width-100">
        <h1>Search</h1>
        <SearchBar />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h2 class="about-title">Search Results</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  /* Components */
  import SearchBar from "./Search/SearchBar.vue";
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  @import "../assets/styles/mixins.scss";

  .ape-title {
    width: 100%;
    text-align: center;
  }

  .ape-subtitle {
    width: 100%;
    color: $white;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }
</style>
