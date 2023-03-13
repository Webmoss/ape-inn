<template>
  <div class="card">
    <div class="row">
      <div class="column width-40">
        <h1>Governance</h1>
        <p>
          The ApeCoin community governs itself via the ApeCoin DAO, the
          decentralized governance framework that supports the Ecosystem Fund.
          The DAO follows a proposal process to vote on how the Ecosystem Fund
          will be distributed by the APE Foundation to promote a diverse and
          self-sustaining ecosystem.
        </p>
        <p>
          This governance guide is an overview of the proposal process. It’s a
          living document that will evolve and improve with the DAO community’s
          input.
        </p>
        <div class="row">
          <a
            href="https://apecoin.com/governance"
            title="Apecoin DAO"
            class="link-button"
            target="_blank"
            >Governance</a
          >
          <a
            href="https://snapshot.org/#/apecoin.eth"
            title="Apecoin DAO"
            class="link-button"
            target="_blank"
            >DAO</a
          >
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
        <h2 class="about-title">Membership</h2>
        <p>
          Participating in idea submission, commentary, proposal submission, and
          voting is restricted to ApeCoin DAO members. Holding ApeCoin is the
          only requirement for membership in the DAO.
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

  .about-title {
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
