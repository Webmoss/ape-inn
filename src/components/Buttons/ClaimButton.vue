<template>
  <div class="connect-wallet-container">
    <!-- 🦊 Metamask Connected -->
    <button
      v-if="account"
      :class="
        btnSize === 'large'
          ? 'connect-wallet-button'
          : 'connect-wallet-small-button'
      "
      @click="claimTokens()"
    >
      Claim
    </button>
  </div>
</template>
<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useStore } from "../../store";

  defineProps({
    btnSize: {
      type: String,
      default: "large",
      required: false,
    },
  });

  const store = useStore();
  const { account } = storeToRefs(store);

  async function claimTokens() {
    store.setLoading(true);
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Please connect 🦊 Metamask to continue!");
        return;
      }
      const [accountAddress] = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accountAddress) {
        store.updateAccount(accountAddress);
        store.setLoading(false);
      }
      store.setLoading(false);
    } catch (error) {
      console.log("Error", error);
      store.setLoading(false);
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/styles/variables.scss";
  @import "../../assets/styles/mixins.scss";

  .connect-wallet-container {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    img {
      padding-bottom: 20px;
    }
  }

  .connect-wallet-button {
    width: auto;
    height: 45px;
    color: $white;
    background: rgb(17, 16, 16);
    font-size: 18px;
    font-weight: 600;
    border: 1px solid rgb(69, 73, 77);
    border-radius: 30px;
    padding-left: 50px;
    padding-right: 50px;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
      color: $white;
      border: 1px solid $ape-blue;
    }
  }

  .connect-wallet-small-button {
    color: $white;
    background-color: $ape-blue;
    font-size: 15px;
    font-weight: bold;
    width: auto;
    height: 35px;
    border: 2px solid $white;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 5px;
    margin-right: 10px;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
      color: $white;
      border: 2px solid $white;
    }
  }

  .profile-wallet-button {
    color: $white;
    background-color: $ape-blue;
    font-size: 18px;
    font-weight: bold;
    width: auto;
    height: 55px;
    border: 2px solid $white;
    border-radius: 30px;
    padding-left: 60px;
    padding-right: 60px;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
      color: $white;
      border: 2px solid $white;
    }
    svg {
      margin-bottom: -3px;
    }
  }

  .profile-wallet-small-button {
    color: $white;
    background-color: $ape-blue;
    font-size: 15px;
    font-weight: bold;
    width: auto;
    height: 35px;
    border: 2px solid $white;
    border-radius: 30px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 10px;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
      color: $white;
      border: 2px solid $white;
    }

    svg {
      margin-bottom: -3px;
    }
  }
</style>
