<template>
  <section id="content">
    <div class="main">
      <section id="home">
        <div class="left">
          <h1>
            <img src="../assets/images/favicon.png" class="intro-logo" />Ape Inn
          </h1>
          <ul class="collection-list">
            <li>
              <a
                title="Bored Ape Yacht Club"
                class="list-button"
                @click="setView('bayc')"
                ><img src="../assets/images/BAYC.avif" class="list-logo" />Bored
                Ape Yacht Club</a
              >
            </li>
            <li>
              <a
                title="Mutant Ape Yacht Club"
                class="list-button"
                @click="setView('mayc')"
                ><img
                  src="../assets/images/MAYC.avif"
                  class="list-logo"
                />Mutant Ape Yacht Club</a
              >
            </li>
            <li>
              <a
                title="Bored Ape Kennel Club"
                class="list-button"
                @click="setView('bakc')"
                ><img src="../assets/images/BAKC.png" class="list-logo" />Bored
                Ape Kennel Club</a
              >
            </li>
            <li>
              <a
                title="Otherdeed for Otherside"
                class="list-button"
                @click="setView('otherside')"
                ><img
                  src="../assets/images/Otherside.avif"
                  class="list-logo"
                />Otherdeed for Otherside</a
              >
            </li>
            <li>
              <a
                title="Bored Ape Chemistry Club"
                class="list-button"
                @click="setView('chemistry')"
                ><img
                  src="../assets/images/Chemistry.avif"
                  class="list-logo"
                />Bored Ape Chemistry Club</a
              >
            </li>
            <li>
              <a
                title="Sewer Pass"
                class="list-button"
                @click="setView('sewerpass')"
                ><img
                  src="../assets/images/Sewerpass.avif"
                  class="list-logo"
                />Sewer Pass</a
              >
            </li>
          </ul>
          <p>
            <a title="Merch" class="link-button" @click="setView('intro')"
              >Home</a
            >

            <a title="Stake Apes" class="link-button" @click="setView('stake')"
              >Stake</a
            >
            <a title="Swap" class="link-button" @click="setView('swap')"
              >Swap</a
            >
          </p>
          <p>
            <a title="Merch" class="link-button" @click="setView('gallery')"
              >Search</a
            >
            <a title="Merch" class="link-button" @click="setView('merch')"
              >Merch</a
            >
            <a
              href="https://apecoin.com/governance"
              title="Apecoin DAO"
              class="link-button"
              target="_blank"
              >DAO</a
            >
          </p>
          <section id="footer">
            <div class="footer-menu">
              <nav class="footer-navbar">
                <a
                  href=""
                  alt="EthGlobal Showcase"
                  target="_blank"
                  rel="noopener"
                  >showcase</a
                >
                <a
                  href="https://github.com/Webmoss/ape-inn"
                  alt="GitHub"
                  target="_blank"
                  rel="noopener"
                  >github</a
                >
                <a
                  href="https://twitter.com/webmoss"
                  alt="Twitter"
                  target="_blank"
                  rel="noopener"
                  >twitter</a
                >
              </nav>
            </div>
          </section>
        </div>
        <div class="right">
          <IntroView v-if="showView === 'intro'" />
          <StakeView v-if="showView === 'stake'" />
          <SwapView v-if="showView === 'swap'" />
          <GalleryView v-if="showView === 'gallery'" />
          <MerchView v-if="showView === 'merch'" />
          <GovernanceView v-if="showView === 'governance'" />
          <BaycCollection v-if="showView === 'bayc'" />
          <MaycCollection v-if="showView === 'mayc'" />
          <BakcCollection v-if="showView === 'bakc'" />
          <OthersideCollection v-if="showView === 'otherside'" />
          <SewerpassCollection v-if="showView === 'sewerpass'" />
          <ChemistryCollection v-if="showView === 'chemistry'" />
        </div>
      </section>
    </div>
  </section>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useStore } from "../store";
  import authNFT from "@/services/authNFT";

  /* Components */
  import IntroView from "../components/IntroView.vue";
  import StakeView from "../components/StakeView.vue";
  import SwapView from "../components/SwapView.vue";
  import GalleryView from "../components/GalleryView.vue";
  import MerchView from "../components/MerchView.vue";
  import GovernanceView from "../components/GovernanceView.vue";

  /* Collections */
  import BaycCollection from "../components/Collections/BaycCollection.vue";
  import MaycCollection from "../components/Collections/MaycCollection.vue";
  import BakcCollection from "../components/Collections/BakcCollection.vue";
  import OthersideCollection from "../components/Collections/OthersideCollection.vue";
  import SewerpassCollection from "../components/Collections/SewerpassCollection.vue";
  import ChemistryCollection from "../components/Collections/ChemistryCollection.vue";

  /* Init Pinia Store Values and Methods */
  const store = useStore();
  const { account, accountNfts } = storeToRefs(store);

  const showView = ref<string>("intro");

  const setView = (view: string) => {
    showView.value = view;
  };

  /**
   * Get our current 🦊 Metamask Account
   */
  const getAccount = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return;

      /* Get our Account Details */
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        store.updateAccount(accounts[0]);

        const stylesAccounts = ["color: black", "background: cyan"].join(";");
        console.log("%c🧰 Web3 Account %s ", stylesAccounts, account.value);
      } else {
        console.log("No authorized MetaMask accounts connected!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Check if our Wallet is Connected to 🦊 Metamask
   */
  async function checkIfWalletIsConnected() {
    try {
      /*
       * First make sure we have access to window.ethereum
       */
      const { ethereum } = window;
      if (!ethereum) {
        console.log(`Please connect 🦊 Metamask to continue!`);
        return;
      }
      /* Get our Current Account */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      /* Update our Current Account in the Store */
      if (accounts.length !== 0) {
        store.updateAccount(accounts[0]);
        await fetchTokens();
      }
    } catch (error) {
      console.log(error);
    }
  }

  /* Fetch NFT by Account Address */
  async function fetchTokens() {
    if (account.value) {
      try {
        const authAccount = new authNFT();
        const accountNfts = await authAccount.fetchAccountNfts(
          1,
          account.value
        );
        store.addAccountNfts(...accountNfts);
      } catch (error) {
        console.log(`Error fetching tokens, please refresh to try again!`);
      }
    }
  }

  onMounted(async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    await getAccount();
    await checkIfWalletIsConnected();
  });
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  @import "../assets/styles/mixins.scss";

  section#content {
    position: relative;
    width: 100%;
    height: 100%;

    .main {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;

      section#home {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: space-between;
        overflow: hidden;
        margin: 0;
        padding: 0;

        @include breakpoint($break-ssm) {
          flex-direction: column;
          justify-content: center;
        }

        .left {
          width: 20%;
          height: 96%;
          display: flex;
          flex-direction: column;
          align-content: center;
          padding: 2% 1% 2% 3%;

          @include breakpoint($break-ssm) {
            width: 96%;
            padding: 2%;
          }

          h1 {
            font-size: 38px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            align-items: flex-end;
            margin: 0;

            @include breakpoint($break-ssm) {
              font-size: 32px;
            }

            img {
              width: 60px;
              margin: 1px 5px -5px 0;
              @include breakpoint($break-ssm) {
                width: 45px;
                margin: 1px 5px -5px 0;
              }
            }
          }

          .welcome-card {
            border: 1px solid rgb(69, 73, 77);
            background: rgb(17, 16, 16);
            border-radius: 12px;
            padding: 15px 10px;
            margin-top: 30px;

            p {
              font-size: 16px;
              line-height: 26px;
              padding: 0;
              @include breakpoint($break-ssm) {
                padding: 0 0 0 10px;
              }
            }
          }

          .collection-list {
            list-style: none;
            margin-block-start: 0;
            margin-block-end: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
            padding-inline-start: 0;

            background: rgb(17, 16, 16);
            border-radius: 12px;
            padding: 15px 10px 0;
            margin: 30px 0 30px;

            li {
              height: 40px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-content: center;
              align-items: center;
              border: 1px solid transparent;
              background-color: transparent;
              border-radius: 12px;
              margin-bottom: 15px;
              padding: 2px 10px;
              cursor: pointer;
              transition: border-color 0.6s;

              &:hover {
                border-color: rgb(69, 73, 77);
              }
              &:focus,
              &:focus-visible {
                outline: 2px auto -webkit-focus-ring-color;
              }

              .list-button {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                align-items: center;
                font-family: Inter, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
                  "Droid Sans", "Helvetica Neue", sans-serif;
                color: $white;
                font-size: 16px;
                font-weight: 600;
                text-decoration: none;
              }

              img.list-logo {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                text-align: center;
                margin: 3px 5px 2px 0;
                overflow: hidden;
                @include breakpoint($break-ssm) {
                  width: 20px;
                  margin: 1px 5px -5px 0;
                }
              }
            }
          }
        }

        .right {
          width: 73%;
          height: 94%;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
          justify-content: flex-start;
          padding: 2% 2% 2% 1%;
          // overflow: hidden;

          @include breakpoint($break-ssm) {
            width: 96%;
            padding: 2%;
          }

          .token-list {
            width: 100%;
            display: block;
            margin: 0;
            padding: 0;
            // @include breakpoint($break-lg) {
            //   width: 80%;
            //   margin: 0 auto;
            // }
            // @include breakpoint($break-md) {
            //   width: 86%;
            //   margin: 0 auto;
            // }
            // @include breakpoint($break-sm) {
            //   width: 97%;
            //   margin: 0 auto;
            // }
            // @include breakpoint($break-xs) {
            //   width: 80%;
            //   margin: 0 auto;
            // }
          }
        }
      }

      #footer {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        .footer-menu {
          height: inherit;
          display: flex;
          align-items: center;
          justify-content: center;

          .footer-navbar {
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 0.9rem;

            @include breakpoint($break-ssm) {
              padding: 0;
              font-size: 0.8rem;
              justify-content: center;
            }

            a {
              font-size: 0.9rem;
              color: $white;
              margin-right: 14px;
              padding-bottom: 1px;
              text-decoration: none;
              border-bottom: 0.5px solid;
              transition: 0.6s;
              cursor: pointer;

              @include breakpoint($break-ssm) {
                font-size: 0.7rem;
              }
              &:hover {
                font-weight: bold;
                border-bottom: 0.5px solid $white;
              }
              &:focus {
                border-bottom: 0.5px solid $white;
              }
            }
          }
        }
      }

      .hide-mobile {
        display: none;
      }

      .show-mobile {
        display: inline;
      }
    }
  }
</style>
