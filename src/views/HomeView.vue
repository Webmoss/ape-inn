<template>
  <section id="content">
    <div class="main">
      <section id="home">
        <div class="left">
          <h1>
            <img src="../assets/images/favicon.png" class="intro-logo" />APE-inn
          </h1>
          <p>Welcome to Ape-inn, where all the big Apes come to play....</p>
          <p>
            Browse your dashboard ... stake, claim and view analytics on your
            Apes.
          </p>
          <p>
            Our web3 dApp is your one stop Apecoin shop... our slick user
            interface has you covered, so stop monkeying around and just ape in
            now! Visit APE-inn for Apecoin Governance - DAO tooling, dashboards,
            analytics and so much more, make sure to check out our merch section
            for some more monkey business.
          </p>
          <p>
            <a href="/" title="Stake Apes" class="link-button">Stake</a>
            <a href="/" title="Claim" class="link-button">Claim</a>
            <a href="/" title="Merch" class="link-button">Merch</a>
          </p>
        </div>
        <div class="right">
          <div class="home-graphic">
            <!-- <img src="../assets/images/BG2.png" /> -->
          </div>
          <div class="search-bar">
            <input
              v-model="searchValue"
              type="text"
              class="search-input"
              placeholder="Search Images"
            />
            <button class="search-button" @click="searchFn()">Search</button>
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="footer-menu">
          <nav class="footer-navbar">
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
  </section>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from "vue";

  const searchValue = ref<string>("");
  const searchResults = ref<string[] | void>([]);

  async function searchFn() {
    console.log("searchValue", searchValue.value);
    console.log("searchResults", searchResults.value);
  }

  onMounted(async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  @import "../assets/styles/mixins.scss";

  section#content {
    position: relative;
    height: 100%;

    .main {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 0;

      section#home {
        color: $white;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;

        @include breakpoint($break-ssm) {
          flex-direction: column;
          justify-content: center;
        }

        .left {
          width: 25%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
          justify-content: center;
          padding: 0 1% 0 2%;

          @include breakpoint($break-ssm) {
            width: 98%;
            padding: 1%;
          }

          h1 {
            font-size: 38px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-end;
            margin: 0;

            @include breakpoint($break-ssm) {
              font-size: 32px;
            }

            img {
              width: 50px;
              margin: -5px 5px 5px 0;
              @include breakpoint($break-ssm) {
                width: 45px;
              }
            }
          }
          p {
            padding: 0;
            @include breakpoint($break-ssm) {
              padding: 0 0 0 10px;
            }
          }

          .link-button {
            height: 35px;
            font-size: 0.9rem;
            color: $white;
            background-color: $black;
            margin-right: 14px;
            text-decoration: none;
            border: 1px solid $black;
            border-radius: 20px;
            padding: 10px 24px 8px;
            transition: 0.6s;
            cursor: pointer;

            @include breakpoint($break-ssm) {
              font-size: 0.7rem;
            }

            &:hover {
              border: 1px solid $white;
            }

            &:focus {
              border: 1px solid $white;
            }
          }
        }

        .right {
          width: 70%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-content: flex-start;
          justify-content: flex-start;
          padding: 0 1%;
          overflow: scroll;

          @include breakpoint($break-ssm) {
            width: 100%;
            align-content: center;
            justify-content: center;
          }
        }

        h1 {
          font-size: 42px;
          margin-bottom: 20px;
          span {
            color: $white;
          }
        }

        p {
          color: $white;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .home-graphic {
          width: 100%;
          padding: 0;

          img,
          svg {
            width: 1350px;
            object-fit: cover;
            overflow: hidden;
            @include breakpoint($break-ssm) {
              width: 100%;
            }
          }
        }
      }

      .search-bar {
        width: 400px;
        position: fixed;
        top: 30px;
        right: 30px;

        input.search-input {
          width: 98%;
          height: 33px;
          color: $ape-blue;
          background-color: #ffffff;
          border: 1px solid $white;
          border-radius: 20px;
          letter-spacing: 1px;
          font-size: 0.9rem;
          padding: 0px 0px 0px 1%;
          margin: 0 10px 0 0;
          text-align: left;
          @include breakpoint($break-md) {
            min-width: 200px;
          }
          @include breakpoint($break-sm) {
            width: 80%;
            margin: 0 1% 1% 1%;
          }
          @include breakpoint($break-xs) {
            width: 80%;
            margin: 0 1% 1% 1%;
          }
        }
        input.search-input::placeholder {
          color: $ape-blue;
          letter-spacing: 1px;
          padding-left: 10px;
        }
        input.search-input:focus {
          border: 1px solid $black;
          outline: none;
        }
        .search-button {
          position: absolute;
          top: 0;
          right: 0;
          color: $white;
          background-color: $black;
          font-size: 0.9rem;
          width: auto;
          height: 35px;
          border-radius: 20px;
          border: 1px solid $black;
          padding-left: 20px;
          padding-right: 20px;
          transition: 0.6s;
          cursor: pointer;

          &:hover {
            color: $ape-blue;
            text-decoration: none;
            background-color: $ape-blue;
            border: 1px solid $white;
          }
        }
      }

      #footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em 44px;

        @include breakpoint($break-ssm) {
          padding: 10px 0;
        }

        color: $black;
        background: $ape-blue;

        .footer-menu {
          display: flex;
          align-items: center;

          .footer-navbar {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin: 0;
            padding: 0.3em;
            font-size: 0.9rem;

            @include breakpoint($break-ssm) {
              padding: 0;
              font-size: 0.8rem;
              justify-content: center;
            }

            a {
              font-size: 0.9rem;
              color: $ape-blue;
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
                border-bottom: 0.5px solid $black;
              }

              &:focus {
                border-bottom: 0.5px solid $black;
              }
            }

            svg {
              cursor: pointer;
              font-size: 2em;
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
