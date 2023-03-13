<template>
  <div class="card">
    <div class="row">
      <div class="column width-40">
        <h1>Ape Swap</h1>
        <p>Swap your Apecoin for all the banannas in the world...</p>
        <div class="row flex-start">
          <ConnectButton />
          <SwapButton />
        </div>
      </div>
      <div class="column width-60 flex-end">
        <div class="graphic">
          <img src="../assets/images/Alexis_Ohanian.png" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h2 class="ape-title">The Apecoin Swap</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  /* Components */
  import ConnectButton from "./Buttons/ConnectButton.vue";
  import SwapButton from "./Buttons/SwapButton.vue";
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
