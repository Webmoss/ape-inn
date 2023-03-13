<template>
  <div class="card">
    <div class="row">
      <div class="column width-40">
        <h1>Welcome <br />to the Ape Inn</h1>
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
    <div class="row">
      <div class="column">
        <h2 class="ape-title">The Great Apes</h2>
        <div class="ape-subtitle">
          An ode to the great apes that have come before us...
        </div>
        <div class="row">
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
  import ConnectWalletButton from "../components/ConnectWalletButton.vue";
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
      width: 200px;
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
