<template>
  <div class="card">
    <div class="row">
      <div class="column width-40">
        <h1>Ape Merch</h1>
        <p>
          Feeling gucci, get your favourite Ape swag and pay your homage to the
          real OGs
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
        <h2 class="ape-title">The Apecoin Merch</h2>
        <div class="ape-subtitle">
          An ode to the great apes that have come before us...
        </div>
        <div class="row">
          <div class="ape-merch">
            <img src="../assets/images/Maaria_Bajwa.png" />
            <h3>T-Shirts</h3>
          </div>
          <div class="ape-merch">
            <img src="../assets/images/Ape_Water.svg" />
          </div>
          <div class="ape-merch">
            <img src="../assets/images/Bored_wine-co.png" />
          </div>
          <div class="ape-merch">
            <img src="../assets/images/Dean_Steinbeck.jpg" />
            <h3>Ape Stickers</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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

  .ape-merch {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    img,
    svg {
      width: 180px;
      object-fit: inherit;
      background: rgb(17, 16, 16);
      // border: 1px solid rgb(69, 73, 77);
      // border-radius: 50%;
      // overflow: hidden;
      @include breakpoint($break-ssm) {
        width: 100%;
      }
    }
  }
</style>
