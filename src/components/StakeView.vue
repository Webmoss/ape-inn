<template>
  <div class="card">
    <div class="row">
      <div class="column width-40">
        <h1>Ape Stake n Claim</h1>
        <p>
          Stake, claim and browse your favourite Ape NFTs all in one place, stop
          monkeying around ...
        </p>
        <p>
          The ape Inn offers Apecoin Governance - DAO tooling, dashboards,
          analytics and so much more, make sure to check out our merch section
          for some more monkey business.
        </p>
        <div class="row">
          <ConnectWalletButton />
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
        <h2 class="about-title">The Apecoin Protocol</h2>
        <p>
          ApeCoin is an ERC-20 governance and utility token used within the APE
          ecosystem to empower a decentralized community building at the
          forefront of web3.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import { ref } from "vue";

  // defineProps<{ msg: string }>();

  // const count = ref(0);
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
