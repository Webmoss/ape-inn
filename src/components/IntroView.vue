<template>
  <div class="card">
    <div class="row">
      <div class="column width-50">
        <h1>The Ape Inn</h1>
        <p>
          At <strong>The Ape Inn</strong> you can stake, claim or swap your
          Apecoin tokens, browse all the great Apes and grab some sick merch,
          stop monkeying around and ape in now!
        </p>
        <p>
          The Ape Inn offers a custom $APE dashboards to browse analytics and so
          much more, make sure to check out our merch section for some more
          monkey business.
        </p>
        <div class="row flex-start">
          <ConnectButton />
          <StakeButton />
          <ClaimButton />
          <SwapButton />
        </div>
      </div>
      <div class="column width-50 flex-end">
        <div class="graphic">
          <img src="../assets/images/Alexis_Ohanian.png" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h2 class="ape-title">The Great Apes</h2>
        <div class="ape-subtitle">
          An ode to the great apes that have come before us...
        </div>
        <div class="great-apes-row">
          <div class="great-apes">
            <img src="../assets/images/Maaria_Bajwa.png" />
            <h3>Maaria Bajwa</h3>
          </div>
          <div class="great-apes">
            <img src="../assets/images/Alexis_Ohanian.png" />
            <h3>Alexis Ohanian</h3>
          </div>
          <div class="great-apes">
            <img src="../assets/images/Amy_Wu.png" />
            <h3>Amy Wu</h3>
          </div>
          <div class="great-apes">
            <img src="../assets/images/Dean_Steinbeck.jpg" />
            <h3>Dean Steinbeck</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  /* Components */
  import ConnectButton from "./Buttons/ConnectButton.vue";
  import StakeButton from "./Buttons/StakeButton.vue";
  import ClaimButton from "./Buttons/ClaimButton.vue";
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

  .great-apes-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    padding: 0;

    @include breakpoint($break-ssm) {
      flex-direction: column;
    }
  }
  .great-apes {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    img {
      width: 180px;
      object-fit: contain;
      background: rgb(17, 16, 16);
      border: 1px solid rgb(69, 73, 77);
      border-radius: 50%;
      overflow: hidden;
      @include breakpoint($break-ssm) {
        width: 100%;
      }
    }
  }
</style>
