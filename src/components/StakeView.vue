<template>
  <div class="card">
    <div class="row">
      <div class="column width-40">
        <h1>Stake, Claim, Earn</h1>
        <p>
          Stake, claim and your $APE's, stop monkeying around and get your
          APY's'
        </p>
        <div class="row flex-start">
          <ConnectButton />
          <StakeButton />
          <ClaimButton />
          <EarnButton />
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
        <h2 class="ape-title">Rewards</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  /* Components */
  import ConnectButton from "./Buttons/ConnectButton.vue";
  import StakeButton from "./Buttons/StakeButton.vue";
  import ClaimButton from "./Buttons/ClaimButton.vue";
  import EarnButton from "./Buttons/EarnButton.vue";
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
